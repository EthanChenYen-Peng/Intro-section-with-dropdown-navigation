import React, { useState } from 'react'
import Dropdown from './Dropdown'
import iconArrowDown from '../../images/icon-arrow-down.svg'
import iconArrowUp from '../../images/icon-arrow-up.svg'

function DropdownLink({ title, links }) {
  const [showDropDown, setShowDropDown] = useState(false)

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown)
  }
  return (
    <li
      className="relative flex cursor-pointer items-center"
      onClick={toggleDropdown}
    >
      {title}{' '}
      <img
        src={iconArrowDown}
        className={`${
          showDropDown && 'rotate-180'
        } ml-2 transition-transform duration-300 ease-in-out`}
      />
      <Dropdown show={showDropDown} links={links} />
    </li>
  )
}

export default DropdownLink
