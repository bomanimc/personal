import { usePathname } from "next/navigation";

const NAV_FOOTER_OVERRIDES_BY_ROUTE: Record<string, Record<string, boolean>> = {
  "/experiments/vasoconstriction": {
    shouldShowNav: false,
    shouldShowFooter: false,
  },
  "/experiments/forces": {
    shouldShowNav: false,
    shouldShowFooter: false,
  },
  "/experiments/return-of-spontaneous-circulation": {
    shouldShowNav: true,
    shouldShowFooter: false,
  },
};

export default function useShouldShowNavOrFooter() {
    const pathname = usePathname();
    console.log(pathname);
    return {...NAV_FOOTER_OVERRIDES_BY_ROUTE[pathname]};
};
