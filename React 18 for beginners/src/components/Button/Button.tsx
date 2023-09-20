import { ReactNode } from "react"

import styles from "./Button.module.css"

interface Props {
    color: 'primary' | 'secondary' | 'success' | 'danger'
    onClick: ()=> void
    childern: ReactNode
}

const Button = ({color, onClick, childern }: Props) => {
  return (
    <button type="button" onClick={onClick} className={[styles.btn, styles['btn-'+ color]].join(' ')}>{childern}</button>
  )
}

export default Button