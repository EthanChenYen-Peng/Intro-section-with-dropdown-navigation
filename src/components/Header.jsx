import logo from '../../images/logo.svg'
function Header() {
  return (
    <div className='flex px-2'>
      <div>Logo</div>
      <img src={logo} />
    </div>
  );
}

export default Header;
