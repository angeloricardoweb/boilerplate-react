import { ButtonPrimaryProps } from './type'

export default function ButtonOutiline({ children, onClick, type = 'button' }: ButtonPrimaryProps) {
  return (
    <button className="btn btn-outline" onClick={onClick} type={type}>{children}</button>
  )
}
