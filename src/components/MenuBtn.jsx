import iconMenu from '../../images/icon-menu.svg'
import iconMenuClose from '../../images/icon-close-menu.svg'
function MenuBtn({ menuOpen, handleClick }) {
  return (
    <div onClick={handleClick} className='desktop:hidden'>
      {menuOpen ? <img src={iconMenu} /> : <img src={iconMenuClose} />}
    </div>
  )
}

export default MenuBtn
