import React from 'react';

type MaxNumberReducerType = MaxNumberACType
export const MaxNumberReducer = (state: number, action: MaxNumberReducerType): number => {
	switch (action.type) {
		case 'ON-CHANGE-INPUT': {
			return action.payload.inputValue;
		}
		default: return state;
	}
};

type MaxNumberACType = ReturnType<typeof MaxNumberAC>
export const MaxNumberAC = (inputValue: number) => {
	return {
		type: 'ON-CHANGE-INPUT',
		payload: {
			inputValue: inputValue
		}
	} as const
};