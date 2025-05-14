import React, { useState, useEffect  } from 'react';
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
    <div className="navbar">
      {/* Botones de filtro */}
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
}
