import React, { useState, useRef, useEffect } from 'react'
import iconArrowDown from '../../images/icon-arrow-down.svg'

function MobileDropdownLink({ title, render }) {
  const [showDropDown, setShowDropDown] = useState(false)
  const dropdownRef = useRef()
  const dropdownContainerRef = useRef()

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown)
  }
  useEffect(() => {
    const height = showDropDown
      ? dropdownRef.current.getBoundingClientRect().height
      : 0

    dropdownContainerRef.current.style.height = `${height}px`
  }, [showDropDown])

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

      <div
        ref={dropdownContainerRef}
        className="h-0 overflow-hidden transition-[height] duration-300"
      >
        <ul ref={dropdownRef} className="flex flex-col gap-4">
          <div className="mt-4"></div>
          {render()}
        </ul>
      </div>
    </div>
  )
}

export default MobileDropdownLink
