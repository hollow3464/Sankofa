import "./searchbar.css";

function SearchResults({ results }) {
    console.log(results)
  return (
    <div className="result-list">
      {results.map((result, id) => {
        return (
          <div key={id} className="search-result" onClick={(e) => alert(`Seleccionaste ${result.name}`)}>
            {result.name}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
