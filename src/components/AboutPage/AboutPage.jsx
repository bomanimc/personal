/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';
import LinksBar from '../partials/LinksBar';
import { SocialLinks, NavLinks, AboutCopy } from '../../constants';
import {
  Link,
  BasePage,
  Body,
  TextContent,
  BodySection,
  MetadataSection,
  MetadataItem,
  MetadataTitle,
  MetadataContent,
} from '../commonComponents';

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

const Metadata = ({ location, links }) => (
  <MetadataSection>
    <MetadataItem>
      <MetadataTitle>Location</MetadataTitle>
      <MetadataContent><ReactMarkdown source={location} /></MetadataContent>
    </MetadataItem>
    <MetadataItem>
      <MetadataTitle>Links</MetadataTitle>
      <MetadataContent><ReactMarkdown source={links} /></MetadataContent>
    </MetadataItem>
  </MetadataSection>
);

const AboutPage = () => (
  <div id="root">
    <LinksBar links={NavLinks} />
    <BasePage
      title={'About'}
      body={
        <BodySection>
          <AboutSectionContainer>
            <BioContent />
            <EducationBox />
            <SpeakingBox />
            <WritingBox />
            <FellowshipBox />
          </AboutSectionContainer>
        </BodySection>
      }
    />
    <LinksBar links={SocialLinks} />
  </div>
);

const BioContent = () => (
  <BodySection>
    <TextContent>
      Bomani Oseni McClendon is a Brooklyn-based engineer and research-based artist.
      <br /><br />
      Through his art practice, Bomani explores the way that Black health outcomes
      are influenced by a history of scientific racism. As an engineer, he focuses
      on building software interfaces and prototypes that explore new possibilities
      for information creation or discovery. Bomani aspires to make work that honors
      articulations of pain while simultaneously instilling hope that we have the power
      and goodness to create a more positive future.
      <br /><br />
      Bomani studied Computer Science at Northwestern University, where he focused
      on Human-Computer Interaction, Learning Sciences, and storytelling tools for
      journalism. He was also a member of the Spring 2019 cohort at School for Poetic
    Computation in West Village, NY.
    </TextContent>
  </BodySection>
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

const FellowshipBox = () => (
  <div>
    <AboutBoxTitle>Fellowships</AboutBoxTitle>
    <AboutBoxContent>
      <div>
        {AboutCopy.fellowships.map(item => (
          <FellowshipItem
            org={item.org}
            startDate={item.startDate}
            endDate={item.endDate}
            title={item.title}
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

const FellowshipItem = ({ org, title, startDate, endDate }) => (
  <SpeakingLinkItem>
    {org}
    <AboutDetail>{title}</AboutDetail>
    <AboutDetail>{`${startDate} - ${endDate}`}</AboutDetail>
  </SpeakingLinkItem>
);

Metadata.propTypes = {
  location: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
};

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

FellowshipItem.propTypes = {
  org: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

BioContent.propTypes = {
  bioContentPath: PropTypes.string,
};

export default AboutPage;
