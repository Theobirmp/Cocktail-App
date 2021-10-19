import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../components/AppContext'
import SoloCocktail from '../components/SoloCocktail'
import { v4 as uuidv4 } from 'uuid';


const CocktailPage = () => {
    const {cocktailName}=useParams()
    const {cocktails}=useContext(AppContext)
    return (
        cocktails.map(cocktail=>{
            if(cocktail.strDrink===cocktailName){
                return(<SoloCocktail key={uuidv4()} id={cocktail.idDrink} name={cocktail.strDrink} alcoholic={cocktail.strAlcoholic} image={cocktail.strDrinkThumb} favourite={cocktail.favourite} ingredients={[cocktail.strIngredient1,cocktail.strIngredient2,cocktail.strIngredient3,cocktail.strIngredient4]} instructions={cocktail.strInstructions}/>)
        }else{
            return('')
        }
    })
    )
}

export default CocktailPage