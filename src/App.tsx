import React, {useState} from 'react';
import './App.css';
import {Screen} from "./components/Screen";
import {Button} from "./components/Button";

function App() {
    let [counterValue, setCounterValue] = useState<number>(0);

    function addCounterValue() {
        setCounterValue(counterValue + 1);
    }

    function resetCounterValue() {
        setCounterValue(0);
    }

    let incBtnDisabled = counterValue === 5;
    let resetBtnDisabled = counterValue === 0;

    return (
        <div className="App">
            <Screen counterValue={counterValue}/>

            <div className={'ButtonsBlock'}>
                <Button title={'inc'} disabled={incBtnDisabled} onClickHandler={addCounterValue}/>
                <Button title={'reset'} disabled={resetBtnDisabled} onClickHandler={resetCounterValue}/>
            </div>
        </div>
    );
}

export default App;
