import React, { useState } from 'react'
import englishMessages from '../lang/en-GB.json'
import spanishMessages from '../lang/es-ES.json'
import danishMessages from '../lang/da-DK.json'
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {



    const [messages, setMessages] = useState(englishMessages)
    const [locale, setLocale] = useState('en-GB')

    const setLanguage = (language) => {
        switch (language) {
            case 'es-ES':
                setMessages(spanishMessages)
                setLocale('es-ES')
                localStorage.setItem('lang', 'es-ES')
                break;
            case 'en-GB':
                setMessages(englishMessages)
                setLocale('en-GB')
                localStorage.setItem('lang', 'en-GB')
                break;
            case 'da-DK':
                setMessages(danishMessages)
                setLocale('da-DK')
                localStorage.setItem('lang', 'da-DK')
                break;
            default:
                setLanguage(englishMessages)

        }
    }

    return (
        <langContext.Provider value={{ setLanguage: setLanguage }}>
           <IntlProvider locale={locale} messages={messages}>{children}</IntlProvider> 
        </langContext.Provider>
    )
}

export { LangProvider, langContext }