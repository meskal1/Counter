import { maxNumberReducer, onChangeInputMaxNumAC } from "./MaxNumberReducer";

test('case should change state on change input', () => {

	const startState: number = 10;

	const endState = maxNumberReducer(startState, onChangeInputMaxNumAC(5))

	expect(endState).toBe(5);
});
