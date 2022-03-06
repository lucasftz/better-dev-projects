import React from 'react';
import categories from '../categories';

function CategorySelector() {
  return (
    <div className="category-selector">
      <p>Select Category</p>
      <select>
        {categories.map((category, index) => (
          <option
            key={index}
            value={category.id}
            dangerouslySetInnerHTML={{__html: category.name}}
          />
        ))}
      </select>
    </div>
  )
}

export default CategorySelector