//SASS
import styles from './Footer.module.scss';

//React Icons
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

export function Footer() {
    return (
        <div className={styles.footerContainer}>
            <h1>©️ Daily Notes, 2021. Todos os direitos reservados</h1>

            <div className={styles.socialMedias}>

                <div >
                    <button className={styles.instagramButton}>
                        <BsInstagram color="#05386B" />
                    </button>
                    <button className={styles.linkedinButton}>
                        <BsLinkedin color="#05386B" />
                    </button>
                    <button className={styles.githubButton}>
                        <BsGithub color="#05386B" />
                    </button>

                </div>


            </div>

        </div>
    )
}
