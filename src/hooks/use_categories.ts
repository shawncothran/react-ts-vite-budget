import { useEffect } from "react"
import { useDataContext } from "./use_data_context"
import { categories as initialCategories } from "../data/categories"
import type { Category } from "../types"

type CategoriesState = { categories: Category[] }

export const useCategories = () => {
  const { data, setData } = useDataContext<CategoriesState>()

  useEffect(() => {
    if (!data.categories || data.categories.length === 0) {
      setData((prevData) => ({
        ...prevData,
        categories: initialCategories,
      }))
    }
  }, [data.categories, setData])

  const addCategory = (category: Category) => {
    setData((prevData) => ({
      ...prevData,
      categories: [...prevData.categories, category],
    }))
  }

  const removeCategory = (categoryName: string) => {
    setData((prevData) => ({
      ...prevData,
      categories: prevData.categories.filter(
        (category) => category.name !== categoryName
      ),
    }))
  }

  return {
    categories: data.categories || [],
    addCategory,
    removeCategory,
  }
}
