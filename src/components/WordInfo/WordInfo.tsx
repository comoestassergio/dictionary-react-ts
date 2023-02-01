import styles from './WordInfo.module.scss'
import { BiPlay, BiPause } from 'react-icons/bi'
import { ImSpinner8 } from 'react-icons/im'
import classNames from 'classnames'
import { PhoneticsObj } from '../../App'

import { useState, useEffect } from 'react'

interface WordInfoProps {
    word: string | undefined
    phonetic: string | undefined
    isDarkMode: boolean
    phonetics: PhoneticsObj []
}



export default function WordInfo ({ word, phonetic, isDarkMode, phonetics }: WordInfoProps) {

    const [audioUrl, setAudioUrl]= useState(phonetics.filter(el => el.audio && el.audio.length > 0)[0])

    const [audio, setAudio] = useState<HTMLAudioElement>(new Audio())
    const [ playing, setPlaying ] = useState(false)

    const togglePlay = () => {setPlaying(!playing)}

    useEffect(() => {
        setAudioUrl(phonetics.filter(el => el.audio && el.audio.length > 0)[0])

    }, [phonetics])
    
    useEffect(() => {
        audio.src = audioUrl?.audio!

    }, [audioUrl])

    useEffect(() => {
        playing ? audio.play() : audio.pause()

    }, [playing])

    useEffect(() => {
    
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
      }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wordInfo}>
                <h1 className={styles.wordInfo__word}>{word}</h1>
                <p className={styles.wordInfo__phonetic}>{phonetic}</p>
            </div>
            {audioUrl &&
                <button onClick={togglePlay} className={classNames(styles.playBtn, {[styles.playBtn__dark]: isDarkMode})} type='button'>
                    {audioUrl ?
                        <>
                            {playing ? 
                                <BiPause className={styles.playBtn__icon} />
                                :
                                <BiPlay className={styles.playBtn__icon} />
                            }
                        </>  
                        :
                        <ImSpinner8 className={styles.playBtn__loadingIcon} />
                    }
                
                </button>
            }
        </div>
    )
}