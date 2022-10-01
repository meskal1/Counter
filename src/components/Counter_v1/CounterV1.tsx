import React, { useEffect, useState } from 'react'
import { Counter } from '../CounterComponent/Counter'
import { CounterSettings } from '../CounterSettings/CounterSettings'
import s from './CounterV1.module.scss'

export const CounterV1 = () => {
  const [maxNumber, setMaxNumber] = useState(Number(localStorage.getItem('maxNumber')) || 1)
  const [startNumber, setStartNumber] = useState(Number(localStorage.getItem('startNumber')) || 0)
  const [counter, setCounter] = useState(startNumber)
  const [tabloMessage, setTabloMessage] = useState('')
  const [isDisabledSettingsButton, setIsDisabledSettingsButton] = useState(false)
  const [isDisabledCounterButton, setIsDisabledCounterButton] = useState(false)

  const setToLocalStorageSettings = () => {
    localStorage.setItem('maxNumber', JSON.stringify(maxNumber))
    localStorage.setItem('startNumber', JSON.stringify(startNumber))
  }
  const increaseCounter = () => {
    if (counter < maxNumber) setCounter(() => counter + 1)
  }
  const onClickResetButtonCounter = () => setCounter(startNumber)

  const onChangeInput = (inputID: string, inputValue: number) => {
    inputID === 'maxNumber' ? setMaxNumber(inputValue) : setStartNumber(inputValue)
    setIsDisabledCounterButton(true)
    setTabloMessage('Enter values and press "set" or push "Enter"')
  }
  const onClickSetButton = () => {
    setToLocalStorageSettings()
    setCounter(startNumber)
    setTabloMessage('')
    setIsDisabledCounterButton(false)
    setIsDisabledSettingsButton(true)
  }
  const onFocusInput = () => {
    maxNumber <= startNumber || maxNumber < 0 || startNumber < 0
      ? setTabloMessage('Incorrect value!')
      : setTabloMessage('Enter values and press "set" or push "Enter"')
    setIsDisabledCounterButton(true)
  }
  const onBlurInput = () => {
    if (maxNumber === Number(localStorage.getItem('maxNumber')) && startNumber === Number(localStorage.getItem('startNumber'))) {
      setTabloMessage('')
      setIsDisabledCounterButton(false)
    }
  }
  const onKeyPressInput = () => {
    if (isDisabledSettingsButton === false) onClickSetButton()
  }
  useEffect(() => {
    if (maxNumber <= startNumber || maxNumber < 0 || startNumber < 0) {
      setTabloMessage('Incorrect value!')
      setIsDisabledSettingsButton(true)
    } else setIsDisabledSettingsButton(false)
  }, [maxNumber, startNumber])

  return (
    <>
      <div className={s.counterV1}>
        <span>With localStorage</span>
        <div className={s.container}>
          <CounterSettings
            maxNumber={maxNumber}
            startNumber={startNumber}
            isDisabled={isDisabledSettingsButton}
            onChangeInput={onChangeInput}
            onClickSetButton={onClickSetButton}
            onFocusInput={onFocusInput}
            onBlurInput={onBlurInput}
            onKeyPressInput={onKeyPressInput}
            isDisabledSettingsButton={isDisabledSettingsButton}
          />
          <Counter
            counter={counter}
            maxNumber={maxNumber}
            startNumber={startNumber}
            isDisabled={isDisabledCounterButton}
            setCounter={onClickResetButtonCounter}
            increaseCounter={increaseCounter}
            tabloMessage={tabloMessage}
          />
        </div>
      </div>
    </>
  )
}
