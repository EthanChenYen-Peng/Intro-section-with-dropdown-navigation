import MobileDropdownLink from './MobileDropdownLink'
import todoIcon from '../../images/icon-todo.svg'
import calendarIcon from '../../images/icon-calendar.svg'
import reminderIcon from '../../images/icon-reminders.svg'
import planningIcon from '../../images/icon-planning.svg'

function FeatureDropdownLinks() {
  const links = [
    [todoIcon, 'Todo List'],
    [calendarIcon, 'Calendar'],
    [reminderIcon, 'Reminder'],
    [planningIcon, 'Planning'],
  ]
  return (
    <>
      {links.map(([icon, item]) => (
        <li key={item} className="flex min-w-max items-center gap-4 pl-8">
          <img src={icon} className="w-4" />
          <span className="text-sm font-thin">{item}</span>
        </li>
      ))}
    </>
  )
}

function CompanyLinks() {
  const items = ['Histrory', 'Our team', 'Blog']
  return (
    <>
      {items.map((item) => (
        <li key={item} className="flex min-w-max items-center gap-4 pl-8">
          <span className="text-sm font-thin">{item}</span>
        </li>
      ))}
    </>
  )
}

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
        <ul className="mt-32 flex flex-col gap-5 text-xl text-medium-gray">
          <MobileDropdownLink
            title="Features"
            render={() => <FeatureDropdownLinks />}
          />
          <MobileDropdownLink title="Company" render={() => <CompanyLinks />} />
          <li>Careers</li>
          <li>About</li>
        </ul>

        <ul className="mt-10 flex flex-col items-center gap-5 text-medium-gray">
          <li>Login</li>
          <li className="rounded-2xl border-2 py-2 px-7">Register</li>
        </ul>
      </div>
    </>
  )
}

export default MobileMenu
