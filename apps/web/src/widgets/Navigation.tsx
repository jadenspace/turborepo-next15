"use client";

import { ReactNode, Suspense } from "react";

import { usePathname } from "next/navigation";

import FolderIcon from "@mui/icons-material/Folder";
import Link from "@mui/material/Link";

import { cn } from "@/shared/ui/cn";
import { menuList, parentMenuList } from "@/shared/ui/navigation";
import { toPascalCase } from "@/shared/utils/string";

export default function Navigation({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "h-[calc(100vh-var(--header-height)-var(--footer-height)-var(--scroll-height,0))] overflow-y-auto pt-2",
        className,
      )}
    >
        <ul>
          {parentMenuList.map((parentItem) => {
            const availableMenuList = menuList.filter(
              (item) => item.parent === parentItem.name,
            );

            return (
              !!availableMenuList.length && (
                <li key={parentItem.id} className="w-full px-2">
                  <h2 className="pl-[15px] text-[14px] leading-[48px] text-black text-opacity-60">
                    {toPascalCase(parentItem.title)}
                  </h2>
                  <ul>
                    {availableMenuList.map((item) => (
                      <li key={item.id} className="flex w-full justify-center">
                        <Link
                          className={`flex h-10 w-full items-center gap-8 rounded-md px-4 ${
                            pathname?.split("/")[1] === item.url.slice(1) ? "bg-nav-selected" : ""
                          } hover:bg-nav-selected`}
                          href={item.url}
                        >
                          <FolderIcon htmlColor="rgba(0, 0, 0, 0.56)" />
                          <span className="text-[16px] text-gray-900">
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            );
          })}
        </ul>
        {children}
    </nav>
  );
}
