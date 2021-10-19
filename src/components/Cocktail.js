//used to display the cocktails as links in the main page
import React from 'react'

const Cocktail = ({strDrink,image,favourite}) => {
    return (
        <div className={favourite?"cocktail-container red-border":"cocktail-container"}>
            <img className="drink-image" src={image} alt={strDrink+' image'} />
            <h1 className="coctkail-info">{strDrink}</h1>
        </div>
    )
}

export default Cocktail


