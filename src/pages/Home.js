import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../components/AppContext'
import { v4 as uuidv4 } from 'uuid';
import SearchBar from '../components/SearchBar';
import Cocktail from '../components/Cocktail';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../css/Home.css'
const Home = () => {
    const {cocktails}=useContext(AppContext)

    return (
        <div>
        <Header/>
        <SearchBar/>
        <div className='all-cocktail-container'>
        {cocktails?(cocktails.map(cocktail=>(
            <Link className="no-text-decoration-link" key={uuidv4()} to={`/cocktail/${cocktail.strDrink}`}><Cocktail strDrink={cocktail.strDrink} image={cocktail.strDrinkThumb} favourite={cocktail.favourite}></Cocktail></Link>
        ))):(<h1 className="no-drinks-found">Your Search Yielded no results. Please try another drink</h1>)}
        {console.log(cocktails)}
        </div>
        </div>
    )
}

export default Home

