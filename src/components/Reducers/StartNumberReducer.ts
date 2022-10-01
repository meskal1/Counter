import React from 'react'

const initialState = 0

type ActionType = OnChangeInputACType
export const startNumberReducer = (state: number = initialState, action: ActionType): number => {
  switch (action.type) {
    case 'ON_CHANGE_INPUT_START_NUMBER':
      return action.payload.inputValue
    default:
      return state
  }
}
type OnChangeInputACType = ReturnType<typeof onChangeInputStartNumAC>
export const onChangeInputStartNumAC = (inputValue: number) => {
  return {
    type: 'ON_CHANGE_INPUT_START_NUMBER',
    payload: { inputValue },
  } as const
}
