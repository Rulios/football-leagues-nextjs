import React, {ChangeEvent, useState} from "react"

export default function Events(){

    const defaultState = "border shadow border-black"
    const hoverState = "border shadow border-black bg-red-500"

    const [text, setText] = useState("Initial value");
    const [isValid, setIsValid] = useState(false);
    const [number, setNumber] = useState('0')
    const [checkSelected, setCheckSelected] = useState(false)
    const [selectValue, setSelectValue] = useState("")
    const [buttonStyle, setButtonStyle] = useState(defaultState)

    const onClickTestButton = () => {
        setText("Changed text")
    }

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
        console.log(event.target.value)
    }

    const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);

    }

    const onCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckSelected(event.target.checked)
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event?.target.value)
    }

    const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(
            text,
            isValid,
            number, 
            checkSelected,
            selectValue
        )
    }

    return (
        <div className="bg-white text-black h-full p-8 m-8 flex flex-col gap-2">

            <h1>Events example</h1>

            <span>{text}</span>

            <input type="text" 
                onChange={onChangeInput} value={text}
                onFocus={() => {
                    console.log("User has activated the textbox")
                    setIsValid(text.length > 0)
                }}
                onBlur={() => {
                    console.log("User has leaved the textbox")
                }}
            />
            {
                !text && 
                    <span className="text-red-700">Text is required!</span>
            }

            {
                !isValid && 
                    <span className="text-red-700">Text is required! (focus)</span>
            }

            <input type="number" 
                className="bg-white text-black" name="" id="" value={number}
                onChange={onNumberChange}
            />
            
            <input type="checkbox " onChange={onCheckBoxChange} checked={checkSelected}/>

            <select name="" id="" className="bg-white" onChange={onChangeSelect} value={selectValue}>
                <option value="1">Value #1</option>
                <option value="2">Value #2</option>
                <option value="3">Value #3</option>
            </select>

            <form  onSubmit={onSubmit}>
                <button type="submit">Send</button>
            </form>

            <button className="border shadow border-black" onClick={onClickTestButton} 
                onMouseEnter={() => setButtonStyle(hoverState)} 
                onMouseLeave={() => setButtonStyle(defaultState)}>
                    Test Button
            </button>

            {
                checkSelected && 
                    <button className="border shadow border-black" onClick={onClickTestButton}>Test Button 2</button>
            }
            
        </div>
    )
}