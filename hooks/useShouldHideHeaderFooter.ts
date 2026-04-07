import { usePathname } from "next/navigation";

const ROUTES_WITH_HIDDEN_NAVS = [
  "experiments"
];

export default function useShouldHideHeaderFooter() {
    const pathname = usePathname();
    const primaryRoute = pathname.split('/').filter(Boolean)[0];
    return ROUTES_WITH_HIDDEN_NAVS.includes(primaryRoute);
};
