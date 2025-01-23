import {
  DiningOut,
  Food,
  HealthFitness,
  Housing,
  Transportation,
} from "../icons"
import type { Category } from "../types"

export const categories: Category[] = [
  {
    icon: Transportation,
    name: "Transportation",
    amount: 400,
  },
  {
    icon: Housing,
    name: "Housing",
    amount: 1500,
  },
  {
    icon: Food,
    name: "Food",
    amount: 500,
  },
  {
    icon: DiningOut,
    name: "Dining Out",
    amount: 500,
  },
  {
    icon: HealthFitness,
    name: "Health & Fitness",
    amount: 200,
  },
]
