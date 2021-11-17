//SASS
import styles from './Header.module.scss';
import { useSpring, animated } from 'react-spring';

export function Header() {

    const style = useSpring({
        loop: { reverse: true },
        from: { x: -30 },
        to: { x: 10 },
    })

    return (

        <div className={styles.headerContainer}>
            <animated.div
                style={{
                    ...style,
                }}
            >
                <div className={styles.headerLogo}>
                    <img src="logo.png" alt="" />
                </div>
            </animated.div>
        </div>

    )


}
