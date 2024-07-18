import { useState } from "react"
import styles from "./Checkbox.module.scss"

export default function Checkbox(){
 const [check, setCheck]= useState(false)

 const onChange = () => {
  setCheck(!check)
 }

    return(
        <> 
        <div  className={styles.container} onClick={onChange}> {check? "Hide Info" : "Show Info"} </div>
            {check
              &&
              <ul>
              <li>you are smart !</li>
              <li>you are beautiful !</li>
              <li>you can to do anything !</li>
          </ul>
            }
            
        </>
    )
}