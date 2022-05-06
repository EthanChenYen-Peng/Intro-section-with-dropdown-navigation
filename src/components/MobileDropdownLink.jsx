import React, { useState } from 'react'
import iconArrowDown from '../../images/icon-arrow-down.svg'

function MobileDropdownLink({ title, render }) {
  const [showDropDown, setShowDropDown] = useState(false)

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown)
  }
  return (
    <div className="flex flex-col">
      <li
        onClick={toggleDropdown}
        className="flex cursor-pointer
items-center transition-colors duration-200 hover:text-almost-black
      "
      >
        <span>{title}</span>
        <img
          src={iconArrowDown}
          className={`${
            showDropDown && 'rotate-180'
          } ml-2 transition-transform duration-300 ease-in-out`}
        />
      </li>

      <ul
        className={`${
          showDropDown ? 'max-h-64' : 'max-h-0'
        }   flex flex-col gap-4 overflow-hidden transition-[max-height] duration-500`}
      >
        <div className="mt-4"></div>
        {render()}
      </ul>
    </div>
  )
}

export default MobileDropdownLink
