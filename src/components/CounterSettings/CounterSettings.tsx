import React from 'react';
import { Button } from '../Button/Button';
import { InputBlock } from '../InputBlock/InputBlock';
import s from './CounterSettings.module.scss'

export type CounterSettingsType = {
	maxNumber: number
	startNumber: number
	isDisabled: boolean
	onChangeInput: (inputID: string, inputValue: number) => void
	onClickSetButton: () => void
	onFocusInput: () => void
	onBlurInput: () => void
	onKeyPressInput: () => void
	isDisabledSettingsButton: boolean
}

export const CounterSettings: React.FC<CounterSettingsType> = ({
	maxNumber, startNumber, isDisabled, onChangeInput, onClickSetButton, onFocusInput, onBlurInput, onKeyPressInput, isDisabledSettingsButton }) => {

	const onChangeInputHandler = (inputID: string, inputValue: number) => {
		onChangeInput(inputID, inputValue)
	};
	const onClickButtonSet = () => {
		onClickSetButton()
	};
	const onFocusInputHandler = () => {
		onFocusInput()
	};
	const onBlurInputHendler = () => {
		onBlurInput();
	};
	const onKeyPressInputHandler = () => {
		onKeyPressInput()
	};
	return (
		<>
			<div className={s.container}>
				<div className={s.blocks_set_input_values}>
					<InputBlock
						type={"number"}
						inputID={"maxNumber"}
						maxNumber={maxNumber}
						startNumber={startNumber}
						inputValue={maxNumber}
						labelValue={"Max value:"}
						onChangeInputHandler={onChangeInputHandler}
						onFocusInputHandler={onFocusInputHandler}
						onBlurInputHandler={onBlurInputHendler}
						onKeyPressInputHandler={onKeyPressInputHandler}
						isDisabledSettingsButton={isDisabledSettingsButton} />
					<InputBlock
						type={"number"}
						inputID={"startNumber"}
						maxNumber={maxNumber}
						startNumber={startNumber}
						inputValue={startNumber}
						labelValue={"Start value:"}
						onChangeInputHandler={onChangeInputHandler}
						onFocusInputHandler={onFocusInputHandler}
						onBlurInputHandler={onBlurInputHendler}
						onKeyPressInputHandler={onKeyPressInputHandler}
						isDisabledSettingsButton={isDisabledSettingsButton} />
				</div>
				<Button
					nameButton={'set'}
					callBack={onClickButtonSet}
					isDisabled={isDisabled}
				/>
			</div>
		</>
	);
};
