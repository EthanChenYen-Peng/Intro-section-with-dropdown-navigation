import { useState } from 'react'
import logo from '../../images/logo.svg'
import DesktopNavLinks from './DesktopNavLinks'
import MenuBtn from './MenuBtn'
import MobileMenu from './MobileMenu'
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="flex items-center justify-between px-6 py-6 desktop:justify-start desktop:py-10 desktop:px-8">
      <div className="w-30">
        <img src={logo} className="object-cover" />
      </div>

      <DesktopNavLinks />
      <MobileMenu menuOpen={menuOpen} />
      <MenuBtn handleClick={toggleMenu} menuOpen={menuOpen} />
    </div>
  )
}

export default Header
