import { cn } from "@/lib/utils";
import { Button as HeadlessButton } from "@headlessui/react";
import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-md text-sm font-semibold shadow-xs data-active:translate-y-0.5 transform transition-all",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground data-hover:bg-primary/90",
      },
      size: {
        md: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <HeadlessButton
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </HeadlessButton>
  );
}

export { Button, buttonVariants };
