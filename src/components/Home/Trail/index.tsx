//React
import React from 'react';

//SASS
import styles from './Trail.module.scss';

//React Spring
import { useTrail, a } from '@react-spring/web'

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

export function MainText() {
    return (
        <div className={styles.mainText}>
            <Trail open={true}>
                <span>Precisando de ajuda</span>
                <span>Para relembrar seus</span>
                <span>Afazeres diarios?</span>
                <span>Conte conosco!</span>
            </Trail>
        </div>
    )
}
