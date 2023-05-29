import React, { useState } from 'react'
import "../App.css"
export const Calculator = () => {
    // const [display,setDisplay]=useState("")

    const [result, setResult] = useState(0)
    const [status, setStatus] = useState(false)
    // let [str, setStr] = useState("")
    const [his,setHistory]=useState("")
    let bag = ""
    let history=  []

    const handleClick = (text) => {
        let local=[]
        bag += text
        // setStr(bag)
        history.push(local[local.length-1])
        console.log(bag)
        setStatus(false)
    }

    const handleEval = () => {

        // setStr(bag)
        setStatus(true)
        console.log(eval(bag))
        setResult(eval(bag))
        console.log(history)
        // localStorage.setItem("history",json.strignify(history))
        // localStorage.setItem('history', JSON.stringify(history[history.length-1]));
    }

    const handleHistory=()=>{
        setHistory(history[history.length-1])
        console.log(his)
    }

    return (
        <div>
            <div id="container">
                <button id="history" onClick={()=>{handleHistory()}}>
                    History
                </button>
                <div id="display">
                    {status ? result : bag}
                    {/* {bag ? bag: result} */}
                    {/* {result} */}
                </div>
                <div id="btn_container">
                    <div className='sym' onClick={(e) => handleClick(e.currentTarget.textContent)}>C</div>
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
