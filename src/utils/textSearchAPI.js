import React from 'react'
import axios from 'axios'
import gmapsApiKey from './credentials'

//const API_key = gmapsApiKey
const API_key = process.env.REACT_APP_GMAPS_API_KEY
const endpoint_search= `https://places.googleapis.com/v1/places:searchText?key=${API_key}`

async function getSearchResults (business = '',location ='',filter='bestMatch') {
    console.log(`filter button: ${filter}`)
    let textQuery
    if (business && location) {
        textQuery = `${business} in ${location}`
    } else if (business) {
        textQuery = `${business}`
    } else if (location) {
        textQuery = `popular restaurants in ${location}`
    } else {
        textQuery = `popular restaurants`
    }
    console.log('getSearchResults TRIGGERED')
    console.log(business)
    console.log(location)

    function textReplace(text) {
        const replacedText =  text.replace(/_/g, " ").replace("restaurant","").replace("point of interest","")
        const capitaliseWord = replacedText.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return capitaliseWord.join(" ")
    }

    try{
        const request = {
            method: 'post',
            url: endpoint_search,
            headers:{
                'Content-Type': 'application/json',
                'X-Goog-FieldMask': 'places.displayName,places.priceLevel,places.photos,places.googleMapsUri,places.shortFormattedAddress,places.rating,places.userRatingCount,places.types,places.currentOpeningHours,places.priceLevel' 
            },
            data: {
                textQuery: textQuery,
                includedType: "restaurant",
                pageSize: 5

            }
        }
        if (filter === 'openNow') {
            request.data.openNow = true
        } else if (filter === 'budget') {
            request.data.priceLevels = 'PRICE_LEVEL_INEXPENSIVE'
        }
        const response = await axios(request)
        if (response.status === 200) {
            const data = response.data.places
            console.log(data)
            await Promise.all(data.map(async (place,index)=>{
                const imgUrl = await getPhoto(place.photos[0].name)
                data[index].photoUrl = imgUrl
            }))
            /*
            data.map(({types},indexOuter)=>
                types.map((type,indexInner)=>data[indexOuter].types[indexInner] = textReplace(type)))
            */
           const updatedData = data.map(place=>({
            ...place,
            types: place.types.map((type) => textReplace(type)).filter((word)=> word !== ""),
            priceLevel: place.priceLevel?place.priceLevel
                                                .replace("PRICE_LEVEL_FREE","!$!")
                                                .replace("PRICE_LEVEL_INEXPENSIVE","$")
                                                .replace("PRICE_LEVEL_MODERATE","$$")
                                                .replace("PRICE_LEVEL_EXPENSIVE","$$$")
                                                .replace("PRICE_LEVEL_VERY_EXPENSIVE","$$$$")
                                                .replace("PRICE_LEVEL_UNSPECIFIED","N/A")
                                            : "N/A"
                                        }));
            //console.log(typeof(data[0].priceLevel))
            return updatedData
        } else {
            throw new Error('search result API call failed.')
        }
    } catch (error) {alert(error.message)};
}

async function getPhoto (name) {
    const baseurl_photo= 'https://places.googleapis.com/v1';
    const endpoint_photo = `${baseurl_photo}/${name}/media`;
    const parameters = {
        maxHeightPx: 400,
        skipHttpRedirect: true
    }
    const res = await axios({
        method: 'get',
        url: endpoint_photo,
        headers:{
            'Content-Type': 'application/json'
        },
        params:{
            key: API_key,
            ...parameters
        }
    })
    const imageData = res.data.photoUri
    return imageData
}



export default getSearchResults

