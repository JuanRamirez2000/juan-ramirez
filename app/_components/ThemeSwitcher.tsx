import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
  return (
    <div className="dropdown dropdown-end text-secondary">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-32"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            value="dark"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Emerald"
            value="emerald"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Sunset"
            value="sunset"
          />
        </li>
      </ul>
    </div>
  );
}
