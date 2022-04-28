import { startNumberReducer, startNumberAC } from "./StartNumberReducer";

test('case should change state on change input', () => {

	const startState: number = 10;

	const endState = startNumberReducer(startState, startNumberAC(5))

	expect(endState).toBe(5);
});
