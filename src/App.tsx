import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

import Header from './components/Header/Header'
import Searchbar from './components/Searchbar/Searchbar'
import WordInfo from './components/WordInfo/WordInfo'

interface Data {
  license: {}
  meanings: Meaning []
  phonetic: string
  phonetics: []
  sourceUrls: string []
  word: string
}

interface Meaning {
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
      <WordInfo word={data?.word} phonetic={data?.phonetic} />
    </div>
  )
}

export default App
