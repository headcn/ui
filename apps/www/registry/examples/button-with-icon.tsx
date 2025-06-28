import { Button } from "@/registry/ui/button"
import { CloudArrowUpIcon } from "@heroicons/react/16/solid"

export default function ButtonWithIcon() {
  return (
    <Button>
      <CloudArrowUpIcon className="size-5" /> Upload
    </Button>
  )
}
