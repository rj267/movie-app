import React from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/svg/logo.svg";
import { cn } from "@/utils/helper";

interface logoProps {
  className?: string;
  logoColor?: string;
}

const Logo: React.FC<logoProps> = ({
  className = "",
  logoColor = "text-black dark:text-primary",
}) => (
  <Link
    to="/"
    className={cn(`flex flex-row items-center xs:gap-2 gap-[6px])`, className)}
  >
    <div className="bg-red-600 p-2 rounded-lg">
      <img
        src={logo}
        alt="logo"
        className="sm:h-[64px] h-[56px] sm:w-[64px] w-[56px]"
      />
    </div>
    <span
      className={cn(logoColor,`font-semibold sm:text-[28px] text-[24px]`)}
    >
      MovieMax
    </span>
  </Link>
);

export default Logo;
