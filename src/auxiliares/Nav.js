import styles from '@/styles/Home.module.css'

export default function Nav(){
    return(
        

            <nav className={styles.option_menuOrder}>
                <a className={styles.bg_menuOrder1}> DESAYUNOS </a>
                <a className={styles.bg_menuOrder2}> ALMUERZOS </a>
            </nav>
        

    )
}