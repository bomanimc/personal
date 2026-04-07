"use client"

import styled from "styled-components";

import useShouldShowNavOrFooter from '@/hooks/useShouldShowNavOrFooter';

const Container = styled.div`
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LinksContainer = ({children}: {children: React.ReactNode}) => {
 const {shouldShowFooter} = useShouldShowNavOrFooter();
  if (!shouldShowFooter) {
    return;
  }

  return <Container>{children}</Container>;
};

export default LinksContainer;
