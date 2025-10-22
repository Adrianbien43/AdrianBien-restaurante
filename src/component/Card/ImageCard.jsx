import './ImageCard.css';

function ImageCard({ src, alt, width, height }) {
  return (
    <img className="ImageCard"
      src={src}
      alt={alt}
      style={{ width: width, height: height }}
    />
  )
}

export default ImageCard;