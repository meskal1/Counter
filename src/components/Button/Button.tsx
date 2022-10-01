import React from 'react'
import s from './Button.module.scss'

type ButtonType = {
  nameButton: string
  callBack: () => void
  isDisabled: boolean
}

export const Button: React.FC<ButtonType> = ({ nameButton, callBack, isDisabled }) => {
  const onClickButtonHandler = () => callBack()

  return (
    <>
      <button className={isDisabled ? s.button_disbled : s.button} disabled={isDisabled} onClick={onClickButtonHandler}>
        {nameButton}
      </button>
    </>
  )
}
