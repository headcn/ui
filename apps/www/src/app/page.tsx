import { Button } from "@/registry/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-5 h-dvh w-dvw">
      <Button size={"xs"}>Button</Button>
      <Button size={"sm"}>Button</Button>
      <Button size={"md"}>Button</Button>
      <Button size={"lg"}>Button</Button>
    </div>
  );
}
