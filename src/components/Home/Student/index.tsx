//React Spring
import { Transition, animated } from '@react-spring/web'

//SASS
import styles from './Student.module.scss';

export function Student() {
    const showImage = true;
    return (
        <div className={styles.manWritingNotes}>
            <Transition
                items={showImage}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                reverse={showImage}
                delay={500}
            >
                {(styles, item) =>
                    item && <animated.div style={styles}>
                        <img src="manwriting.png" alt="Um homem sentado escrevendo em um livro" />
                    </animated.div>
                }
            </Transition>

        </div>
    )
}
