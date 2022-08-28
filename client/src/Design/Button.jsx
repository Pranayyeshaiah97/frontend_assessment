
const Button = ({title, type, onClick}) => {
  return (
    <div className="flex justify-end">
    <button  type={type}  onClick={() => onClick(true)} className="px-4 py-2 m-10 font-semibold tracking-wide text-white rounded-lg shadow-lg bg-lightBlue-600 font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600">
        {title}
    </button>
    </div>
  )
}

export default Button