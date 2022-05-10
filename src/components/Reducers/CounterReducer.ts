import React from 'react';

// При создании stora в Redux вызывается рутовый редьюсер и в качестве значения стейта передается undefined и чтобы этого избежать нужно задать инициализационный стейт
const initialState = 0;
// Типизируем инициализационные данные 
// type InitialStateType = typeof initialState;

type ActionType = IncreaseCounterACType | OnClickSetButtonACType | OnClickResetButtonCounterACType
export const counterReducer = (state: number = initialState, action: ActionType): number => {
	switch (action.type) {
		case 'INCREASE_COUNTER': return state + 1;
		case 'ON_CLICK_SET_BUTTON': return action.payload.startNumber;
		case 'ON_CLICK_RESET_BUTTON': return action.payload.startNumber;
		default: return state;
	}
}

// Типизация возвращаемого обьекта созданного этой функцией
type IncreaseCounterACType = ReturnType<typeof increaseCounterAC>
export const increaseCounterAC = () => {
	return {
		type: 'INCREASE_COUNTER',
	} as const
};

type OnClickSetButtonACType = ReturnType<typeof onClickSetButtonAC>
export const onClickSetButtonAC = (startNumber: number) => {
	return {
		type: 'ON_CLICK_SET_BUTTON',
		payload: { startNumber },
	} as const
};

type OnClickResetButtonCounterACType = ReturnType<typeof onClickResetButtonCounterAC>
export const onClickResetButtonCounterAC = (startNumber: number) => {
	return {
		type: 'ON_CLICK_RESET_BUTTON',
		payload: { startNumber },
	} as const
};
