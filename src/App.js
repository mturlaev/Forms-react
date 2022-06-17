import { useState } from "react";
import css from "./App.module.css"

function App() {
  
  const[text, setText] = useState("")
  const [isEmpty, setIsEmpty] = useState(true)
  const [inputText, setInputText] = useState(false)
  const [message, setMessage] = useState('')
  const [inputTouch, setInputTouch] = useState("Поле ввода не должно быть пустым")

  
  const handleSettext = (e) => {
    setText(e.target.value)
    if(text){
      setIsEmpty(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text)
    setMessage('Сообщение: ше де мере')
    setText("")
    setIsEmpty(true)
    setInputTouch('')
    
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "input" :
        setInputText(true)
        setInputTouch('Поле ввода не должно быть пустым')
      break
    }
    setMessage("")
  }

  return (
    <>
    <form className={css.form}>
      <div className={css.Header}><h1>Tests Form</h1></div>
      <div>
      <input className={css.input} onBlur={(e) => blurHandler(e)} name="input" type="text" value={text} onChange={handleSettext} />
      <button className={css.btn} type="submit" disabled={isEmpty} onClick={handleSubmit}>Отправить</button>
      {text.length > 0 ? null : (inputTouch && inputText) && <div style={{color: 'red'}}>{inputTouch}</div>}
      {message && <div style={{color: "green"}}>{message}</div>}</div>
    </form>
    </>
  );
}

export default App;
