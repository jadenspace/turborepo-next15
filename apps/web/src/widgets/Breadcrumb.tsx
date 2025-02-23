"use client";

import { useCallback, useEffect, useState } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { menuList, subMenuList } from "@/shared/ui/navigation";
import { toPascalCase } from "@/shared/utils/string";

export default function Breadcrumb() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [title, setTitle] = useState("");

  // 서브 메뉴 페이지 여부
  const isSubMenuPage = pathname && subMenuList
    .map(({ url }) => url)
    .some((item) => pathname.includes(item));

  useEffect(() => {
    const currentMenu = menuList.find((menu) => menu.url === pathname);
    const { title } = currentMenu ?? {};
    if (title) {
      setTitle(title);
    } else if (searchParams && searchParams.has("title")) {
      setTitle(searchParams.get("title") ?? "");
    }
  }, [pathname, searchParams]);

  const handleBackwardButton = useCallback((e) => {
    e.preventDefault();
    window.history.go(-1);
  }, []);

  return (
    <div className="flex">
      {isSubMenuPage && (
        <button
          type="button"
          className="flex w-12 items-center justify-center border-b border-r bg-white"
          onClick={handleBackwardButton}
        >
          <ArrowBackIosNewIcon />
        </button>
      )}
      <h1 className="flex h-[72px] flex-1 items-center border-b border-[#e0e0e0] bg-white px-6 text-[24px]">
        {!!title.length && <>{toPascalCase(title)}</>}
      </h1>
    </div>
  );
}
