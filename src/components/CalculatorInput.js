import { useState } from 'react'
import '../styles/calculatorInput.scss'

const CalculatorInput = props => {
  const icon = props.iconName
  const placeholder = props.placeholder

  const [errorClass, setErrorClass] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const setClass = (classname, errorType) => {
    setErrorClass(classname)
    setErrorMsg(errorType)
  }

  const userInputValueHandler = event => {
    const fieldValue = event.target.value

    if (isNaN(fieldValue)) {
      setClass('error', props.error.typeError)
      props.onUserInput(fieldValue)
    } else if (+fieldValue === 0 && !!fieldValue) {
      setClass('error', props.error.valueError)
      props.onUserInput(fieldValue)
    } else {
      setClass('', '')
      props.onUserInput(fieldValue)
    }
  }

  return (
    <div className={`card__input-wrap ${errorClass}`}>
      <label className="card__input-label">{props.label}</label>
      <input
        className={`card__input-field ${icon}`}
        type="text"
        inputMode="numeric"
        onChange={userInputValueHandler}
        placeholder={placeholder}
        value={props.fieldValue}
      />
      <p className="card__input-error-message">{errorMsg}</p>
    </div>
  )
}

export default CalculatorInput
