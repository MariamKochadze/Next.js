import { use, useState } from "react"
import styles from "./MainButton.module.scss"
import Checkbox from "../checkbox/Checkbox";

export default function MainButton(){
  const [num,setNum]= useState(0);
  const [text,setText]=useState('')

  function hanlderClick(){
        setNum(num+1)
  }
  const onChange = (e) => {
        setText(e.target.value)
     
  }

    return(
        <div className={styles.container}>
        <h1>If you click button, you can to cout numbers.</h1>
        <button onClick={hanlderClick}>{num}</button>
        <h1>Hello  {text} !</h1>
        <input className={styles.inputContainer} 
        type="text"
        value={text}
        placeholder="type your name"
        onChange={onChange}
        >
        </input>
        <Checkbox/>
        </div>
    )
}