import styles from './Button.module.css'
export function Button({btnClick}){
    return(<div className={styles.btnBox}><button className={styles.button} type="button" onClick={btnClick}>Завантажити більше</button></div>)
}