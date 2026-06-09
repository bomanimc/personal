/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

// import type { Metadata } from 'next'
import styled from "styled-components";
import { client } from "@/sanity/lib/client";
import {
  BIO_QUERY,
  COURSES_TAUGHT_QUERY,
  INTERVIEWS_QUERY,
  EXHIBITIONS_QUERY,
  SPEAKING_ENGAGEMENTS_QUERY,
  RESIDENCY_QUERY,
} from "@/sanity/lib/queries";
import PropTypes from "prop-types";
import { PortableText } from "@portabletext/react";
import { AboutCopy } from "../../constants";
import {
  ExternalLink,
  BasePage,
  Body,
  TextContent,
} from "../../components/CommonComponents";

export const metadata = {
  title: "Info",
};

const AboutSectionContainer = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(1, 1fr);
`;

const AboutBoxContent = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: white;
  padding: 6px;

  a,
  p {
    padding-bottom: 0px !important;
    margin-bottom: 2px;
  }
`;

const AboutBoxTitle = styled.div`
  background: white;
  color: black;
  padding: 6px;
  font-size: 12px;
  line-height: 6px;
  font-weight: bold;
  scroll-margin-top: 250px;
`;

const AboutDetail = styled(Body)`
  opacity: 0.5;
`;

const CVItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 16px;

  :last-child {
    margin-bottom: 0px;
  }
