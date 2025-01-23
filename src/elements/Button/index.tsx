import { ReactNode, ButtonHTMLAttributes } from "react"

import "./Button.scss"

type BaseButtonProps = {
  onClick?: () => void
  size?: "sm" | "md" | "lg"
  variant?: "filled" | "outline"
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "onClick">

type TextButtonProps = BaseButtonProps & {
  text: string
  children?: never
}

type ChildrenButtonProps = BaseButtonProps & {
  children: ReactNode
  text?: never
}

type ButtonProps = TextButtonProps | ChildrenButtonProps

export const Button = ({
  children,
  onClick,
  size = "md",
  variant = "filled",
  text = "",
  type = "button",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button button--${size} button--${variant}`}
      type={type}
      {...restProps}
    >
      {text || children}
    </button>
  )
}
