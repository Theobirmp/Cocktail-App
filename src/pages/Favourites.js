import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { AppContext } from '../components/AppContext'
import FavCocktail from '../components/FavCocktail';
import { Link } from 'react-router-dom';
import "../css/Favourites.css"
import {BiSad} from "react-icons/bi"


const Favourites = () => {
    
    const {favouriteCocktails}=useContext(AppContext)
    return(
        <>
        {favouriteCocktails.length?(<header className="fav-cocktails-message">These are your favourite Cocktails</header>):''}
        <div className="favourite-cocktails">
            {favouriteCocktails.length?(favouriteCocktails.map((cocktail)=>(
            <FavCocktail key={uuidv4()} id={cocktail.id} name={cocktail.name} alcoholic={cocktail.alcoholic} image={cocktail.image} favourite={cocktail.favourite} ingredients={cocktail.ingredients} instructions={cocktail.instructions}/>
            ))):(
                <div className="no-fav-cocktails-container">
                <span className="no-fav-cocktails-message">Seems like you have not added any Cocktails to your Favourites</span>
                <div className="sad-face-image"><BiSad/></div>
                <span className="please-message">Please use the search bar to add Cocktails to your Favourites</span>
                {/* <button ><Link className="back-to-search-button" to="/">Back to Search</Link></button> */}
                <Link to="/"><button className="back-to-search-button">Back to Search</button></Link>
                </div>
            )}
        </div>
        </>
    )
}

export default Favourites
