import styles from './Searchbar.module.scss'

import React, { useState } from 'react'
import classNames from 'classnames'

import { BiSearch } from 'react-icons/bi'
import { ApiError } from '../../App'

interface SearchbarProps {
    setQuery: (query: string) => void
    isDarkMode: boolean
    error: ApiError | null
}

export default function Searchbar ({ setQuery, isDarkMode, error }: SearchbarProps) {

    const [ input, setInput ] = useState('')

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        const {target} = e
        setInput((target as HTMLInputElement).value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (input.length < 1) return

        setQuery(input)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input onChange={handleInput} value={input} className={classNames(styles.form__searchbar, {[styles.form__searchbar__dark]: isDarkMode})} type={'text'} placeholder='Search words...' />
                <button type='submit' className={styles.form__searchIcon}>
                    <BiSearch  />
                </button>
            </form>
            {error && <p className={styles.error}>{error.title}</p>}
        </>
        
    )
}