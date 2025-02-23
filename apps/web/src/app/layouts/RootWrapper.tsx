"use client";
import { ReactNode, Suspense, useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import LayoutProvider from "@/app/providers/LayoutProvider";
import theme from "@/app/styles/theme";
import NavigationToggleButton from "@/shared/ui/buttons/NavigationToggleButton";
import Breadcrumb from "@/widgets/Breadcrumb";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import Navigation from "@/widgets/Navigation";

export function RootWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [isNavVisible]);

  if (
    pathname?.includes("/order-list/detail") ||
    pathname?.includes("/return-list/detail")
  )
    return <>{children}</>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LayoutProvider>
      <ThemeProvider theme={theme}>
        <Box
          component="section"
          sx={{
            display: "grid",
            gridTemplateAreas: `
        "header header"
        "nav main"
        "footer footer"
      `,
            gridTemplateColumns: isNavVisible
              ? "var(--navigation-width) 1fr"
              : "0 1fr",
            gridTemplateRows: "auto 1fr auto",
            width: "100%",
            minHeight: "calc(100vh - var(--scroll-height, 0px))",
            fontFamily: "Pretendard, -apple-system, Roboto, Arial, sans-serif",

            "& header": {
              height: "var(--header-height)",
              gridArea: "header",
              borderBottom: "1px solid #e0e0e0",
            },
            "& nav": {
              position: isNavVisible ? "relative" : "static",
              width: "var(--navigation-width)",
              gridArea: "nav",
              borderRight: "1px solid #e0e0e0",
            },
            "& main": {
              overflowX: "hidden",
              overflowY: "auto",
              gridArea: "main",
              width: isNavVisible
                ? "calc(100vw - var(--navigation-width) - var(--scroll-width, 0px))"
                : "calc(100vw - var(--scroll-width, 0px))",
              minWidth: "1360px",
              height:
                "calc(100vh - var(--header-height) - var(--footer-height) - var(--scroll-height, 0px))",
              backgroundColor: "#fafafa",

              "& .contents-wrap": {
                position: "relative",
                margin: "20px",
                height:
                  "calc(100% - var(--breadcrumb-height, 0px) - var(--deploy-height, 0px) - 40px)", // 40px: margin
                "& > section": {
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                },
              },
            },
            "& footer": {
              height: "var(--footer-height)",
              gridArea: "footer",
              borderTop: "1px solid #e0e0e0",
            },
            "& .MuiButton-root": {
              fontFamily:
                "Pretendard, -apple-system, Roboto, Arial, sans-serif",
            },
          }}
        >
          <Header />
          <Navigation className="navigation">
            <NavigationToggleButton
              isVisible={isNavVisible}
              onClick={() => setIsNavVisible(!isNavVisible)}
            />
          </Navigation>
          <main>
            <Breadcrumb />
            <Box className="contents-wrap" component="div">
              <div>{children}</div>
            </Box>
          </main>
          <Footer />
        </Box>
      </ThemeProvider>
    </LayoutProvider>
    </Suspense>
  );
}
