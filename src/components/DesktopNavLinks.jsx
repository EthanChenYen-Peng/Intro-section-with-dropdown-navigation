import DropdownLink from "./DropdownLink"

function DesktopNavLinks() {
  return (
    <div className="ml-12 hidden  flex-1 items-center justify-between text-medium-gray desktop:flex">
      <ul className="flex gap-10 ">
        <DropdownLink title={'Features'}/>
        <li>Company</li>
        <li>Carrers</li>
        <li>About</li>
      </ul>

      <ul className="flex items-center gap-10">
        <li>Login</li>
        <li className="rounded-2xl border-[1px] py-2 px-4">Register</li>
      </ul>
    </div>
  )
}

export default DesktopNavLinks
