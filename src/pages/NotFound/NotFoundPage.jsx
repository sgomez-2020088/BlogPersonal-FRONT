import React from 'react'
import './NotFoundPage.css'  // Asegúrate de importar el archivo CSS

export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>¡Ups! Página no encontrada</p>
      <button className="not-found-button" onClick={() => window.location.href = '/'}>
        Regresar 
      </button>
    </div>
  )
}
