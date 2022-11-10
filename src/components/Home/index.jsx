import Button from "../Button"
import Input from "../Input"
import Cards from "../Cards"

import { Link } from "react-router-dom"

import "./styles.css"

function Home() {
  return (
    <main className="home-container">
      <Cards />
      <section className="container">
        <div className="input-container">
          <p>cardholder name</p>
          <Input tp="text" placeh="e.g Your name here" classnum="1" />
        </div>
        <div className="input-container">
          <p>card number</p>
          <Input tp="number" placeh="e.g 1234 5678 9123 0000" classnum="1" />
        </div>
        <div className="input-container-2">
          <div className="input-container-date">
            <p>exp. date</p>
            <div className="input-date">
              <Input />
              <Input />
            </div>
          </div>
          <div className="input-container-cvc">
            <p>cvc</p>
            <div className="input-cvc">
              <Input />
            </div>
          </div>
        </div>
      </section>

      <Link to='/agradecimentos'>
        <Button />
      </Link>
    </main>
  )
}

export default Home