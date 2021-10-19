import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react'
import { AppContext } from './AppContext'
import "../css/FavCocktail.css"

const SoloCocktail = ({id,name,alcoholic,image,favourite,ingredients,instructions}) => {
    const {favouriteCocktails,setFavouriteCocktails}=useContext(AppContext)
    const {cocktails,setCocktails}=useContext(AppContext)
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
    const lessInstructions=useRef()
    const moreInstructions=useRef()
    function ShowMore(){
        lessInstructions.current.classList.toggle("display-none")
        moreInstructions.current.classList.toggle("display-none")
    }
    return (
        <div className="fav-drink solo-drink">
                    <h1>{name}</h1>
                    <h1 className="is-alcoholic">{alcoholic}</h1>
                    <img className="drink-image" src={image} alt={name+' image'}></img>
                    <b>Main Ingredients:</b>
                    <ul>
                        {ingredients.map((ingre)=>(
                            ingre?(<li className="instructions" key={uuidv4()}>{ingre}</li>):''
                        ))}
                    </ul>
                    <b>Instructions:</b> 
                    {instructions.length>=100?(<><p ref={lessInstructions} className="instructions">{instructions.substring(0,100)}...<button className="show-more-less-button" onClick={ShowMore}>Read More</button></p>
                    <p ref={moreInstructions} className="instructions display-none">{instructions}<button className="show-more-less-button" onClick={ShowMore}>Read Less</button></p></>):(instructions)}
                    <button onClick={handleClick} className={favourite?"remove-favourite":"add-favourite"}>{favourite?"remove":"add"}</button>
                </div>
    )
}

export default SoloCocktail

