import { ChangeEvent, useState } from "react"
import { IconType } from "react-icons"

import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"
import { Pane } from "../../elements/Pane"
import { useCategories } from "../../hooks/use_categories"
import * as icons from "../../icons"

import "./Budget.scss"

export const Budget = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [name, setName] = useState("")
  const [limit, setLimit] = useState<number | "">("")
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof icons | null>(
    null
  )
  const { categories, addCategory } = useCategories()

  const monthlyIncome = 4000
  const allocated = categories.reduce(
    (acc, category) => acc + category.amount,
    0
  )
  const remaining = monthlyIncome - allocated

  const handleAddCategory = () => {
    if (!name || !limit || !selectedIcon) return
    addCategory({
      name,
      amount: Number(limit),
      icon: icons[selectedIcon as keyof typeof icons],
    })
    setName("")
    setLimit("")
    setSelectedIcon(null)
    setIsFormVisible(false)
  }

  return (
    <Pane size="md" title="Budget">
      {isFormVisible ? (
        <form
          className="category-form"
          onSubmit={(e) => {
            e.preventDefault()
            handleAddCategory()
          }}
        >
          <h2 className="category-form__title">New category</h2>
          <div className="category-form__group">
            <label htmlFor="category-name">Category Name</label>
            <Input
              id="category-name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              placeholder="Enter category name"
              type="text"
            />
          </div>
          <div className="category-form__group">
            <label>Icon</label>
            <div className="category-form__icons">
              {Object.entries(icons).map(([iconName, IconComponent]) => (
                <Button
                  type="button"
                  key={iconName}
                  onClick={() => setSelectedIcon(iconName)}
                  className={`category-form__icon ${
                    selectedIcon === iconName ? "selected" : ""
                  }`}
                  aria-label={`Select ${iconName}`}
                >
                  <IconComponent />
                </Button>
              ))}
            </div>
          </div>
          <div className="category-form__group">
            <label htmlFor="category-limit">Limit</label>
            <Input
              id="category-limit"
              value={limit.toString()}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLimit(e.target.value === "" ? "" : Number(e.target.value))
              }
              placeholder="Enter limit"
              type="number"
            />
          </div>
          <div className="category-form__actions">
            <Button
              className="category-form__cancel-button"
              onClick={() => setIsFormVisible(false)}
              text="Cancel"
              variant="outline"
            />
            <Button
              className="category-form__submit-button"
              type="submit"
              text="Add Category"
            />
          </div>
        </form>
      ) : (
        <main className="budget">
          <section className="budget__summary">
            <div className="budget__summary-item">
              <h2 className="budget__label">Monthly Income</h2>
              <span className="budget__amount">
                ${monthlyIncome.toLocaleString()}
              </span>
            </div>
            <div className="budget__summary-item">
              <h2 className="budget__label">Allocated</h2>
              <span className="budget__amount">
                ${allocated.toLocaleString()}
              </span>
            </div>
            <div className="budget__summary-item">
              <h2 className="budget__label">Remaining</h2>
              <span className="budget__amount">
                ${remaining.toLocaleString()}
              </span>
            </div>
          </section>
          <section className="budget__categories">
            <h2 className="budget__categories-title">Categories</h2>
            <ul className="budget__categories-list">
              {categories.map((category, index) => (
                <li key={index} className="budget__category-row">
                  {category.icon && (
                    <category.icon className="budget__category-icon" />
                  )}
                  <span className="budget__category-name">{category.name}</span>
                  <span className="budget__category-amount">
                    ${category.amount.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => setIsFormVisible(true)}
              className="budget__new-category"
              aria-label="Add a new budget category"
            >
              <span className="budget__new-category-icon">+</span>
              <span className="budget__new-category-text">New category</span>
            </Button>
          </section>
        </main>
      )}
    </Pane>
  )
}
