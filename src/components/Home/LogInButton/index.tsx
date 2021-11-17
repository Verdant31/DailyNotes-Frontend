//SASS
import { useAuth } from '../../../hooks/useAuth';
import styles from './LogIn.module.scss';

export function LogInButton() {
    const { signInWithGoogle } = useAuth();

    return (
        <div className={styles.logInButtonContainer}>
            <div className={styles.buttonContainer}>
                <img src="google.png" alt="Google logo" />
                <button className={styles.button} onClick={() => signInWithGoogle()}>
                    <span>SIGN IN WITH GOOGLE</span>
                </button>
            </div>
        </div>
    )
}
