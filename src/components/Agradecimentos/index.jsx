import "./styles.css"
import { Link } from "react-router-dom"
import Button from "../Button"
import Cards from "../Cards"

function Agradecimentos() {
  return (
    <div className="home-container">
      <Cards /> 
      <section className="container">
        <Link to='/'>
          <Button />
        </Link>
      </section>
    </div>
  )
}

export default Agradecimentos