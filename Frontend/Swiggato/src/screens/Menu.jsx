import React from 'react'
import foodData from '../../data/foodData'
import foodCategory from '../../data/foodCategory'

const Menu = () => {
  return (
    <div>
      <h1>
        {foodData.length}
        {foodCategory.length}
      </h1>
    </div>
  )
}

export default Menu
