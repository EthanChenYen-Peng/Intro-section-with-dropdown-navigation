function MobileOverlay({ menuOpen, children }) {
  return (
    <div
      className={`${
        menuOpen ? 'fixed' : 'hidden'
      } top-0 bottom-0 right-0 left-0 bg-medium-gray`}
    >
      {children}
    </div>
  )
}
function MobileMenu({ menuOpen }) {
  return (
    <MobileOverlay menuOpen={menuOpen}>
      <div className={'absolute top-0 bottom-0 right-0 w-1/2 bg-almost-white'}>
        <p>Mobile</p>
      </div>
    </MobileOverlay>
  )
}

export default MobileMenu
