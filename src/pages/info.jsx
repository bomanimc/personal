/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';
import Layout from '../components/layout';
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
import { Text } from '../components/slices';

const GRID_GAP_VALUE = '3rem';

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

export const query = graphql`
  {
    prismic {
      allBios {
        edges {
          node {
            text
          }
        }
      }
    }
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

const AboutPage = (props) => {
  // Required check for no data being returned
  // eslint-disable-next-line react/prop-types
  const { data } = props;
  // eslint-disable-next-line react/prop-types
  const doc = data.prismic.allBios.edges.slice(0, 1).pop();

  return (
    <Layout>
      <BasePage
        title="Info"
        body={(
          <BodySection>
            <AboutSectionContainer>
              <BioContent allBiosEdgeDoc={doc} />
              <EducationBox />
              <SpeakingBox />
              <InterviewsBox />
              <WritingBox />
              <FellowshipBox />
              <ExhibitionBox />
            </AboutSectionContainer>
          </BodySection>
        )}
      />
    </Layout>
  );
};

const BioContent = ({ allBiosEdgeDoc }) => {
  if (!allBiosEdgeDoc) {
    return null;
  }

  return (
    <BodySection>
      <TextContent>
        <Text slice={allBiosEdgeDoc.node.text} />
      </TextContent>
    </BodySection>
  );
};

const EducationBox = () => (
  <div>
    <AboutBoxTitle>Education</AboutBoxTitle>
    <AboutBoxContent>
      <div>
        {AboutCopy.education.map((item) => (
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
        {AboutCopy.speaking.map((item) => (
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
        {AboutCopy.writing.map((item) => (
          <WritingLink
            key={item.name}
            name={item.name}
            detail={item.date}
            link={item.link}
          />
        ))}
      </div>
    </AboutBoxContent>
  </div>
);

// name, location, org, date, link, isNameTitle,
const InterviewsBox = () => (
  <div>
    <AboutBoxTitle>Interviews</AboutBoxTitle>
    <AboutBoxContent>
      <div>
        {AboutCopy.interviews.map((item) => (
          <InterviewLink
            key={item.name}
            name={item.name}
            org={item.org}
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

const FellowshipBox = () => (
  <div>
    <AboutBoxTitle>Fellowships & Residencies</AboutBoxTitle>
    <AboutBoxContent>
      <div>
        {AboutCopy.fellowships.map((item) => (
          <FellowshipItem
            key={item.org}
            org={item.org}
            date={item.date}
            title={item.title}
          />
        ))}
      </div>
    </AboutBoxContent>
  </div>
);

const ExhibitionBox = () => (
  <div>
    <AboutBoxTitle>Exhibitions & Showings</AboutBoxTitle>
    <AboutBoxContent>
      <div>
        {AboutCopy.exhibitions.map((item) => (
          <ExhibitionItem
            key={item.title}
            title={item.title}
            gallery={item.gallery}
            location={item.location}
            date={item.date}
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
    <AboutDetail>{endDate ? `${startDate} - ${endDate}` : startDate}</AboutDetail>
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

const InterviewLink = ({
  name, org, date, link, isNameTitle,
}) => {
  const formattedName = isNameTitle ? `"${name}"` : name;

  return (
    <SpeakingLinkItem>
      {
        link !== undefined && link !== null
          ? <ExternalLink href={link} key={name}>{formattedName}</ExternalLink>
          : formattedName
      }
      <AboutDetail>{`${org}, ${date}`}</AboutDetail>
    </SpeakingLinkItem>
  );
};

const WritingLink = ({ name, detail, link }) => (
  <SpeakingLinkItem>
    {
      link !== undefined && link !== null
        ? <ExternalLink href={link} key={name}>{`"${name}"`}</ExternalLink>
        : `"${name}"`
    }
    <AboutDetail>{`${detail}`}</AboutDetail>
  </SpeakingLinkItem>
);

const FellowshipItem = ({
  org, title, date,
}) => (
  <SpeakingLinkItem>
    {org}
    <AboutDetail>{title}</AboutDetail>
    <AboutDetail>{date}</AboutDetail>
  </SpeakingLinkItem>
);

const ExhibitionItem = ({
  location, gallery, title, date,
}) => (
  <SpeakingLinkItem>
    {title}
    <AboutDetail>{gallery}</AboutDetail>
    <AboutDetail>{location}</AboutDetail>
    <AboutDetail>{date}</AboutDetail>
  </SpeakingLinkItem>
);

Metadata.propTypes = {
  location: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
};

BioContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  allBiosEdgeDoc: PropTypes.object.isRequired,
};

EducationItem.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
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

InterviewLink.propTypes = {
  name: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string,
  isNameTitle: PropTypes.bool,
};

SpeakingLink.defaultProps = {
  link: null,
  isNameTitle: true,
};

InterviewLink.defaultProps = {
  link: null,
  isNameTitle: false,
};

EducationItem.defaultProps = {
  endDate: null,
};

WritingLink.propTypes = {
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

FellowshipItem.propTypes = {
  org: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ExhibitionItem.propTypes = {
  title: PropTypes.string.isRequired,
  gallery: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default AboutPage;
