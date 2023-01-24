import styles from './Searchbar.module.scss'

import React, { useState } from 'react'

import { BiSearch } from 'react-icons/bi'

export default function Searchbar () {

    const [ input, setInput ] = useState('')

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        const {target} = e
        setInput((target as HTMLInputElement).value)
    }

    return (
        <form className={styles.form}>
            <input onChange={handleInput} value={input} className={styles.form__searchbar} type={'text'} placeholder='Search words...' />
            <BiSearch className={styles.form__searchIcon} />
        </form>
    )
}