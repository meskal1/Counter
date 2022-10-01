import React from 'react'
import s from './App.module.scss'
import { CounterV1 } from './components/Counter_v1/CounterV1'
import { CounterV2 } from './components/Counter_v2/CounterV2'

const App = () => {
  return (
    <>
      <div className={s.app}>
        <CounterV1 />
        <CounterV2 />
      </div>
    </>
  )
}
export default App
