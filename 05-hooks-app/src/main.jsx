import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomeHook } from './02-useEffect/FormWithCustomeHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FormWithCustomeHook />
    
  // </React.StrictMode>,
)
