import MobileDropdownLink from './MobileDropdownLink'

function MobileOverlay({ menuOpen }) {
  return (
    <div
      className={`${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      } fixed top-0 bottom-0 right-0 left-0 bg-almost-black opacity-80 transition-transform duration-500 ease-in-out desktop:hidden`}
    ></div>
  )
}

function MobileMenu({ menuOpen }) {
  return (
    <>
      <MobileOverlay menuOpen={menuOpen} />
      <div
        className={`${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 bottom-0 right-0 w-8/12 bg-almost-white px-6 transition-transform duration-500 desktop:hidden`}
      >
        <ul className="mt-32 flex flex-col gap-5 text-xl text-almost-black">
          <MobileDropdownLink title="Features" />
          <li>Features</li>
          <li>Features</li>
        </ul>
      </div>
    </>
  )
}

export default MobileMenu
