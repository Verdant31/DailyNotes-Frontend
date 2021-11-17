//SASS
import styles from "./Home.module.scss";

//Components
import { MainText } from '../components/Home/Trail';
import { Student } from '../components/Home/Student';
import { NoteExample } from '../components/Home/NoteExample';
import { SubscribeText } from '../components/Home/Subscribe';
import { Header } from '../components/Home/Logo';
import { LogInButton } from '../components/Home/LogInButton';
import { Footer } from '../components/Home/Footer';

export function Home() {
    return (
        <div >
            <Header />
            <div className={styles.firstHomeContent} >
                <Student />
                <MainText />
            </div>
            <LogInButton />

            <div className={styles.secondHomeContent}>
                <SubscribeText />
                <NoteExample />
            </div>
            <Footer />
        </div>
    )
}
