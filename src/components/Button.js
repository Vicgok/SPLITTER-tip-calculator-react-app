import '../styles/button.scss'

const Button = props => {
  const buttonClickHandler = event => {
    const value = event.target.value
    props.onUserInput(value)
  }
  return (
    <button onClick={buttonClickHandler} value={props.value}>
      {props.children}
    </button>
  )
}
export default Button
