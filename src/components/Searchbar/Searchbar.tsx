import styles from './Searchbar.module.scss'

import React, { useState } from 'react'
import classNames from 'classnames'

import { BiSearch } from 'react-icons/bi'

interface SearchbarProps {
    setQuery: (query: string) => void
    isDarkMode: boolean
}

export default function Searchbar ({ setQuery, isDarkMode }: SearchbarProps) {

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
        <form onSubmit={handleSubmit} className={styles.form}>
            <input onChange={handleInput} value={input} className={classNames(styles.form__searchbar, {[styles.form__searchbar__dark]: isDarkMode})} type={'text'} placeholder='Search words...' />
            <BiSearch className={styles.form__searchIcon} />
        </form>
    )
}