import "./styles.css"

function Cards({ ccv, cardn, name, date }) {
  return (
    <div className="background-image">
        <div className="background-cardb">
          <p>000</p>
        </div>
        <div className="background-cardf">
            <div className="cardl"></div>
            <p  className="card-number">0000 0000 0000 0000</p>
            <div className="card-info">
              <p>your name here</p>
              <p>00/00</p>
            </div>
        </div>
      </div>
  )
}

export default Cards