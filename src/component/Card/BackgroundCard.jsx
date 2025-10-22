import './BackgroundCard.css'

function BackgroundCard({ children }) {
  return (
    <div className="BackgroundCard">
      {children}
    </div>
  )
}

export default BackgroundCard;