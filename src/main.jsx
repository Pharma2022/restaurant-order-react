import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalContextProvider } from './Context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render


(
<GlobalContextProvider>
<App />
</GlobalContextProvider>
)
