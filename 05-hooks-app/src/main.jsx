import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomeHook } from './02-useEffect/FormWithCustomeHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <MultipleCustomHooks />
  // <FocusScreen />
  <Layout />

    
  // </React.StrictMode>,
)
