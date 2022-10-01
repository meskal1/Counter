import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './InputBlock.module.scss'
import { Input } from '../Input/Input'

type InputBlockType = {
  type: string
  inputID: string
  maxNumber: number
  startNumber: number
  labelValue: string
  inputValue: number
  onChangeInputHandler: (inputID: string, inputValue: number) => void
  onFocusInputHandler: () => void
  onBlurInputHandler: () => void
  onKeyPressInputHandler: () => void
  isDisabledSettingsButton: boolean
}

export const InputBlock: React.FC<InputBlockType> = ({
  type,
  inputID,
  maxNumber,
  startNumber,
  labelValue,
  inputValue,
  onChangeInputHandler,
  onFocusInputHandler,
  onBlurInputHandler,
  onKeyPressInputHandler,
  isDisabledSettingsButton,
}) => {
  const onFocusInput = () => onFocusInputHandler()
  const onBlurInput = () => onBlurInputHandler()
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => onChangeInputHandler(inputID, +e.currentTarget.value)
  const onKeyPressInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onKeyPressInputHandler()
  }

  return (
    <>
      <div className={s.block_set_input}>
        <label htmlFor={inputID}>{labelValue}</label>
        <Input
          type={type}
          inputID={inputID}
          maxNumber={maxNumber}
          startNumber={startNumber}
          inputValue={inputValue}
          onChangeInput={onChangeInput}
          onFocusInput={onFocusInput}
          onBlurInput={onBlurInput}
          onKeyPressInput={onKeyPressInput}
          isDisabledSettingsButton={isDisabledSettingsButton}
        />
      </div>
    </>
  )
}
