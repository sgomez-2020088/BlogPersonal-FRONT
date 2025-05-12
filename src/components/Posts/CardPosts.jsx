import React from 'react'

export const CardPosts = ({title, course, datePublication}) => {

  const formattedDate = new Date(datePublication).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div class="card" style={{width: '18rem'}}>
        <div class="cabody">
            <h5 class="cardTitle">{title}</h5>
            <p class="cardCourse">{course}</p>
            <p class="cardDescription">{course}</p>
            <p class="cardCourse">{formattedDate}</p>
        </div>
    </div>
  )
}