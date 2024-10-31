import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Этот импорт должен соответствовать экспорту из App.jsx
// import './index.css' // Подключите стили, если нужно

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
