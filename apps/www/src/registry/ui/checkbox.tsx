import { cn } from "@/lib/utils";
import {
  type CheckboxProps,
  Checkbox as HeadlessCheckbox,
} from "@headlessui/react";

function CheckBox({ className, ...props }: CheckboxProps) {
  return (
    <HeadlessCheckbox
      className={cn(
        "group size-4 rounded shrink-0 border grid place-items-center bg-accent/50 data-checked:bg-primary",
        className,
      )}
      {...props}
    >
      <svg
        className="stroke-primary-foreground opacity-0 size-[90%] translate-y-0.5 transition-all group-data-checked:opacity-100 group-data-checked:translate-y-0"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M3 8L6 11L11 3.5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </HeadlessCheckbox>
  );
}

export { CheckBox };
