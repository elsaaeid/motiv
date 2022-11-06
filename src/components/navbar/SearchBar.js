import React, { useState } from 'react'
import {GrFormSearch, GrFormClose} from "react-icons/gr";
import dataNavSearch from './dataNavSearch';


function SearchBar({ placeholder}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e)=> {
   const searchWord = e.target.value;
   setWordEntered(searchWord);
   const newFilter = dataNavSearch.filter((item) =>{
    return item.name.toLowerCase().includes(searchWord.toLowerCase());
   });

   if (searchWord === "") {
    setFilteredData([])
   } else {
    setFilteredData(newFilter);
   }
  }

  const clearInput = ()=> {
    setFilteredData([]);
    setWordEntered("");
  }
  return (
    <div className="SearchBar d-flex justify-center flex-col" style={{zIndex: '1'}}>
      <header className="SearchBar-header d-flex flex-row justify-center">
        <div className='search-icon cursor-pointer'>
          {filteredData.length === 0 ? <GrFormSearch /> : <GrFormClose onClick={clearInput} />}
          </div>
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
      </header>
      <div className="result-body" style={{zIndex: '1'}}>
        {filteredData.length !== 0 && ( 
          <table className='table-search'>
        <tr>
          <th>name</th>
          <th>product</th>
          <th>status</th>
          <th>price</th>
        </tr>
        {filteredData.slice(0, 15).map( (item )=> {
          return(
          <tr key={item.id}>
              <th>{item.name}</th>
              <th><img src={item.img} alt={item.name} style={{background: "none"}} /></th>
              <th>{item.status}</th>
              <th>{item.price}</th>
          </tr>
          )
        })}
        </table>
        )}
      </div>
    </div>
  )
}

export default SearchBar;