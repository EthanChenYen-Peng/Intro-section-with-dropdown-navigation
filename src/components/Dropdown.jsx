function Dropdown({ show, links }) {
  return (
    <div
      className={`${
        show ? 'absolute' : 'hidden'
      } right-0 top-11 animate-[slideUp_0.3s_ease-in-out] rounded-lg bg-white p-7 drop-shadow-2xl transition-opacity`}
    >
      {links}
    </div>
  )
}

export default Dropdown
