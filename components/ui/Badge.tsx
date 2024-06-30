import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

const badgeVariants = cva(
  "inline-flex items-center border rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-green-100/10 border-green-400/50 text-primary-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={clsx(badgeVariants({ variant }), className)} {...props}>
      <div className="dot bg-green-500 w-2 h-2 rounded-full mr-2" />
      Open to work
    </div>
  );
}

export { Badge, badgeVariants };