`;

const AboutPage = async () => {
  const bioPortableText = await client.fetch(BIO_QUERY);

  return (
    <div>
      <BasePage
        title="Info"
        body={
          <TextContent>
            <AboutSectionContainer>
              <BioContent bioPortableText={bioPortableText} />
              <EducationBox />
              <TeachingBox />
              <SpeakingBox />
              <InterviewsBox />
              <WritingBox />
              <ResidencyBox />
              <ExhibitionBox />
            </AboutSectionContainer>
          </TextContent>
        }
      />
    </div>
  );
};

const BioContent = ({ bioPortableText }) => {
  if (!bioPortableText) {
    return null;
  }

  return (
    <TextContent>
      <TextContent>
        <PortableText value={bioPortableText} />
      </TextContent>
    </TextContent>
  );
};

const EducationBox = () => (
  <div>
    <AboutBoxTitle id="education">Education</AboutBoxTitle>
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

const TeachingBox = async () => {
  const coursesTaught = await client.fetch(COURSES_TAUGHT_QUERY);

  return (
    <div>
      <AboutBoxTitle id="teaching">Teaching</AboutBoxTitle>
      <AboutBoxContent>
        <div>
          {coursesTaught.map((item) => (
            <TeachingItem
              key={item.name}
              name={item.name}
              link={item.url}
              institution={item.institution}
              program={item.program}
              format={item.format}
              date={item.date}
              location={item.location}
            />
          ))}
        </div>
      </AboutBoxContent>
    </div>
  );
};

const SpeakingBox = async () => {
  const speakingEngagements = await client.fetch(SPEAKING_ENGAGEMENTS_QUERY);

  return (
    <div>
      <AboutBoxTitle id="speaking">Speaking</AboutBoxTitle>
      <AboutBoxContent>
        <div>
          {speakingEngagements
            // TODO: Handle sorting at query level
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item) => (
              <SpeakingLink
                key={item.name}
                name={item.name}
                event={item.event}
                date={item.date}
                location={item.location}
                link={item.url}
                isNameTitle={item.isNameTitle}
              />
            ))}
        </div>
      </AboutBoxContent>
    </div>
  );
};

const WritingBox = () => (
  <div>
    <AboutBoxTitle id="writing">Writing</AboutBoxTitle>
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

const InterviewsBox = async () => {
  const interviews = await client.fetch(INTERVIEWS_QUERY);

  return (
    <div>
      <AboutBoxTitle id="interviews">Interviews</AboutBoxTitle>
      <AboutBoxContent>
        <div>
          {interviews
            // TODO: Handle sorting at query level
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item) => (
              <InterviewLink
                key={item.name}
                name={item.name}
                org={item.organization}
                date={item.date}
                location={item.location}
                link={item.url}
              />
            ))}
        </div>
      </AboutBoxContent>
    </div>
  );
};

const ResidencyBox = async () => {
  const residencies = await client.fetch(RESIDENCY_QUERY);

  return (
    <div>
      <AboutBoxTitle id="residencies">Residencies & Fellowships</AboutBoxTitle>
      <AboutBoxContent>
        <div>
          {residencies.map((item) => (
            <ResidencyItem
              key={`${item.organization}-${item.title}`}
              org={item.organization}
              date={item.date}
              role={item.role}
              url={item.url}
            />
          ))}
        </div>
      </AboutBoxContent>
    </div>
  );
};

const ExhibitionBox = async () => {
  const exhibitions = await client.fetch(EXHIBITIONS_QUERY);

  return (
    <div>
      <AboutBoxTitle id="exhibitions">Exhibitions & Showings</AboutBoxTitle>
      <AboutBoxContent>
        <div>
          {exhibitions
            // TODO: Handle sorting at query level
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item) => (
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
};

const EducationItem = ({ name, degree, startDate, endDate }) => (
  <CVItem>
    <p>{name}</p>
    <AboutDetail>{degree}</AboutDetail>
    <AboutDetail>
      {endDate ? `${startDate} - ${endDate}` : startDate}
    </AboutDetail>
  </CVItem>
);

const TeachingItem = ({
  name,
  link,
  institution,
  program,
  format,
  date,
  location,
}) => (
  <CVItem>
    {link !== undefined && link !== null ? (
      <ExternalLink
        href={link}
        key={name}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </ExternalLink>
    ) : (
      <p>{name}</p>
    )}
    <AboutDetail>{`${institution}, ${program}`}</AboutDetail>
    <AboutDetail>{format}</AboutDetail>
    <AboutDetail>{`${date}`}</AboutDetail>
    <AboutDetail>{location}</AboutDetail>
  </CVItem>
);

const SpeakingLink = ({ name, location, event, date, link, isNameTitle }) => {
  const formattedName = isNameTitle ? `"${name}"` : name;

  return (
    <CVItem>
      {link !== undefined && link !== null ? (
        <ExternalLink
          href={link}
          key={name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {formattedName}
        </ExternalLink>
      ) : (
        <p>{formattedName}</p>
      )}
      <AboutDetail>{`${event}, ${date}`}</AboutDetail>
      <AboutDetail>{location}</AboutDetail>
    </CVItem>
  );
};

const InterviewLink = ({ name, org, date, link, isNameTitle }) => {
  const formattedName = isNameTitle ? `"${name}"` : name;

  return (
    <CVItem>
      {link !== undefined && link !== null ? (
        <ExternalLink
          href={link}
          key={name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {formattedName}
        </ExternalLink>
      ) : (
        <p>{formattedName}</p>
      )}
      <AboutDetail>{`${org}, ${date}`}</AboutDetail>
    </CVItem>
  );
};

const WritingLink = ({ name, detail, link }) => (
  <CVItem>
    {link !== undefined && link !== null ? (
      <ExternalLink
        href={link}
        key={name}
        target="_blank"
        rel="noopener noreferrer"
      >{`"${name}"`}</ExternalLink>
    ) : (
      <p>{`"${name}"`}</p>
    )}
    <AboutDetail>{`${detail}`}</AboutDetail>
  </CVItem>
);

const ResidencyItem = ({ org, role, date, url }) => (
  <CVItem>
    {url !== undefined && url !== null ? (
        <ExternalLink
          href={url}
          key={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {org}
        </ExternalLink>
      ) : (
        <p>{org}</p>
      )}
    <AboutDetail>{role}</AboutDetail>
    <AboutDetail>{date}</AboutDetail>
  </CVItem>
);

const ExhibitionItem = ({ location, gallery, title, date }) => (
  <CVItem>
    <p>{title}</p>
    <AboutDetail>{gallery}</AboutDetail>
    <AboutDetail>{location}</AboutDetail>
    <AboutDetail>{date}</AboutDetail>
  </CVItem>
);

BioContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bioPortableText: PropTypes.object.isRequired,
};

EducationItem.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  degree: PropTypes.string.isRequired,
};

TeachingItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
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

ResidencyItem.propTypes = {
  org: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

ExhibitionItem.propTypes = {
  title: PropTypes.string.isRequired,
  gallery: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default AboutPage;
