import { useState } from 'react'
import iconArrowDown from '../../images/icon-arrow-down.svg'
import iconArrowUp from '../../images/icon-arrow-up.svg'
import Dropdown from './Dropdown'
function DesktopNavLinks() {
  const [showDropDown, setShowDropDown] = useState(false)

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown)
  }
  return (
    <div className="ml-12 hidden  flex-1 items-center justify-between text-medium-gray desktop:flex">
      <ul className="flex gap-10 ">
        <li className="relative flex items-center cursor-pointer" onClick={toggleDropdown}>
          Features <img src={iconArrowDown} className="ml-2" />
          <Dropdown show={showDropDown} />
        </li>
        <li>Company</li>
        <li>Carrers</li>
        <li>About</li>
      </ul>

      <ul className="flex items-center gap-10">
        <li>Login</li>
        <li className="rounded-2xl border-[1px] py-2 px-4">Register</li>
      </ul>
    </div>
  )
}

export default DesktopNavLinks
