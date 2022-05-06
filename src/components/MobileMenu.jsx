function MobileOverlay({ menuOpen, children }) {
  return (
    <div
      className={`${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      } fixed top-0 bottom-0 right-0 left-0 bg-almost-black opacity-80 transition-transform duration-500 ease-in-out desktop:hidden`}
    >
      {children}
    </div>
  )
}
function MobileMenu({ menuOpen }) {
  return (
    <MobileOverlay menuOpen={menuOpen}>
      <div className={'absolute top-0 bottom-0 right-0 w-8/12 bg-almost-white'}>
        <p>Mobile</p>
      </div>
    </MobileOverlay>
  )
}

export default MobileMenu
