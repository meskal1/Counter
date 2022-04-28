import React from 'react';

type startNumberReducerType = startNumberACType
export const startNumberReducer = (state: number, action: startNumberReducerType): number => {
	switch (action.type) {
		case 'ON-CHANGE-INPUT': {
			return action.payload.inputValue;
		}
		default: return state;
	}
};

type startNumberACType = ReturnType<typeof startNumberAC>
export const startNumberAC = (inputValue: number) => {
	return {
		type: 'ON-CHANGE-INPUT',
		payload: {
			inputValue: inputValue
		}
	} as const
};  