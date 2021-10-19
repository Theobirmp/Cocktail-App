import React from 'react'
import { useContext } from 'react'
import { AppContext } from './AppContext'
import { useRef,useEffect } from 'react'
const SearchBar = () => {
     const {searchCocktails,setSearchCocktails,fetchCocktailData}=useContext(AppContext)
     const searchBar=useRef()
     function handleSubmit(e){
        e.preventDefault()
        fetchCocktailData()
     }
     function handleChange(e){
        e.preventDefault()
        setSearchCocktails(e.target.value)
     }
     useEffect(() => {
        searchBar.current.focus()
    }, [])

    return (
       <>
       <span className="search-cocktail-name">What do you want to drink tonight?</span>
        <div className="search-bar">
        <form onSubmit={handleSubmit}>
         <input ref={searchBar} className="search-input" type="text" value={searchCocktails} onChange={handleChange} />
        </form>
        </div>
        </>
    )
}

export default SearchBar
