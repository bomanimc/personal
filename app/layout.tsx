import type { Metadata } from "next";
import localFont from 'next/font/local'
import styled, { ThemeProvider } from 'styled-components';
import "./globals.css";
import NavBar from '../components/NavBar';
import LinksBar from '../components/partials/LinksBar';
import { SocialLinks } from '../constants';
import theme from '../theme';
import { openGraph } from "./shared-metadata";
import StyledComponentsRegistry from '../lib/registry'

// Font files can be colocated inside of `app`
const breweryFont = localFont({
  src: [
    {
      path: '../fonts/LinotypeBrewery-Regular/LinotypeBrewery-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/LinotypeBrewery-Heavy/LinotypeBrewery-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: "--font-brewery",
})

const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-content: center;
  flex-direction: column;
  padding: 0 3rem;

  @media screen and (max-width: ${theme.breakPoints}) {
    padding: 0 1rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex: 1;
`;

export const metadata: Metadata = {
  title: 'BOMANI',
  description: 'Bomani Oseni McClendon is an engineer living in Brooklyn, NY.',
  openGraph: {
    ...openGraph,
  },
  twitter: {
    creator: '@bxmani',
    site: 'bomani.rip',
  }, 
  verification: {
    google: 'oUOz_91m_HgyQz1q_kErpkk03-qUN-OS1Wh8once9gg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showTitleNav = true;
  const showLinksBar = true;

  return (
    // TODO: Fix themeing approach
    <ThemeProvider theme={theme}>
      <html lang="en" className={breweryFont.className}>
        <body>
          <BaseWrapper>
          {showTitleNav && <NavBar />}
          <Main>
            <ContentWrapper>{children}</ContentWrapper>
          </Main>
          {showLinksBar && <LinksBar links={SocialLinks} />}
        </BaseWrapper>
        </body>
      </html>
    </ThemeProvider>
  );
}
