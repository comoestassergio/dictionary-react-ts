import styles from './Header.module.scss'
import classNames from 'classnames'
import React, { useState } from 'react'

interface IconProps {
    size: string
}

export default function Header () {

    const [ isDarkMode, setIsDarkMode ] = useState(false)

    const handleClick = (e: React.FormEvent<HTMLInputElement>) => {
        const {target} = e
        setIsDarkMode((target as HTMLInputElement).checked)
    }

    return (
        <header className={styles.header}>
            <Logo size="50" />
            <div className={classNames(styles.header__toggle, {[styles.header__toggle__active] : isDarkMode})}>
                <form>
                    <label className={classNames(styles.toggle__container, {[styles.toggle__container__active]: isDarkMode})} htmlFor='theme-switch'>
                        <input onClick={handleClick} defaultChecked={false} type={'checkbox'} id='theme-switch'/>
                        <span className={styles.toggle__hand}></span>
                    </label>
                </form>
                {isDarkMode ? 
                    <LightModeIcon size='35' />
                    :
                    <DarkModeIcon size="35" />
                }
            </div>
        </header>
    )
}


export function Logo ({ size }: IconProps) {
    return (
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 7H16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 10.5H13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export function DarkModeIcon ({ size }: IconProps) {
    return (
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_429_11017)">
            <path d="M20.9955 11.7115L22.2448 11.6721C22.2326 11.2847 22.0414 10.9249 21.7272 10.698C21.413 10.4711 21.0113 10.4029 20.6397 10.5132L20.9955 11.7115ZM12.2885 3.00454L13.4868 3.36028C13.5971 2.98873 13.5289 2.58703 13.302 2.2728C13.0751 1.95857 12.7153 1.76736 12.3279 1.75516L12.2885 3.00454ZM20.6397 10.5132C20.1216 10.667 19.5716 10.75 19 10.75V13.25C19.815 13.25 20.6046 13.1314 21.3512 12.9098L20.6397 10.5132ZM19 10.75C15.8244 10.75 13.25 8.17564 13.25 5H10.75C10.75 9.55635 14.4437 13.25 19 13.25V10.75ZM13.25 5C13.25 4.42841 13.333 3.87841 13.4868 3.36028L11.0902 2.64879C10.8686 3.39542 10.75 4.18496 10.75 5H13.25ZM12 4.25C12.0834 4.25 12.1665 4.25131 12.2492 4.25392L12.3279 1.75516C12.219 1.75173 12.1097 1.75 12 1.75V4.25ZM4.25 12C4.25 7.71979 7.71979 4.25 12 4.25V1.75C6.33908 1.75 1.75 6.33908 1.75 12H4.25ZM12 19.75C7.71979 19.75 4.25 16.2802 4.25 12H1.75C1.75 17.6609 6.33908 22.25 12 22.25V19.75ZM19.75 12C19.75 16.2802 16.2802 19.75 12 19.75V22.25C17.6609 22.25 22.25 17.6609 22.25 12H19.75ZM19.7461 11.7508C19.7487 11.8335 19.75 11.9166 19.75 12H22.25C22.25 11.8903 22.2483 11.781 22.2448 11.6721L19.7461 11.7508Z" fill="#292929"/>
            </g>
            <defs>
            <clipPath id="clip0_429_11017">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export function LightModeIcon ({ size }: IconProps) {
    return (
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#a)" fill="#000000">
            <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/>
            </g>
            <defs>
            <clipPath id="a">
            <path fill="#ffffff" d="M0 0h24v24H0z"/>
            </clipPath>
            </defs>
        </svg>
    )
}
