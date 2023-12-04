import { GrSearch } from "react-icons/gr";
import "./searchMobile.css";

function SearchMobile() {
  return (
    <div className="search-home">
      <input placeholder="Buscar" style={{ color: "#fff" }} />
      <div className="search-home-icon">
        <GrSearch />
      </div>
    </div>
  );
}

export default SearchMobile;
