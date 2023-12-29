import { Menu } from "./Menu";
import { ModeToggle } from "./ModeToggle";

export function Header() {

  return (
    <div className="py-2 flex items-center justify-between">
      <a href="/"><h1 className="font-bold">Conrad The Programmer</h1></a>

      <div className="justify-items-end items-center">
        <ModeToggle/>
        <span className="px-1"></span>
        <Menu />
      </div>
    </div>
  )
}