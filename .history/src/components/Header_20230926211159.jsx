import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg';
console.log(igniteLogo);
console.log(styles);

export function Header(){
    return(
        <img src= {igniteLogo} />
        <strong className={styles.header}>Ignite feed</strong>
    )
}