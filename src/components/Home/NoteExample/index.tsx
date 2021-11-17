//SASS
import styles from './NoteExample.module.scss';

//React Icons
import { MdStickyNote2 } from 'react-icons/md';

export function NoteExample() {
    return (
        <div className={styles.noteContainer}>

            <div className={styles.note}>
                <h2>NUNCA FOI TÃO FÁCIL ORGANIZAR SEU DIA</h2>

                <div className={styles.notebookIcon}>
                    <span>NOVO LEMBRETE</span>
                    <MdStickyNote2 size={60} color="#EDF5E1" />

                </div>
            </div>

            <div className={styles.form}>
                <div className={styles.titleContainer}>
                    <h1>TÍTULO</h1>
                    <input />
                </div>
                <div className={styles.dateContainer}>
                    <h1>DATA DE EXPIRAÇÃO</h1>
                    <input />
                </div>
                <div className={styles.obsContainer}>
                    <h1>OBSERVAÇÕES</h1>
                    <input />
                </div>
            </div>

        </div>
    )
}
