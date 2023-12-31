function Button({ text, primary, secondary, email, onClick, ...rest }) {
  const btnPrimary =
    "bg-red-700 border border-red-700 text-white hover:bg-red-800 hover:border-red-800"
  const btnSecondary =
    "text-white border border-gray-300 hover:bg-gray-400 hover:border-gray-400 hover:text-black"

  return (
    <button
      {...rest}
      className={`${primary ? btnPrimary : ""} ${
        secondary ? btnSecondary : ""
      } border rounded-md text-md font-semibold py-2 px-5`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
