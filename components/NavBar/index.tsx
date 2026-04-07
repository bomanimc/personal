"use client"

import useShouldShowNavOrFooter from '@/hooks/useShouldShowNavOrFooter';
import { InternalLink } from '../CommonComponents';
import styles from "./navbar.module.scss";

const NavBar = () => {
  const {shouldShowNav} = useShouldShowNavOrFooter();
  if (!shouldShowNav) {
    return;
  }

  return (
    <>
      <nav className={styles.navContainer}>
        <InternalLink className={styles.name} href="/">Bomani</InternalLink>
        <div className={styles.linksRow}>
          <InternalLink className={styles.navLink} href="/">Work</InternalLink>
          <InternalLink className={styles.navLink} href="/info">Info</InternalLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
