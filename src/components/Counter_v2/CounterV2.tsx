import React, { useEffect, useState } from 'react';
import { CounterTablo } from './CounterV2Tablo';
import { CounterSettings } from '../CounterSettings/CounterSettings';
import s from './CounterV2.module.scss';
import { onChangeInputMaxNumAC } from '../Reducers/MaxNumberReducer';
import { onChangeInputStartNumAC } from '../Reducers/StartNumberReducer';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounterAC, onClickResetButtonCounterAC, onClickSetButtonAC } from '../Reducers/CounterReducer';
import { AppRootStateType } from '../redux/Store';

export const CounterV2 = () => {
	const tabloMessage = '';
	const [isDisabledSettingsButton, setIsDisabledSettingsButton] = useState<boolean>(false);
	const [isDisabledCounterButton, setIsDisabledCounterButton] = useState<boolean>(false);
	const [changeDisplayStatus, setChangeDisplayStatus] = useState<boolean>(false);

	const dispatch = useDispatch(); // Отправляет action в рутовый редьюсер, который в свою очередь раскидывает по всем редьюсерам action. Хук импортируется из библиотеки react-redux которая связывает React и Redux.
	// С помощью useSelector() мы можем доставать из state глобальные данные
	const maxNumber = useSelector<AppRootStateType, number>(state => state.maxNumber)
	const startNumber = useSelector<AppRootStateType, number>(state => state.startNumber)
	const counter = useSelector<AppRootStateType, number>(state => state.counter)

	useEffect(() => {
		if (maxNumber <= startNumber || maxNumber < 0 || startNumber < 0) {
			setIsDisabledSettingsButton(true);
		} else setIsDisabledSettingsButton(false);
	}, [maxNumber, startNumber]);

	const increaseCounter = () => {
		const action = increaseCounterAC();
		if (counter < maxNumber) dispatch(action);
	};

	const onChangeInput = (inputID: string, inputValue: number) => {
		inputID === 'maxNumber' ?
			dispatch(onChangeInputMaxNumAC(inputValue)) :
			dispatch(onChangeInputStartNumAC(inputValue));
		setIsDisabledCounterButton(true);
	};

	const setToLocalStorageSettings = () => {
		localStorage.setItem('maxNumber2', JSON.stringify(maxNumber));
		localStorage.setItem('startNumber2', JSON.stringify(startNumber));
	};

	const onClickSetButton = () => {
		const action = onClickSetButtonAC(startNumber);
		dispatch(action);
		setToLocalStorageSettings();
		setIsDisabledCounterButton(false);
		setIsDisabledSettingsButton(true);
		setChangeDisplayStatus(false)
	};

	const onFocusInput = () => {
		setIsDisabledCounterButton(true);
	};

	const onBlurInput = () => {
		if (maxNumber === Number(localStorage.getItem('maxNumber2')) && startNumber === Number(localStorage.getItem('startNumber2'))) setIsDisabledCounterButton(false);
	};

	const onKeyPressInput = () => {
		if (isDisabledSettingsButton === false) onClickSetButton();
	};

	const onClickResetButtonCounter = () => {
		const action = onClickResetButtonCounterAC(startNumber);
		dispatch(action)
	};

	return (
		<>
			<div className={s.counterV2}>
				Counter V2 with Redux, localStorage and some tests
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
						setCounter={onClickResetButtonCounter}
						increaseCounter={increaseCounter}
						tabloMessage={tabloMessage}
						setChangeDisplayStatus={setChangeDisplayStatus} />}
			</div>
		</>
	);
};