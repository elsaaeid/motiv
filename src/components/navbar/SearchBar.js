import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import dataNavSearch from "./dataNavSearch"

function SearchBar({placeholder}) {


  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      
      <div className='bg-white d-flex justify-center align-items-center flex-column' style={{width: "100%", height: "100%"}}>
        <a href={item.path}><img  className='img-search cursor-pointer' style={{display: 'block', textAlign: 'left', background: "none"}} src={item.img} alt={item.name} /></a>
        <div className='d-flex justify-around flex-column'>
          <span className="search-name" style={{ display: 'block', textAlign: 'center' }}>name: {item.name}</span>
          <span className="search" style={{ display: 'block', textAlign: 'center' }}>status: {item.status}</span>        
        </div>
      </div>
      
    )
  }

  return (
    <div className="SearchBar" style={{zIndex: '1'}}>
      <header className="SearchBar-header">
        <div>
          <ReactSearchAutocomplete
            items={dataNavSearch}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder={placeholder}
          />
        </div>
      </header>
    </div>
  )
}

export default SearchBar;