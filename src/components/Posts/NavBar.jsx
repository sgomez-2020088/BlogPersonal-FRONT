/*import React, { useState, useEffect  } from 'react';
import './Navbar.css';

export const Navbar = ({ setFilter }) => {
const [filter, setInternalFilter] = useState("Todos")

    useEffect(() => {
        const savedFilter = localStorage.getItem('selectedFilter')
        if (savedFilter) {
        setInternalFilter(savedFilter)
        setFilter(savedFilter) 
        }
    }, [setFilter])


    const handleFilterChange = (course) => {
    setInternalFilter(course)
    setFilter(course) 
    localStorage.setItem('selectedFilter', course) 
    }

    return (
    <div className="navbar1">
        <button
            onClick={() => handleFilterChange('Todos')}
            className={`filter-button ${filter === 'Todos' ? 'active' : ''}`}
        >
        Todos
        </button>
        <button
            onClick={() => handleFilterChange('TECNOLOGIA')}
            className={`filter-button ${filter === 'TECNOLOGIA' ? 'active' : ''}`}
        >
        Tecnología
        </button>
        <button
            onClick={() => handleFilterChange('TALLER')}
            className={`filter-button ${filter === 'TALLER' ? 'active' : ''}`}
        >
        Taller
        </button>
        <button
            onClick={() => handleFilterChange('PRACTICA')}
            className={`filter-button ${filter === 'PRACTICA' ? 'active' : ''}`}
        >
        Práctica
        </button>
    </div>
    )
}*/

import React, { useState, useEffect } from 'react'
import './Navbar.css'

export const Navbar = ({ setFilter, setSearchQuery }) => {
  const [filter, setInternalFilter] = useState("Todos")
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const savedFilter = localStorage.getItem('selectedFilter')
    if (savedFilter) {
      setInternalFilter(savedFilter)
      setFilter(savedFilter)
    }
  }, [setFilter])

  const handleFilterChange = (course) => {
    setInternalFilter(course)
    setFilter(course)
    localStorage.setItem('selectedFilter', course)
  }

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchInput(value)
    setSearchQuery(value) // enviar búsqueda al componente padre
  }

  return (
    <div className="navbar1">
      <div className="filter-buttons-container">
        <input
            type="text"
            placeholder="🔍 Buscar publicaciones..."
            value={searchInput}
            onChange={handleSearchChange}
            className="search-input"
        />

        <button
          onClick={() => handleFilterChange('Todos')}
          className={`filter-button ${filter === 'Todos' ? 'active' : ''}`}
        >
          Todos
        </button>
        <button
          onClick={() => handleFilterChange('TECNOLOGIA')}
          className={`filter-button ${filter === 'TECNOLOGIA' ? 'active' : ''}`}
        >
          Tecnología
        </button>
        <button
          onClick={() => handleFilterChange('TALLER')}
          className={`filter-button ${filter === 'TALLER' ? 'active' : ''}`}
        >
          Taller
        </button>
        <button
          onClick={() => handleFilterChange('PRACTICA')}
          className={`filter-button ${filter === 'PRACTICA' ? 'active' : ''}`}
        >
          Práctica
        </button>
      </div>

      
    </div>
  )
}

