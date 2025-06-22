import { cn } from "@/lib/utils";
import { Button as HeadlessButton } from "@headlessui/react";
import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap gap-1.5 rounded-md text-sm font-semibold shadow-xs data-active:translate-y-0.5 transform transition-all",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground data-hover:bg-primary/90",
      },
      size: {
        xs: "h-7 px-2.5 text-xs has-[>svg]:px-2",
        sm: "h-8 px-3 has-[>svg]:px-2.5",
        md: "h-9 px-4 has-[>svg]:px-3",
        lg: "h-10 px-5 has-[>svg]:px-4",
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
