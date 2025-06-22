import { Button } from "@/registry/ui/button";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-5 h-dvh w-dvw">
      <Button size={"xs"}>Button</Button>
      <Button size={"sm"}>Button</Button>
      <Button size={"icon-md"}>
        <CheckCircleIcon className="size-4" />
      </Button>
      <Button size={"md"} variant={"link"}>
        <CheckCircleIcon className="size-4" />
        Button
      </Button>
      <Button size={"lg"}>Button</Button>
    </div>
  );
}
