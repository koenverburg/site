import Link from 'next/link'
import {ModeToggle} from '@/components/mode.toggle'

export function Header() {
  return (
    <div className="py-4 flex items-center justify-between">
      <nav className="flex gap-4">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          home
        </Link>
        <Link href="/radar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          radar
        </Link>
      </nav>
      <ModeToggle />
    </div>
  )
}
