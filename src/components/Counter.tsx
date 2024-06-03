import { useState } from 'react'
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count - 1)
    }

    const decrement = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1 className={styles.text}>{count}</h1>
            <button className={styles.button} onClick={increment}>Убавить</button>
            <button className={styles.button} onClick={decrement}>Прибавить</button>
        </div>
    );
};

export default Counter;