import { LucideIcon } from "lucide-react"

interface ButtonProps {
  styles: string
  Icon: LucideIcon
}


export function Button({ styles, Icon }: ButtonProps) {
  return (
    <button className={styles}>
      {<Icon />}
    </button>
  )
}