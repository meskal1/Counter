import { onChangeInputStartNumAC, startNumberReducer } from "./StartNumberReducer";

test('case should change state on change input', () => {

	const startState: number = 10;

	const endState = startNumberReducer(startState, onChangeInputStartNumAC(5))

	expect(endState).toBe(5);
});
