import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'
import { analytics } from './config/firebase'

// Initialize analytics (automatic page view tracking)
console.log('Analytics initialized:', analytics)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
