import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg';
console.log(igniteLogo);
console.log(styles);

export function Header(){
    return(
        <header className={styles.Header}> 
            <img src= {igniteLogo} />
        </header>

    )
}