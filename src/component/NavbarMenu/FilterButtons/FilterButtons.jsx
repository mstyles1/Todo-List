import React from 'react'
import Button from 'react-bootstrap/Button';

export default function FilterButtons({ currentFilter, onFilterChange }) {
  return (

    <div>
        <Button 
        variant={currentFilter === 'all' ? 'primary' : 'outline-primary'}
        onClick={() =>onFilterChange('all')}>
            All
        </Button>
        
        <Button 
        variant={currentFilter === 'completed' ? 'success' : 'outline-success'}
        onClick={() => onFilterChange('completed')}>
            Complete
        </Button>
        
        <Button 
        variant={currentFilter === 'incomplete' ? 'danger' : 'outline-danger'}
        onClick={() => onFilterChange('incomplete')}>
            Incomplete
        </Button>
    </div>
    )
    }
