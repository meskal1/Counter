import { counterReducer, increaseCounterAC, onClickResetButtonCounterAC, onClickSetButtonAC } from "./CounterReducer";

test('case should increase counter state', () => {

	const startState: number = 10;

	const endState = counterReducer(startState, increaseCounterAC())

	expect(endState).toBe(11);
});

test('case should increase counter state', () => {

	const startState: number = 10;

	const endState = counterReducer(startState, onClickSetButtonAC(10))

	expect(endState).toBe(10);
});

test('case should increase counter state', () => {

	const startState: number = 10;

	const endState = counterReducer(startState, onClickResetButtonCounterAC(10))

	expect(endState).toBe(10);
});