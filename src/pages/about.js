/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';
import Layout from "../components/layout"
import { AboutCopy } from '../constants';
import {
  ExternalLink,
  BasePage,
  Body,
  TextContent,
  BodySection,
  MetadataSection,
  MetadataItem,
  MetadataTitle,
  MetadataContent,
} from '../components/commonComponents';

const GRID_GAP_VALUE = '36px';

const AboutRoot = styled.div`
  margin-top: 48px;
`;

const AboutSectionContainer = styled.div`
  display: grid;
  grid-gap: ${GRID_GAP_VALUE};
  grid-template-columns: repeat(1, 1fr);
`;

const AboutBoxContent = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
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

const AboutDetail = styled(Body)`
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
  <Layout>
    <AboutRoot>
      <BasePage
        title="About"
        body={(
          <BodySection>
            <AboutSectionContainer>
              <BioContent />
              <EducationBox />
              <SpeakingBox />
              <WritingBox />
              <FellowshipBox />
            </AboutSectionContainer>
          </BodySection>
        )}
      />
    </AboutRoot>
  </Layout>
);

const BioContent = () => (
  <BodySection>
    <TextContent>
      Bomani Oseni McClendon is an engineer living in Brooklyn, NY.
      <br />
      <br />
      Bomani studies the ways that Black health outcomes are influenced by a history of scientific racism, examining his own proximity to techno-solutionist monocultures and the medical industry as a starting point. By exploring the shortcomings of scientific practice, Bomani hopes to highlight the validity of other ways of knowing.
      <br />
      <br />
      Bomani has been a member of the Bay Area-based [Foldhaus Art Collective](https://www.foldhaus.com) since 2016 and is a founding member of [Dial Up](http://dialupstuff.com/), a Chicago-based creative collective established in 2014 focused on music, film, design, and technology. He was also a member of the Spring 2019 immersive cohort at [School for Poetic Computation](https://sfpc.io/).
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
            key={item.name}
            name={item.name}
            startDate={item.startDate}
            endDate={item.endDate}
            degree={item.degree}
          />
        ))}
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
            key={item.name}
            name={item.name}
            event={item.event}
            date={item.date}
            location={item.location}
            link={item.link}
            isNameTitle={item.isNameTitle}
          />
        ))}
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
            key={item.name}
            name={item.name}
            date={item.date}
            link={item.link}
          />
        ))}
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
            key={item.org}
            org={item.org}
            startDate={item.startDate}
            endDate={item.endDate}
            title={item.title}
          />
        ))}
      </div>
    </AboutBoxContent>
  </div>
);

const EducationItem = ({
  name, degree, startDate, endDate,
}) => (
  <SpeakingLinkItem>
    {name}
    <AboutDetail>{degree}</AboutDetail>
    <AboutDetail>{`${startDate} - ${endDate}`}</AboutDetail>
  </SpeakingLinkItem>
);

const SpeakingLink = ({
  name, location, event, date, link, isNameTitle,
}) => {
  const formattedName = isNameTitle ? `"${name}"` : name;

  return (
    <SpeakingLinkItem>
      {
        link !== undefined && link !== null
          ? <ExternalLink href={link} key={name}>{formattedName}</ExternalLink>
          : formattedName
      }
      <AboutDetail>{`${event}, ${date}`}</AboutDetail>
      <AboutDetail>{location}</AboutDetail>
    </SpeakingLinkItem>
  );
};

const WritingLink = ({ name, date, link }) => (
  <SpeakingLinkItem>
    {
      link !== undefined && link !== null
        ? <ExternalLink href={link} key={name}>{`"${name}"`}</ExternalLink>
        : `"${name}"`
    }
    <AboutDetail>{`${date}`}</AboutDetail>
  </SpeakingLinkItem>
);

const FellowshipItem = ({
  org, title, startDate, endDate,
}) => (
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
  link: PropTypes.string,
  isNameTitle: PropTypes.bool,
};

SpeakingLink.defaultProps = {
  link: null,
  isNameTitle: true,
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

export default AboutPage;
