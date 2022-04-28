import React from 'react';
import s from './Tablo.module.scss'
type TabloType = {
	counter: number
	maxNumber: number
	tabloMessage: string
}

export const Tablo: React.FC<TabloType> = ({ counter, maxNumber, tabloMessage }) => {

	let tabloValue = tabloMessage !== '' ? tabloMessage : counter;
	return (
		<>
			<div className={tabloValue === 'Incorrect value!' ? s.textColorRed
				: tabloValue === 'Enter values and press "set" or push "Enter"' ? s.textColor
					: counter === maxNumber ? s.textColorRed
						: s.textColor}>{tabloValue}</div>
		</>
	);
};