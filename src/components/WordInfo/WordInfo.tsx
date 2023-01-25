import styles from './WordInfo.module.scss'
import { BiPlay } from 'react-icons/bi'
import classNames from 'classnames'

interface WordInfoProps {
    word: string | undefined
    phonetic: string | undefined
    isDarkMode: boolean
}

export default function WordInfo ({ word, phonetic, isDarkMode }: WordInfoProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wordInfo}>
                <h1 className={styles.wordInfo__word}>{word}</h1>
                <p className={styles.wordInfo__phonetic}>{phonetic}</p>
            </div>
            <button className={classNames(styles.playBtn, {[styles.playBtn__dark]: isDarkMode})} type='button'>
                <BiPlay className={styles.playBtn__icon} />
            </button>
        </div>
    )
}