import React, { useState } from 'react'
import iconArrowDown from '../../images/icon-arrow-down.svg'
import todoIcon from '../../images/icon-todo.svg'
import calendarIcon from '../../images/icon-calendar.svg'
import reminderIcon from '../../images/icon-reminders.svg'
import planningIcon from '../../images/icon-planning.svg'

function DropdownLinks({ open }) {
  const links = [
    [todoIcon, 'Todo List'],
    [calendarIcon, 'Calendar'],
    [reminderIcon, 'Reminder'],
    [planningIcon, 'Planning'],
  ]
  return (
    <ul
      className={`${
        open ? 'max-h-48' : 'max-h-0'
      }   flex flex-col gap-4 overflow-hidden transition-[max-height] duration-500`}
    >
      <div className="mt-4"></div>
      {links.map(([icon, item]) => (
        <li key={item} className="flex min-w-max items-center gap-4 pl-8">
          <img src={icon} className="w-4" />
          <span className="text-sm font-thin">{item}</span>
        </li>
      ))}
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
      <DropdownLinks open={showDropDown} />
    </div>
  )
}

export default MobileDropdownLink
