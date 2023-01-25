import styles from './Section.module.scss'
import { Meaning } from '../../App'
 

interface SectionProps extends Meaning {
    setQuery: (query: string) => void
}

export default function Section ({ antonyms, definitions, partOfSpeech, synonyms, setQuery }: SectionProps) {

    const handleClick = (e: React.MouseEvent) => {
        const {target} = e
        setQuery((target as HTMLElement).innerText)
    }

    return (
        <section className={styles.section}>
            <div className={styles.title}>
                <span className={styles.title__category}>{partOfSpeech}</span>
                <div className={styles.title__line}></div>
            </div>
            <div className={styles.meaning}>
                <p className={styles.meaning__title}>Meaning</p>
                <ul className={styles.meaning__list}>
                    {definitions.map((el, index) => (
                        <li key={index}>{el.definition}</li>
                    ))}
                </ul>
            </div>
            {antonyms.length > 0 &&
                <div className={styles.related}>
                    <p className={styles.related__title}>antonyms</p> 
                    <ul className={styles.related__list}>
                        {antonyms.map((el, index) => (
                            <li onClick={handleClick} key={index}>{el}</li>
                        ))}
                    </ul>
                </div>
            }

            {synonyms.length > 0 && 
                <div className={styles.related}>
                    <p className={styles.related__title}>synonyms</p> 
                    <ul className={styles.related__list}>
                        {synonyms.map((el, index) => (
                            <li onClick={handleClick} key={index}>{el}</li>
                        ))}
                    </ul>
                </div>
            }
        </section>
    )
}