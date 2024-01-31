import styles from './Header.module.css'

console.log(styles);

export function Header(){
    return(
        <strong className={styles.Header}>Ignite feed</strong>
    )
}