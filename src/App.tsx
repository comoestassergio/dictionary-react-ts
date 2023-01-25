import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

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
  phonetics: []
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

function App() {

  const [ query, setQuery ] = useState<string | null>('dictionary')
  const [ data, setData ] = useState<Data>()

  const handleSearchWord = async () => {
    const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
    setData(res.data[0])
  } 

  useEffect(() => {
    if (query !== null) {
      handleSearchWord()
    }

  }, [query])

  return (
    <div className="App">
      <Header />
      <Searchbar setQuery={setQuery} />
      {!data && 
        <Loader />
      }
      {data && 
        <>
          <WordInfo word={data?.word} phonetic={data?.phonetic} />
          {data?.meanings.map((el, index) => (
            <Section key={index} antonyms={el.antonyms} definitions={el.definitions} partOfSpeech={el.partOfSpeech} synonyms={el.synonyms} />
          ))}
          <SourceInfo links={data?.sourceUrls} />
        </>
      }
      
      
    </div>
  )
}

export default App
