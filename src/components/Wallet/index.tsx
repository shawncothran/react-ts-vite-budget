import { ChangeEvent, useState } from "react"
import { useCards } from "../../hooks/use_cards"
import { Pane } from "../../elements/Pane"
import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"
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
      <div className="card-form">
        <div className="card-form--row">
          <label>Card Number:</label>
          <Input
            id="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNumber(e.target.value)
            }
            placeholder="1111 1111 1111 1111"
            type="text"
            value={number}
          />
        </div>

        <div className="card-form--row">
          <label>CVC:</label>
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
          <label>Expiration:</label>
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

        <div className="card-type">
          <p>Card Type:</p>
          <div className="card-type--options">
            <div
              onClick={() => setType("credit")}
              className={`${type === "credit" ? "selected" : ""}`}
            >
              Credit
            </div>
            <div
              onClick={() => setType("debit")}
              className={`${type === "debit" ? "selected" : ""}`}
            >
              Debit
            </div>
          </div>
        </div>
        <Button onClick={handleAddCard} text="Add Card" />
      </div>

      <div className="cards-list">
        {cards.map((card, index) => {
          return (
            <div className="card" key={index}>
              <div className="card--icon">
                {card.type === "credit" ? <CreditCard /> : <DebitCard />}
              </div>

              <div className="card--details">
                <h2 className="card--number">{card.number}</h2>
                <div className="flex">
                  <p className="card--cvc">{card.cvc}</p>
                  <p className="card--expiration">{card.expiration}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Pane>
  )
}
