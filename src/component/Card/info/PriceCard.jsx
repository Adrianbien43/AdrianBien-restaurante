import './PriceCard.css'

function PriceCard({ price }) {
  return (
    <div className="PriceCard">
      <p>{price}</p>
    </div>
  )
}

export default PriceCard;