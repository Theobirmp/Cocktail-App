import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react'
import { AppContext } from './AppContext'
import { useState } from 'react';
import "../css/FavCocktail.css"

const FavCocktail = ({id,name,alcoholic,image,favourite,ingredients,instructions}) => {
    const {favouriteCocktails,setFavouriteCocktails}=useContext(AppContext)
    const {cocktails,setCocktails}=useContext(AppContext)
    const [showMoreIngredients, setShowMoreIngredients]=useState(false)
    const [showMoreInstructions, setShowMoreInstructions]=useState(false)
    
    function handleClick(e){    //add a cocktail into the favourites
        e.preventDefault()
        let tempCocktails=cocktails
        let tempFavouriteCocktails=favouriteCocktails
        tempCocktails=tempCocktails.map(coc=>{
            if(coc.idDrink===id){
                coc.favourite=!coc.favourite
                return coc
            }
                return(coc)
        })
        if(favourite===false){
            tempFavouriteCocktails.push({id,name,alcoholic,image,favourite:true,ingredients,instructions})
        }else{
            tempFavouriteCocktails=tempFavouriteCocktails.filter(coc=>(coc.id!==id))
        }
        setCocktails(tempCocktails)
        setFavouriteCocktails(tempFavouriteCocktails)
}
    return (
            <div className="fav-drink solo-drink">
                    <h1>{name}</h1>
                    <h1 className="is-alcoholic">{alcoholic}</h1>
                    <img className="drink-image" src={image} alt={name+' image'}></img>
                    <b>Main Ingredients:</b>
                    {showMoreIngredients?(<ul>
                        {ingredients.map((ingre)=>(
                            ingre?(<li className="instructions" key={uuidv4()}>{ingre}</li>):''
                        ))}
                    </ul>):(<button style={{cursor:"pointer"}} onClick={()=>{setShowMoreIngredients(true)}}>Show More</button>)}
                    <b>Instructions:</b>
                    <p className="instructions">{showMoreInstructions?(instructions):(<button style={{cursor:"pointer"}} onClick={()=>{setShowMoreInstructions(true)}}>Show More</button>)}</p>
                    <button onClick={handleClick} className={favourite?"remove-favourite":"add-favourite"}>{favourite?"remove":"add"}</button>
                </div>
    )
}

export default FavCocktail

