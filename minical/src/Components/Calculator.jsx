import React, { useState } from 'react'
import "../App.css"
export const Calculator = () => {
    // const [display,setDisplay]=useState("")

    const [result, setResult] = useState(0)
    const [status, setStatus] = useState(true)
    const [his, setHistory] = useState("")

    // let [dis, setDis] = useState([])
    var bag = ""
    let history = []
    // let resq = ""
    const handleClick = (text) => {
        bag += text
        // resq += text
        history.push(bag)
        console.log(history)
        // setDis([...dis, bag])
    }

    const handleEval = () => {
        setStatus(true)
        console.log(eval(bag))
        setResult(eval(bag))
        // console.log(history)
        localStorage.setItem("history", JSON.stringify(history))
    }

    const handleHistory = () => {
        let hist = JSON.parse(localStorage.getItem("history"))
        console.log(hist)
        setHistory(hist)
    }

    const handleClear = () => {
        setStatus(false)
        setResult(0)
    }

    return (
        <div>
            <div id="container">
                <button id="history" onClick={() => { handleHistory() }}>
                    History
                </button>
                <div id="display">
                    {his}

                </div>
                <div id="dis">
                    {status ? result : his}
                </div>
                <div id="btn_container">
                    <div className='sym' onClick={() => handleClear()}>C</div>
                    <div className='sym' onClick={(e) => handleClick(e.currentTarget.textContent)}>+/-</div>
                    <div className='sym' onClick={(e) => handleClick(e.currentTarget.textContent)}>%</div>
                    <div className='yellow' onClick={(e) => handleClick(e.currentTarget.textContent)}>÷</div>
                    <div className="shade" onClick={(e) => handleClick(e.currentTarget.textContent)}>7</div>
                    <div className="shade" onClick={(e) => handleClick(e.currentTarget.textContent)}>8</div>
                    <div className="shade" onClick={(e) => handleClick(e.currentTarget.textContent)}>9</div>
                    <div className="yellow" onClick={(e) => handleClick(e.currentTarget.textContent)}>x</div>
                    <div className="shade" onClick={(e) => handleClick(e.currentTarget.textContent)}>4</div>
                    <div className="shade" onClick={(e) => handleClick(e.currentTarget.textContent)}>5</div>
                    <div className="shade" onClick={(e) => handleClick(e.currentTarget.textContent)}>6</div>
                    <div className='yellow' onClick={(e) => handleClick(e.currentTarget.textContent)}>-</div>
                    <div className="shade" onClick={(e) => handleClick(e.currentTarget.textContent)}>1</div>
                    <div className="shade" onClick={(e) => handleClick(e.currentTarget.textContent)}>2</div>
                    <div className="shade" onClick={(e) => handleClick(e.currentTarget.textContent)}>3</div>
                    <div className='yellow' onClick={(e) => handleClick(e.currentTarget.textContent)}>+</div>
                    <div className="shade" id="spl" onClick={(e) => handleClick(e.currentTarget.textContent)}>0</div>
                    <div className="shade" id='right' onClick={(e) => handleClick(e.currentTarget.textContent)}>.</div>
                    <div className='yellow' id='right' onClick={() => handleEval()} >=</div>
                </div>
            </div>
        </div>
    )
}
