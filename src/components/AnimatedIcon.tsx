import { cn } from "@/lib/utils";
import type { ComponentType } from "react";

type AnimatedIconProps = {
  icon: ComponentType<{ className?: string; size?: number | string }>;
  className?: string;
  containerClassName?: string;
  animation?: "float" | "pulse" | "wave";
};

const animationClassMap = {
  float: "icon-float",
  pulse: "icon-pulse",
  wave: "icon-wave",
};

const AnimatedIcon = ({
  icon: Icon,
  className,
  containerClassName,
  animation = "float",
}: AnimatedIconProps) => {
  return (
    <span className={cn("inline-flex items-center justify-center", containerClassName)}>
      <Icon className={cn(animationClassMap[animation], className)} />
    </span>
  );
};

export default AnimatedIcon;
