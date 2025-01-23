import { ChangeEvent, useState } from "react"

import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"
import { Pane } from "../../elements/Pane"
import { useCards } from "../../hooks/use_cards"
import { CreditCard, DebitCard } from "../../icons"
import type { Card } from "../../types"

import "./Wallet.scss"

export const Wallet = () => {
  const { cards, addCard } = useCards()
  const [number, setNumber] = useState("")
  const [cvc, setCvc] = useState("")
  const [expiration, setExpiration] = useState("")
  const [type, setType] = useState<Card["type"]>("credit")

  const handleAddCard = () => {
    addCard({ type, number, cvc, expiration })
    setNumber("")
    setCvc("")
    setExpiration("")
    setType("credit")
  }

  return (
    <Pane size="sm" title="My Wallet">
      <form
        className="card-form"
        onSubmit={(e) => {
          e.preventDefault()
          handleAddCard()
        }}
      >
        <div className="card-form--row">
          <label htmlFor="number">Card Number:</label>
          <Input
            id="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNumber(e.target.value)
            }
            placeholder="1111 1111 1111 1111"
            type="text"
            value={number}
          />
        </div>

        <div className="card-form--row">
          <label htmlFor="cvc">CVC:</label>
          <Input
            id="cvc"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCvc(e.target.value)
            }
            placeholder="xxx"
            type="text"
            value={cvc}
          />
        </div>

        <div className="card-form--row">
          <label htmlFor="expiration">Expiration:</label>
          <Input
            id="expiration"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setExpiration(e.target.value)
            }
            placeholder="mm/yyyy"
            type="text"
            value={expiration}
          />
        </div>

        <fieldset className="card-type">
          <legend>Card Type:</legend>
          <div className="card-type--options">
            <Button
              onClick={() => setType("credit")}
              aria-pressed={type === "credit"}
              aria-label="Select Credit Card"
              size="sm"
              variant={type === "credit" ? "filled" : "outline"}
              className={`card-type-button ${
                type === "credit" ? "selected" : ""
              }`}
              text="Credit"
            />
            <Button
              onClick={() => setType("debit")}
              aria-pressed={type === "debit"}
              aria-label="Select Debit Card"
              size="sm"
              variant={type === "debit" ? "filled" : "outline"}
              className={`card-type-button ${
                type === "debit" ? "selected" : ""
              }`}
              text="Debit"
            />
          </div>
        </fieldset>
        <Button type="submit" text="Add Card" size="md" />
      </form>

      <ul className="cards-list">
        {cards.map((card, index) => (
          <li key={index} className="card">
            <div className="card--icon">
              {card.type === "credit" ? <CreditCard /> : <DebitCard />}
            </div>
            <div className="card--details">
              <h3 className="card--number">{card.number}</h3>
              <div className="flex">
                <p className="card--cvc">{card.cvc}</p>
                <p className="card--expiration">{card.expiration}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Pane>
  )
}
