import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import s from './Input.module.scss'

type InputType = {
	type: string
	inputID: string
	maxNumber: number
	startNumber: number
	inputValue: number
	onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
	onFocusInput: () => void
	onBlurInput: () => void
	onKeyPressInput: (e: KeyboardEvent<HTMLInputElement>) => void
	isDisabledSettingsButton: boolean
}

export const Input: React.FC<InputType> = ({ type, inputID, maxNumber, startNumber, inputValue, onChangeInput, onFocusInput, onBlurInput, onKeyPressInput, isDisabledSettingsButton }) => {
	const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>
	const onKeyPressInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		onKeyPressInput(e);
		if (isDisabledSettingsButton === false) inputRef.current.blur();
		// Не могу вытащить на верх "inputRef.current.blur()"
		// console.log(typeof inputRef.current.blur()) пишет undefined
		// Пришлось спустить условие вниз, что бы при "isDisabledSettingsButton === false" не срабатывала кнопка "Enter"
		// Если переиспользовать инпут где то еще, получается теряется его универсальность
	};
	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChangeInput(e)
	};
	const onFocusInputHandler = () => {
		onFocusInput()
	};
	const onBlurInputHandler = () => {
		onBlurInput()
	};
	return (
		<>
			<input
				ref={inputRef}
				className={(maxNumber <= startNumber || maxNumber < 0 || startNumber < 0) ? s.inputRed : s.input}
				id={inputID}
				type={type}
				value={inputValue + ''}
				onBlur={onBlurInputHandler}
				onFocus={onFocusInputHandler}
				onChange={onChangeInputHandler}
				onKeyPress={onKeyPressInputHandler} />
		</>
	);
};