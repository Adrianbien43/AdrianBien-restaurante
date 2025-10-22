import './ResultsSearch.css';

const ResultsSearch = ({
  searchTerm,
  handleSearchChange,
  filteredMeals,
  selectedCategory,
  categoryTranslations
}) => {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por nombre de comida..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        {searchTerm && (
          <div className="search-results">
            {filteredMeals.length} resultado{filteredMeals.length !== 1 ? 's' : ''} encontrado{filteredMeals.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>

      {filteredMeals.length === 0 && (
        <div className="no-meals">
          <p>
            {searchTerm
              ? `No se encontraron platos con "${searchTerm}" en ${categoryTranslations[selectedCategory] || selectedCategory}`
              : `No hay platos disponibles en la categoría ${categoryTranslations[selectedCategory] || selectedCategory}`
            }
          </p>
        </div>
      )}
    </>
  );
};

export default ResultsSearch;