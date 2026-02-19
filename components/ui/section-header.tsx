import { cn } from "@/lib/utils";

type Align = "left" | "center";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Primary-colored portion of the heading */
  title: string;
  /** Dark-colored portion of the heading (optional second part) */
  subtitle?: string;
  /** Paragraph text below the heading */
  description?: string;
  /** Text alignment — defaults to "center" */
  align?: Align;
  /** Render as h1 instead of the default h2 */
  as?: "h1" | "h2" | "h3";
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  as: Heading = "h2",
  className,
  children,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(align === "center" && "text-center", className)}
      {...props}
    >
      <Heading
        className={cn(
          "flex flex-wrap gap-2 text-3xl md:text-4xl font-semibold leading-tight",
          align === "center" && "justify-center",
        )}
      >
        <span className="text-primary">{title}</span>
        {subtitle && <span className="text-slate-900">{subtitle}</span>}
      </Heading>
      {description && (
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
