import "../../../style/Essential Component styles/AddButton.css"

export default function AddButton({buttonName}) {
  return (
    <div><button className="adding-button"> <h3>+ {buttonName}</h3> </button></div>
  )
}
