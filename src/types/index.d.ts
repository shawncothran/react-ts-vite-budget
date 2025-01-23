import type { IconType } from "react-icons/lib"

export type Card = {
  type: "credit" | "debit"
  number: string
  cvc: string
  expiration: string
}

export type Category = {
  icon: IconType
  amount: number
  name: string
}

export type Transaction = {
  id: number
  description: string
  category: string
  amount: number
  date: string
  isRecurring: boolean
}
