import React from 'react'

const initialState = 0

type ActionType = IncreaseCounterACType | OnClickSetButtonACType | OnClickResetButtonCounterACType
export const counterReducer = (state: number = initialState, action: ActionType): number => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + 1
    case 'ON_CLICK_SET_BUTTON':
      return action.payload.startNumber
    case 'ON_CLICK_RESET_BUTTON':
      return action.payload.startNumber
    default:
      return state
  }
}

type IncreaseCounterACType = ReturnType<typeof increaseCounterAC>
export const increaseCounterAC = () => {
  return {
    type: 'INCREASE_COUNTER',
  } as const
}

type OnClickSetButtonACType = ReturnType<typeof onClickSetButtonAC>
export const onClickSetButtonAC = (startNumber: number) => {
  return {
    type: 'ON_CLICK_SET_BUTTON',
    payload: { startNumber },
  } as const
}

type OnClickResetButtonCounterACType = ReturnType<typeof onClickResetButtonCounterAC>
export const onClickResetButtonCounterAC = (startNumber: number) => {
  return {
    type: 'ON_CLICK_RESET_BUTTON',
    payload: { startNumber },
  } as const
}
