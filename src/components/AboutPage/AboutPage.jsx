/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import LinksBar from '../partials/LinksBar';
import { Link, TextContent } from '../commonComponents';
import { SocialLinks, NavLinks } from '../../constants';

const Section = styled.section`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  height: ${props => props.sectionHeight};
  min-height: ${props => props.minHeight};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  justify-content: space-between;
  margin-left: ${props => props.marginHorizontal ? props.marginHorizontal : '0px'};
  margin-right: ${props => props.marginHorizontal ? props.marginHorizontal : '0px'};
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.horizontalCenter ? 'center' : 'normal'};
  justify-content: ${props => props.verticalCenter ? 'center' : 'normal'};
  height: ${props => props.containerHeight ? props.containerHeight : '100%'};
  margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
`;

const Introduction = ContentContainer.extend`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Outro = Introduction.extend`
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AboutPage = () => (
  <div id="root">
    <LinksBar links={NavLinks} />
    <OutroSection />
    <LinksBar links={SocialLinks} />
  </div>
);

const OutroSection = () => (
  <Section
    bgColor="black"
    textColor="white"
    align="center"
    sectionHeight="100vh"
    minHeight="600px"
    marginHorizontal="20px"
  >
    <Outro horizontalCenter verticalCenter>
      <TextContent>
        During the day, Bomani works on news products at Facebook.
        He has previously interned at IDEO, Grubhub, and Boeing.
        <br />
        <br />
        Bomani has conducted HCI & Learning Sciences research
        with <Link href="http://delta.northwestern.edu/">Delta Lab</Link>, and
        has contributed to journalism innovation projects as a Fellow
        at <Link href="https://knightlab.northwestern.edu/">Knight Lab</Link>.
        <br />
        <br />
        <br />
        See his full resume <Link href="/resume">here</Link>.
      </TextContent>
    </Outro>
  </Section>
);

export default AboutPage;
