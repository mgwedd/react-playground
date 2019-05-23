import React from 'react'

const LanguageContext = React.createContext({
  lang: window.navigator.language, 
  setLang: () => {
    
  },
})

export default LanguageContext