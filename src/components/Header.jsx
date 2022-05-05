import {useState} from 'react'
import logo from '../../images/logo.svg'
import MenuBtn from './MenuBtn'
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="flex justify-between px-6 py-6 desktop:py-6 desktop:px-8">
      <img src={logo} />
      <MenuBtn handleClick={toggleMenu} menuOpen={menuOpen}/>
    </div>
  )
}

export default Header
