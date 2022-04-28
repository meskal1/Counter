import React, { useEffect, useReducer, useState } from 'react';
import { CounterTablo } from './CounterTablo';
import { CounterSettings } from '../CounterSettings/CounterSettings';
import s from './CounterV2.module.scss';
import { MaxNumberAC, MaxNumberReducer } from '../Reducers/MaxNumberReducer';
import { startNumberAC, startNumberReducer } from '../Reducers/StartNumberReducer';

export const CounterV2 = () => {
	let maxNumberStorage = Number(localStorage.getItem('maxNumber2')) || 1;
	const [maxNumber, maxNumberDispatch] = useReducer(MaxNumberReducer, maxNumberStorage);
	let startNumberStorage = Number(localStorage.getItem('startNumber2')) || 0;
	const [startNumber, startNumberDispatch] = useReducer(startNumberReducer, startNumberStorage);
	const [counter, setCounter] = useState(startNumber);
	const [tabloMessage, setTabloMessage] = useState('');
	const [isDisabledSettingsButton, setIsDisabledSettingsButton] = useState(false);
	const [isDisabledCounterButton, setIsDisabledCounterButton] = useState(false);
	const [changeDisplayStatus, setChangeDisplayStatus] = useState(false);
	useEffect(() => {
		if (maxNumber <= startNumber || maxNumber < 0 || startNumber < 0) {
			setTabloMessage('Incorrect value!');
			setIsDisabledSettingsButton(true);
		} else setIsDisabledSettingsButton(false);
	}, [maxNumber, startNumber]);

	const increaseCounter = () => {
		if (counter < maxNumber) setCounter(() => counter + 1);
	};
	const onChangeInput = (inputID: string, inputValue: number) => {
		inputID === 'maxNumber' ? maxNumberDispatch(MaxNumberAC(inputValue)) : startNumberDispatch(startNumberAC(inputValue));
		setIsDisabledCounterButton(true);
		setTabloMessage('Enter values and press "set" or push "Enter"');
	};
	const setToLocalStorageSettings = () => {
		localStorage.setItem('maxNumber2', JSON.stringify(maxNumber));
		localStorage.setItem('startNumber2', JSON.stringify(startNumber));
	};
	const onClickSetButton = () => {
		setToLocalStorageSettings();
		setCounter(startNumber);
		setTabloMessage('');
		setIsDisabledCounterButton(false);
		setIsDisabledSettingsButton(true);
		setChangeDisplayStatus(false)
	};
	const onFocusInput = () => {
		(maxNumber <= startNumber || maxNumber < 0 || startNumber < 0) ? setTabloMessage('Incorrect value!')
			: setTabloMessage('Enter values and press "set" or push "Enter"');
		setIsDisabledCounterButton(true);
	};
	const onBlurInput = () => {
		if (maxNumber === Number(localStorage.getItem('maxNumber')) && startNumber === Number(localStorage.getItem('startNumber'))) {
			setTabloMessage('');
			setIsDisabledCounterButton(false);
		}
	};
	const onKeyPressInput = () => {
		if (isDisabledSettingsButton === false) onClickSetButton();
	};
	return (
		<>
			<div className={s.counterV2}>
				{changeDisplayStatus ?
					<CounterSettings maxNumber={maxNumber}
						startNumber={startNumber}
						isDisabled={isDisabledSettingsButton}
						onChangeInput={onChangeInput}
						onClickSetButton={onClickSetButton}
						onFocusInput={onFocusInput}
						onBlurInput={onBlurInput}
						onKeyPressInput={onKeyPressInput}
						isDisabledSettingsButton={isDisabledSettingsButton} /> :
					<CounterTablo
						counter={counter}
						maxNumber={maxNumber}
						startNumber={startNumber}
						isDisabled={isDisabledCounterButton}
						setCounter={setCounter}
						increaseCounter={increaseCounter}
						tabloMessage={tabloMessage}
						setChangeDisplayStatus={setChangeDisplayStatus} />}
			</div>
		</>
	);
};