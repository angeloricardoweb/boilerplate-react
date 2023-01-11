import { ButtonPrimaryProps } from './type'

export default function ButtonPrimary({ children, onClick, type = 'button', disabled = false }: ButtonPrimaryProps) {
  return (
    <button className="btn btn-primary" onClick={onClick} type={type} disabled={disabled}>{children}</button>
  )
}
