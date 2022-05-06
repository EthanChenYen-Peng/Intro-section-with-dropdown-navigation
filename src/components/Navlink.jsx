function Navlink({ children, className }) {
  return (
    <li className={`cursor-pointer transition-colors duration-200 hover:text-almost-black ${className}`}>
      {children}
    </li>
  )
}

export default Navlink
