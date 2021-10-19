import React from 'react'
import {createContext,useState} from "react"
import { useEffect } from 'react'

const COCTAIL_DB_DATABASE="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
export const AppContext=createContext()



export function AppProvider({children}){
    const [cocktails, setCocktails] = useState([])            //all cocktails
    const [searchCocktails,setSearchCocktails]=useState('a') //user input in the search bar
    const [favouriteCocktails,setFavouriteCocktails]=useState([])

    const  fetchCocktailData=async()=>{
    try {
        const response = await fetch(`${COCTAIL_DB_DATABASE}${searchCocktails}`)
        const data =  await response.json()
        data.drinks=data.drinks.map(obj=>({...obj,favourite:false})) //add favourite property
        var tempCocktails=data.drinks
        var tempFavouriteCocktails=favouriteCocktails
        if(tempFavouriteCocktails.length!==0 && tempCocktails.length!==0 ){
            tempFavouriteCocktails.map(fav=>{
            tempCocktails=tempCocktails.map(coc=>{
                if(fav.id===coc.idDrink){
                    return ({...coc,favourite:true})
                }
                return coc
            })
            return fav
    })
    }
    } catch (error) {
        console.log("could not fetch the data(probably what you typed does not exist as a name in the database")
    }
    setCocktails(tempCocktails)

}   

useEffect(() => {
    fetchCocktailData()
    setSearchCocktails('')
}, [])


    const values={cocktails,setCocktails,searchCocktails,setSearchCocktails,fetchCocktailData,favouriteCocktails,setFavouriteCocktails,}
    return (
            <AppContext.Provider value={values}>
                {children}
            </AppContext.Provider>
    )
}
