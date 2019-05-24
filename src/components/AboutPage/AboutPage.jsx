/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LinksBar from '../partials/LinksBar';
import { Link, TextContent, BasePage, Body, BodySection } from '../commonComponents';
import { SocialLinks, NavLinks, AboutCopy } from '../../constants';

const GRID_GAP_VALUE = '36px';

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
          <AboutSectionContainer>
            <EducationBox />
            <SpeakingBox />
            <WritingBox />
          </AboutSectionContainer>
        </BodySection>
      }
    />
    <LinksBar links={SocialLinks} />
  </div>
);

const EducationBox = () => (
  <div>
    <AboutBoxTitle>Education</AboutBoxTitle>
    <AboutBoxContent>
      <div>
        {AboutCopy.education.map(item => (
          <EducationItem
            name={item.name}
            startDate={item.startDate}
            endDate={item.endDate}
            degree={item.degree}
          />),
        )}
      </div>
    </AboutBoxContent>
  </div>
);

const SpeakingBox = () => (
  <div>
    <AboutBoxTitle>Speaking</AboutBoxTitle>
    <AboutBoxContent>
      <div>
        {AboutCopy.speaking.map(item => (
          <SpeakingLink
            name={item.name}
            event={item.event}
            date={item.date}
            location={item.location}
            link={item.link}
          />),
        )}
      </div>
    </AboutBoxContent>
  </div>
);

const WritingBox = () => (
  <div>
    <AboutBoxTitle>Writing</AboutBoxTitle>
    <AboutBoxContent>
      <div>
        {AboutCopy.writing.map(item => (
          <WritingLink
            name={item.name}
            date={item.date}
            link={item.link}
          />),
        )}
      </div>
    </AboutBoxContent>
  </div>
);

const EducationItem = ({ name, degree, startDate, endDate }) => (
  <SpeakingLinkItem>
    {name}
    <AboutDetail>{degree}</AboutDetail>
    <AboutDetail>{`${startDate} - ${endDate}`}</AboutDetail>
  </SpeakingLinkItem>
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

EducationItem.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
};

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
