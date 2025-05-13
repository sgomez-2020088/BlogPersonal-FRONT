import React from 'react'

export const PostModal = ({ post, onClose }) => {
  const { title, course, description, datePublication, link } = post


  const courseName = course?.name || 'Curso desconocido'

  const formattedDate = new Date(datePublication)

  const isValidDate = !isNaN(formattedDate.getTime())

  const displayDate = isValidDate
    ? formattedDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'Fecha inválida'

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="btn-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p><strong>Descripción:</strong> {description}</p>
          <p><strong>Curso:</strong> {courseName}</p> {/* Usamos courseName que es solo un string */}
          <p><strong>Fecha de publicación:</strong> {displayDate}</p>
          <p><strong>Link:</strong> <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}
