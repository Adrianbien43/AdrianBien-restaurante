import './CategoryCard.css'

function CategoryCard({ category }) {
  return (
    <div className="CategoryCard">
      <p>{category}</p>
    </div>
  )
}

export default CategoryCard;