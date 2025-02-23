import { ButtonHTMLAttributes } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import { cn } from "@/shared/ui/cn";

interface NavigationToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isVisible: boolean;
}

export default function NavigationToggleButton({
  isVisible,
  ...props
}: NavigationToggleButtonProps) {
  return (
    <button
      className={cn(
        "fixed top-[calc((100vh-var(--header-height)-var(--footer-height))/2-25px)] z-50 h-[60px] w-10 bg-white pr-1",
        {
          "navigation-hover:block absolute right-0 top-0 hidden w-10":
            isVisible,
          "left-0 rounded-r-full border border-l-0": !isVisible,
        },
      )}
      {...props}
    >
      {isVisible ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}
