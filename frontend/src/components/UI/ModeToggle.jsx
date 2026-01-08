import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/UI/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = mounted && (theme === "dark" || (theme === "system" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches))

  const handleToggle = () => {
    if (!mounted) return
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button variant="outline" size="icon" onClick={handleToggle} aria-pressed={isDark} aria-label="Toggle theme">
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
