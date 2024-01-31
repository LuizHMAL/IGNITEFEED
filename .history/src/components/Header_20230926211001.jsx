import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg';
console.log(igniteLogo);
console.log(styles);

export function Header(){
    return(
        <strong className={styles.header}>Ignite feed</strong>
    )
}