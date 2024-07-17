import style from "./Button.module.scss"


type Props ={
    title: string;
    className?: string;
    disabled?: boolean;
    mode?: 'fill' | 'outline'

}


export default function Button(props: Props){
  

    const classes = [style.container, props.className]

    if(props.mode=='outline') classes.push(style.outline)
        else{classes.push(style.fill)}

    return(
        <div className={style.divContainer}>
        <button  className={classes.join(' ').trim()}>{props.title}</button>
        </div>
    )
}