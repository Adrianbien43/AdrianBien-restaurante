import './CategorySelec.css';

const CategorySelec = ({
  categories,
  selectedCategory,
  onCategoryChange,
  categoryTranslations
}) => {
  return (
    <div className="category-selector">
      {categories.map(category => (
        <button
          key={category}
          className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {categoryTranslations[category] || category}
        </button>
      ))}
    </div>
  );
}

export default CategorySelec;