import React, { ChangeEvent, KeyboardEvent, useRef } from 'react'
import s from './Input.module.scss'

type InputType = {
  type: string
  inputID: string
  maxNumber: number
  startNumber: number
  inputValue: number
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  onFocusInput: () => void
  onBlurInput: () => void
  onKeyPressInput: (e: KeyboardEvent<HTMLInputElement>) => void
  isDisabledSettingsButton: boolean
}

export const Input: React.FC<InputType> = ({
  type,
  inputID,
  maxNumber,
  startNumber,
  inputValue,
  onChangeInput,
  onFocusInput,
  onBlurInput,
  onKeyPressInput,
  isDisabledSettingsButton,
}) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => onChangeInput(e)
  const onFocusInputHandler = () => onFocusInput()
  const onBlurInputHandler = () => onBlurInput()
  const onKeyPressInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isDisabledSettingsButton === false && e.key === 'Enter') inputRef.current.blur()
    else if (e.key === ',' || e.key === 'e') e.preventDefault()
    onKeyPressInput(e)
  }

  return (
    <>
      <input
        ref={inputRef}
        className={maxNumber <= startNumber || maxNumber < 0 || startNumber < 0 ? s.inputRed : s.input}
        id={inputID}
        type={type}
        value={inputValue + ''}
        onBlur={onBlurInputHandler}
        onFocus={onFocusInputHandler}
        onChange={onChangeInputHandler}
        onKeyPress={onKeyPressInputHandler}
      />
    </>
  )
}
