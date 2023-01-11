export default function LabelError({ msg, check = true }: { msg: string, check: {} }) {
  if (check) {
    return(
      <label className="label">
        <span className="label-text-alt text-red-600">{msg}</span>
      </label>
    )
  } else {
    return <></>
  }
}
