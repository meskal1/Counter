import React from "react";
import { Button } from "../Button/Button";
import s from './CounterTablo.module.scss'
import { Tablo } from "../Tablo/Tablo";

type CounterTabloType = {
	counter: number
	maxNumber: number
	startNumber: number
	isDisabled: boolean
	setCounter: (counter: number) => void
	increaseCounter: () => void
	tabloMessage: string
	setChangeDisplayStatus: (changeDisplayStatusValue: boolean) => void
};

export const CounterTablo: React.FC<CounterTabloType> = ({
	counter, maxNumber, startNumber, isDisabled, setCounter, increaseCounter, tabloMessage, setChangeDisplayStatus
}) => {
	const onClickIncButton = () => {
		increaseCounter()
	};
	const onClickResetButton = () => {
		setCounter(startNumber)
	}
	const onClickButtonSet = () => {
		setChangeDisplayStatus(true)
	};
	return (
		<>
			<div className={s.container}>
				<Tablo
					counter={counter}
					maxNumber={maxNumber}
					tabloMessage={tabloMessage} />
				<div className={s.buttons}>
					<Button
						nameButton={'inc'}
						callBack={onClickIncButton}
						isDisabled={isDisabled || (maxNumber === counter)} />
					<Button
						nameButton={'set'}
						callBack={onClickButtonSet}
						isDisabled={isDisabled} />
					<Button
						nameButton={'reset'}
						callBack={onClickResetButton}
						isDisabled={isDisabled || (counter === startNumber)} />
				</div>
			</div>
		</>
	);
};
