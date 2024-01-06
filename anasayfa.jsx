import React from 'react'
import ReactDOM from 'react-dom/client'
import NoteForm from './yanmenu'
import 'bootstrap/dist/css/bootstrap.css'
import '/src/style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteForm />
  </React.StrictMode>,
)