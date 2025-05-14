

const VendorSearch = ({ searchQuery, setSearchQuery }) => {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search vendors by name or business..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button 
          type="button" 
          onClick={() => setSearchQuery('')}
          className="search-clear"
        >
          Clear
        </button>
      </div>
    );
  };
  
  export default VendorSearch;