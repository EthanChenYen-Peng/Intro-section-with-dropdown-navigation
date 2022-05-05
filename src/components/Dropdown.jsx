function Dropdown({ show }) {
  return (
    <div
      className={`${
        show ? 'absolute' : 'hidden'
      } right-0 top-11 rounded-lg  bg-white p-5 drop-shadow-2xl animate-[slideUp_0.3s_ease-in-out]`}
    >
      <p>Dropdown</p>
    </div>
  )
}

export default Dropdown
