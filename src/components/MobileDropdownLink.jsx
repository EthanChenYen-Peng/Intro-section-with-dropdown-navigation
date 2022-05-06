import React, { useState } from 'react'
import iconArrowDown from '../../images/icon-arrow-down.svg'

function DropdownLinks({ open }) {
  return (
    <ul
      className={`${
        open ? 'max-h-32' : 'max-h-0'
      }  top-3 overflow-hidden transition-[max-height] duration-500`}
    >
      <li>Item 1</li>
      <li>Item 1</li>
    </ul>
  )
}
function MobileDropdownLink({ title }) {
  const [showDropDown, setShowDropDown] = useState(false)

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown)
  }
  return (
    <div className="flex flex-col">
      <li
        onClick={toggleDropdown}
        className="relative flex cursor-pointer
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
      <DropdownLinks open={showDropDown} />
    </div>
  )
}

export default MobileDropdownLink
