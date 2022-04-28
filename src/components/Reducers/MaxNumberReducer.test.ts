import { MaxNumberAC, MaxNumberReducer } from "./MaxNumberReducer";

test('case should change state on change input', () => {

	const startState: number = 10;

	const endState = MaxNumberReducer(startState, MaxNumberAC(5))

	expect(endState).toBe(5);
});
