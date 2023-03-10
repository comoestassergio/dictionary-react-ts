import { useState, useEffect } from 'react'
import './App.scss'
import axios, { AxiosError } from 'axios'
import classNames from 'classnames'

import Header from './components/Header/Header'
import Searchbar from './components/Searchbar/Searchbar'
import WordInfo from './components/WordInfo/WordInfo'
import Section from './components/Section/Section'
import SourceInfo from './components/SourceInfo/SourceInfo'
import Loader from './components/Loader/Loader'

interface Data {
  license: {}
  meanings: Meaning []
  phonetic: string
  phonetics: PhoneticsObj []
  sourceUrls: string []
  word: string
}

export interface Meaning {
  antonyms: string []
  definitions: Definition []
  partOfSpeech: string
  synonyms: string []
}

interface Definition {
  definition: string
  synonyms: []
  antonyms: []
}

export interface PhoneticsObj {
  audio?: string
  text?: string
  sourceUrl?: string
}

export interface ApiError {
  title: string
  message?: string
  resolution?: string
}

function darkTheme () {
  return window.matchMedia('(prefers-color-scheme: dark)')
}


function App() {

  const [ isDarkMode, setIsDarkMode ] = useState(darkTheme().matches)
  const [ query, setQuery ] = useState<string | null>('dictionary')
  const [ data, setData ] = useState<Data>()
  const [ error, setError ] = useState<ApiError | null>(null)
  const [ loading, setLoading ] = useState<boolean>(false)

  const handleSearchWord = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      setData(res.data[0])
      setLoading(false)
    }catch(error: unknown) {
      if (error instanceof AxiosError) {
        setError(error?.response?.data)
        setLoading(false)
      }
    }
  } 

  useEffect(() => {
    if (query !== null) {
      handleSearchWord()
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }

  }, [query])

  return (
    <div className={classNames('App', {['App__dark']: isDarkMode})}>
      <div className='wrapper'>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Searchbar setQuery={setQuery} isDarkMode={isDarkMode} error={error} />
        {loading && 
          <Loader />
        }
        {data && !loading && 
          <>
            <WordInfo word={data?.word} phonetic={data?.phonetic} isDarkMode={isDarkMode} phonetics={data.phonetics} />
            {data?.meanings.map((el, index) => (
              <Section key={index} antonyms={el.antonyms} definitions={el.definitions} partOfSpeech={el.partOfSpeech} synonyms={el.synonyms} setQuery={setQuery} />
            ))}
            <SourceInfo links={data?.sourceUrls} />
          </>
        }
      </div>
    </div>
  )
}

export default App
