import { GrSearch } from "react-icons/gr";
import "./searchbar.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Searchbar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response => response.json())
      .then(result => {
        const respuesta = result.results.filter((user) => {
          return user.name.toLowerCase().includes(value)
        });
        setResults(respuesta);
      })
    
  }

  const handleChange = (value) => {
    setInput(value);
    fetchData(value)
  }

  return (
    <>
      <div className="input-wrapper">
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          style={{color: 'white'}}
        />
        <GrSearch id="search-icon" style={{marginRight: '-1rem'}}/>
      </div>
    </>
  );
}

export default Searchbar;
