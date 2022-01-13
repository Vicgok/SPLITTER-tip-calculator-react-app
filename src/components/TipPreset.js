import '../styles/tipPreset.scss'
import Button from './Button'
import CalculatorInput from './CalculatorInput'

const TipPreset = props => {
  const userInputHandler = inputValue => {
    props.onUserInput(inputValue)
  }
  return (
    <div className="card__tip-values-wrap">
      <label className="card__input-label">Select Tip %</label>
      <div className="card__input-tip-wrap">
        {props.tipPercent.map((tip, index) => (
          <Button
            key={index}
            value={tip}
            onUserInput={userInputHandler}
          >{`${tip}%`}</Button>
        ))}
        <CalculatorInput
          iconName=""
          label=""
          error={''}
          onUserInput={userInputHandler}
          placeholder="Custom"
          fieldValue={props.fieldValue}
        />
      </div>
    </div>
  )
}

export default TipPreset
