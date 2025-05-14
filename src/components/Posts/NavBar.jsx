import React from 'react'
import './Navbar.css'

export const Navbar = ({ handleFilterChange, filter }) => {
    return (
        <div className="navbar">
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
            Tencología
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
