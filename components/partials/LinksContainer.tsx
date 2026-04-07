"use client"

import styled from "styled-components";

import useShouldHideHeaderFooter from '@/hooks/useShouldHideHeaderFooter';

const Container = styled.div`
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LinksContainer = ({children}: {children: React.ReactNode}) => {
 const shouldHide = useShouldHideHeaderFooter();
  if (shouldHide) {
    return;
  }

  return <Container>{children}</Container>;
};

export default LinksContainer;
