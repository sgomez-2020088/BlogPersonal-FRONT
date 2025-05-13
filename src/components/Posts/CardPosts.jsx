/*import React from 'react'
import './CardPosts.css'

export const CardPosts = ({title, course, description, datePublication}) => {

  const formattedDate = new Date(datePublication).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="card" style={{ width: '18rem' }} onClick={() => onClickPost(post)}>
        <div class="cabody">
            <h5 class="cardTitle">{title}</h5>
            <p class="cardDescription">{description}</p>
            <p class="cardCourse">{course}</p>
            <p class="cardCourse">{formattedDate}</p>
        </div>
    </div>
  )
}*/
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CardPosts.css'

export const CardPosts = ({ post }) => {
  const { title, course, description, datePublication, link } = post
  const [isExpanded, setIsExpanded] = useState(false) 
  
  const navigate = useNavigate() 
  const formattedDate = new Date(datePublication)
  const isValidDate = !isNaN(formattedDate.getTime())

  const displayDate = isValidDate
    ? formattedDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'Fecha inválida'

  const toggleExpand = () => {
    setIsExpanded(!isExpanded) 
  }


  const handleCommentButtonClick = () => {
    navigate(`/comments/${post._id}`) 
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <h5 className="cardTitle">{title}</h5>
      <p className="cardDescription">{description}</p>
      <p className="cardCourse">{course}</p>
      <p className="cardDate">{displayDate}</p>


      {isExpanded && (
        <div className="cardDetails">
          <p><strong>Link:</strong> <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
        </div>
      )}

      <button onClick={toggleExpand} className="btn btn-link">
        {isExpanded ? 'Ver menos' : 'Ver más'}
      </button>

      <hr className="divider" />

      <button onClick={handleCommentButtonClick} className="btn-comments">Comentarios</button>
    </div>
  )
}
