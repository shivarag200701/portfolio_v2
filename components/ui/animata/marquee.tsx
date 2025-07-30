import { cn } from "@/lib/utils";
import { log } from "console";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Should the marquee scroll horizontally or vertically.
   * If set to `true`, the marquee will scroll vertically.
   *
   * @default false
   */
  vertical?: boolean;

  /**
   * The number of times to repeat the children. Set this value so that the repeated children overflow the container.
   * @default 5
   */
  repeat?: number;

  /**
   * Reverse the marquee direction.
   */
  reverse?: boolean;

  /**
   * Pause the marquee animation on hover.
   */
  pauseOnHover?: boolean;

  /**
   * Apply a gradient mask to the marquee.
   * @default true
   */
  applyMask?: boolean;

  /**
   * The speed of the marquee animation.
   * @default 10
   */
  speed?: number;
}

export default function Marquee({
  children,
  vertical = false,
  repeat = 5,
  pauseOnHover = false,
  reverse = false,
  className,
  applyMask = true,
  speed = 10,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group relative flex h-full w-full p-2 [--gap:12px] [gap:var(--gap)] ",
        {
          "flex-col": vertical,
          "flex-row": !vertical,
        },
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={`item-${index}`}
          className={cn("flex shrink-0 [gap:var(--gap)]  ", {
            "group-hover:![animation-play-state:paused]": pauseOnHover,
            // "[animation-direction:reverse]": reverse,
            "marquee-horizontal flex-row": !vertical,
            "marquee-vertical flex-col": vertical,
            "marquee-horizontal-reverse": reverse && !vertical,
            "marquee-vertical-reverse": reverse && vertical,
          })}
        >
          {children}
        </div>
      ))}
      {applyMask && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-10 h-full w-full from-white/50 from-5% via-transparent via-50% to-white/50 to-95% dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50",
            {
              "bg-gradient-to-b": vertical,
              "bg-gradient-to-r": !vertical,
            }
          )}
        />
      )}
    </div>
  );
}
