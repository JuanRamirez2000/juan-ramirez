import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function DarkLightModeSwitch() {
  return (
    <label className="swap swap-rotate transition-all hover:scale-110">
      <input type="checkbox" className="theme-controller" value="pastel" />

      <SunIcon className="h-11 w-11 text-current swap-on p-2 bg-secondary rounded-lg" />

      <MoonIcon className="h-11 w-11 text-current swap-off p-2 bg-secondary rounded-lg" />
    </label>
  );
}
