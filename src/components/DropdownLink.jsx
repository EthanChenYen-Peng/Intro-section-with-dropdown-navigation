import React, { useState } from 'react'
import Dropdown from './Dropdown'
import iconArrowDown from '../../images/icon-arrow-down.svg'
import iconArrowUp from '../../images/icon-arrow-up.svg'

function DropdownLink({title}) {
  const [showDropDown, setShowDropDown] = useState(false)

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown)
  }
  return (
    <li
      className="relative flex cursor-pointer items-center"
      onClick={toggleDropdown}
    >
      {title} <img src={iconArrowDown} className="ml-2" />
      <Dropdown show={showDropDown} />
    </li>
  )
}

export default DropdownLink
