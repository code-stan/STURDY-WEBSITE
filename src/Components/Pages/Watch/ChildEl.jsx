// eslint-disable-next-line react/prop-types
const ChildEl = ({artist, img}) => {
  return (
    <section className='artist-tab' tabIndex={0}>
        <div className="artist__name">({artist})</div>
        <div className="image-tab">
          <img src={`./Assets/${img}.jpeg`} alt={img} draggable="false" />
        </div>
    </section>
  )
}

export default ChildEl