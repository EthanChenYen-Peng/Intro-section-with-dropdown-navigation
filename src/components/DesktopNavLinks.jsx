import DropdownLink from './DropdownLink'
import Navlink from './Navlink'
import { companyNavLinks, featuresNavLinks } from '../utils/navlinks'
function FeatureLinks() {
  return (
    <ul className="flex flex-col gap-4">
      {featuresNavLinks.map(([icon, item]) => (
        <li key={item} className="flex min-w-max items-center gap-3">
          <img src={icon} className="w-4" />
          <span className="text-sm font-thin">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CompanyLinks() {
  return (
    <ul className="flex flex-col gap-4">
      {companyNavLinks.map((item) => (
        <li key={item} className="flex min-w-max items-center gap-3">
          <span className="text-sm font-thin">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function DesktopNavLinks() {
  return (
    <div className="ml-12 hidden  flex-1 items-center justify-between text-medium-gray desktop:flex">
      <ul className="flex gap-10 ">
        <DropdownLink title={'Features'} links={<FeatureLinks />} />
        <DropdownLink title={'Company'} links={<CompanyLinks />} />
        <Navlink>Carrers</Navlink>
        <Navlink>Blog</Navlink>
      </ul>

      <ul className="flex items-center gap-10">
        <Navlink>Login</Navlink>
        <Navlink className="rounded-2xl border-[1px] py-2 px-4">
          Register
        </Navlink>
      </ul>
    </div>
  )
}

export default DesktopNavLinks
