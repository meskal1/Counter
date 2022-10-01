import React from 'react'

const initialState = 1

type ActionType = OnChangeInputMaxNumACType
export const maxNumberReducer = (state: number = initialState, action: ActionType): number => {
  switch (action.type) {
    case 'ON_CHANGE_INPUT_MAX_NUMBER':
      return action.payload.inputValue
    default:
      return state
  }
}
type OnChangeInputMaxNumACType = ReturnType<typeof onChangeInputMaxNumAC>
export const onChangeInputMaxNumAC = (inputValue: number) => {
  return {
    type: 'ON_CHANGE_INPUT_MAX_NUMBER',
    payload: { inputValue },
  } as const
}
