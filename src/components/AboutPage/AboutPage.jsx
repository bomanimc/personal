/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LinksBar from '../partials/LinksBar';
import { Link, TextContent, BasePage, BodySection } from '../commonComponents';
import { SocialLinks, NavLinks } from '../../constants';

const AboutSectionContainer = styled.div`
  display: grid;
  grid-gap: ${GRID_GAP_VALUE};
  grid-template-columns: repeat(1, 1fr);
`;

const AboutBoxContent = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: dashed;
  border-color: white;
  padding: 6px;
  max-width: 500px;
`;

const AboutBoxTitle = styled.div`
  background: white;
  color: black;
  padding: 6px;
  font-size: 12px;
  line-height: 6px;
  font-weight: bold;
`;

const AboutDetail = Body.extend`
  opacity: 0.5;
`;

const SpeakingLinkItem = styled.div`
  margin-bottom: 16px;

  :last-child {
    margin-bottom: 0px;
  }
`;

const AboutPage = () => (
  <div id="root">
    <LinksBar links={NavLinks} />
    <BasePage
      title={'About'}
      body={
        <BodySection>
          <TextContent>
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
          </TextContent>
          <div>
            <AboutBoxTitle>Writing</AboutBoxTitle>
            <AboutBoxContent>
              <div>{writingLinks}</div>
            </AboutBoxContent>
          </div>
          <div>
            <AboutBoxTitle>Speaking</AboutBoxTitle>
            <AboutBoxContent>
              <div>{speakingLinks}</div>
            </AboutBoxContent>
          </div>
        </BodySection>
      }
    />
    <LinksBar links={SocialLinks} />
  </div>
);

const SpeakingLink = ({ name, location, event, date, link }) => (
  <SpeakingLinkItem>
    {
      link !== undefined && link !== null
      ? <Link href={link} key={name}>{`"${name}"`}</Link>
      : `"${name}"`
    }
    <AboutDetail>{`${event}, ${date}`}</AboutDetail>
    <AboutDetail>{location}</AboutDetail>
  </SpeakingLinkItem>
);

const WritingLink = ({ name, date, link }) => (
  <SpeakingLinkItem>
    {
      link !== undefined && link !== null
      ? <Link href={link} key={name}>{`"${name}"`}</Link>
      : `"${name}"`
    }
    <AboutDetail>{`${date}`}</AboutDetail>
  </SpeakingLinkItem>
);

SpeakingLink.propTypes = {
  name: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

WritingLink.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default AboutPage;
