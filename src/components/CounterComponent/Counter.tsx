import React from "react";
import { Button } from "../Button/Button";
import s from './Counter.module.scss'
import { Tablo } from "../Tablo/Tablo";

type CounterType = {
	counter: number
	maxNumber: number
	startNumber: number
	isDisabled: boolean
	setCounter: (counter: number) => void
	increaseCounter: () => void
	tabloMessage: string
};

export const Counter: React.FC<CounterType> = ({
	counter, maxNumber, startNumber, isDisabled, setCounter, increaseCounter, tabloMessage
}) => {
	const onClickIncButton = () => {
		increaseCounter()
	};
	const onClickResetButton = () => {
		setCounter(startNumber)
	}
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
						nameButton={'reset'}
						callBack={onClickResetButton}
						isDisabled={isDisabled || (counter === startNumber)} />
				</div>
			</div>
		</>
	);
};
