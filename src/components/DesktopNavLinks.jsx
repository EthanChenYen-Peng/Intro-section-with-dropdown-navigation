import DropdownLink from './DropdownLink'
import todoIcon from '../../images/icon-todo.svg'
import calendarIcon from '../../images/icon-calendar.svg'
import reminderIcon from '../../images/icon-reminders.svg'
import planningIcon from '../../images/icon-planning.svg'

function FeatureLinks() {
  const links = [
    [todoIcon, 'Todo List'],
    [calendarIcon, 'Calendar'],
    [reminderIcon, 'Reminder'],
    [planningIcon, 'Planning'],
  ]
  return (
    <ul className="flex flex-col gap-4">
      {links.map(([icon, item]) => (
        <li key={item} className="flex min-w-max items-center gap-3">
          <img src={icon} className="w-4" />
          <span className="text-sm font-thin">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CompanyLinks() {
  const links = ['Histroy', 'Our team', 'Blog']
  return (
    <ul className="flex flex-col gap-4">
      {links.map((item) => (
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
