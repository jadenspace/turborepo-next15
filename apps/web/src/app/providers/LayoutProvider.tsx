"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { debounce } from "es-toolkit";

import { menuList } from "@/shared/ui/navigation";

export default function LayoutProvider({ children }: { children: ReactNode }) {
  const [isScrollX, setIsScrollX] = useState(false);
  const [isScrollY, setIsScrollY] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleResize = useCallback(() => {
    // 스크롤바 여부 확인
    const currentIsScrollX =
      window.innerWidth - document.documentElement.clientWidth > 5;
    const currentIsScrollY =
      window.innerHeight - document.documentElement.clientHeight > 5;
    if (isScrollX !== currentIsScrollX) {
      document.documentElement.style.setProperty(
        "--scroll-width",
        `${Math.ceil(window.innerWidth - document.documentElement.getBoundingClientRect().width)}px`,
      );
      setIsScrollX((current) => !current);
    }
    if (isScrollY !== currentIsScrollY) {
      document.documentElement.style.setProperty(
        "--scroll-height",
        `${Math.ceil(window.innerHeight - document.documentElement.clientHeight)}px`,
      );
      setIsScrollY((current) => !current);
    }

    // breadcrumb height 설정
    const currentMenu = menuList.find((menu) => menu.url === pathname);
    const hasTitle = currentMenu?.title || searchParams?.has("title");
    document.documentElement.style.setProperty(
      "--breadcrumb-height",
      hasTitle ? "72px" : "0px",
    );
  }, [isScrollX, isScrollY, pathname, searchParams]);

  const debounceLog = debounce(handleResize, 100);

  useEffect(() => {
    debounceLog();
    window.addEventListener("resize", debounceLog);
    window.addEventListener("scroll", debounceLog);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", debounceLog);
        window.removeEventListener("scroll", debounceLog);
      }
    };
  }, [debounceLog]);

  return <>{children}</>;
}
