import iconMenu from '../../images/icon-menu.svg'
import iconMenuClose from '../../images/icon-close-menu.svg'
function MenuBtn({ menuOpen, handleClick }) {
  return (
    <div onClick={handleClick} className="fixed top-6 right-6 desktop:hidden">
      {menuOpen ? <img src={iconMenuClose} /> : <img src={iconMenu} />}
    </div>
  )
}

export default MenuBtn
