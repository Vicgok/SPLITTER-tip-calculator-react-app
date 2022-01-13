import './App.scss'

import logo from '../src/images/logo.svg'
import Card from './components/Card'
import CalculatorInput from './components/CalculatorInput'
import TipPreset from './components/TipPreset'
import TipDisplay from './components/TipDisplay'
import { useState } from 'react'
import Attribution from './components/Attribution'

const errorMsg = {
  typeError: 'Must be a number',
  valueError: "Can't be zero",
}
const initialState = {
  billAmount: '',
  tipPercentage: '',
  numOfPeople: '',
}
const tipPercent = [5, 10, 15, 25, 50]

const App = () => {
  const [billAmount, setBillAmount] = useState(initialState.billAmount)
  const [tipPercentage, setTipPercentage] = useState(initialState.tipPercentage)
  const [numOfPeople, setNumOfPeople] = useState(initialState.numOfPeople)

  const billInputHandler = inputValue => {
    setBillAmount(`${inputValue}`)
  }

  const tipInputHandler = inputValue => {
    setTipPercentage(inputValue)
  }

  const numPeopleInputHandler = inputValue => {
    setNumOfPeople(inputValue)
  }

  const resetState = () => {
    setBillAmount(initialState.billAmount)
    setTipPercentage(initialState.tipPercentage)
    setNumOfPeople(initialState.numOfPeople)
  }

  const tipAmountPerPerson = ((tipPercentage / 100) * billAmount) / numOfPeople
  const billAmountPerPerson = billAmount / numOfPeople + tipAmountPerPerson
  return (
    <div className="app">
      <img src={logo} alt="logo"></img>
      <main>
        <Card>
          <div className="card__user-input-wrap">
            <CalculatorInput
              iconName="icon-dollar"
              label="Bill"
              error={errorMsg}
              onUserInput={billInputHandler}
              placeholder=""
              fieldValue={`${billAmount}`}
            />
            <TipPreset
              onUserInput={tipInputHandler}
              tipPercent={tipPercent}
              fieldValue={tipPercentage}
            />
            <CalculatorInput
              iconName="icon-person"
              label="Number of People"
              error={errorMsg}
              onUserInput={numPeopleInputHandler}
              fieldValue={numOfPeople}
            />
          </div>
          <TipDisplay
            onUserInput={resetState}
            tipAmountPerPerson={
              isFinite(tipAmountPerPerson) ? tipAmountPerPerson : 0
            }
            billAmountPerPerson={
              isFinite(billAmountPerPerson) ? billAmountPerPerson : 0
            }
          />
        </Card>
      </main>
      <Attribution />
    </div>
  )
}

export default App
