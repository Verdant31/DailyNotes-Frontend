import styles from "./Home.module.scss";
import { useTrail, a, Transition, animated } from '@react-spring/web'
import React from 'react';

//Animação do texto principal
const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 5000, friction: 700 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className={styles.trailsText} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}


export function Home() {
    const showImage = true;
    return (
        <div className={styles.firstHomeContent} >
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
            <div className={styles.mainText}>
                <Trail open={true}>
                    <span>Precisando de ajuda</span>
                    <span>Para relembrar seus</span>
                    <span>Afazeres diarios?</span>
                    <span>Conte conosco!</span>
                </Trail>
            </div>
        </div>
    )
}
