/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';
import { Link, Body, TextContent } from '../commonComponents';

const PROJECT_PAGE_WIDTH = '1000px';

export const ProjectPage = styled.div`
  margin: 48px;
  display: flex;
  justify-content: center;

  @media (max-width: ${PROJECT_PAGE_WIDTH}) {
    margin: 20px;
  }
`;

export const ProjectCenteringContainer = styled.div`
  width: ${PROJECT_PAGE_WIDTH};

  @media (max-width: ${PROJECT_PAGE_WIDTH}) {
    width: 100%;
  }
`;

export const BackButton = styled.span`
  font-weight: bold;
`;

export const ProjectPageTitle = styled.p`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 16px;
`;

export const MetadataSection = styled.div`
  display: flex;
  margin-top: 16px;

  @media (max-width: ${PROJECT_PAGE_WIDTH}) {
    flex-direction: column;
  }
`;

export const MetadataItem = styled.div`
  margin-right: 48px;
  width: 300px;

  @media (max-width: ${PROJECT_PAGE_WIDTH}) {
    width: 100%;
    margin-bottom: 16px;

    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const MetadataTitle = Body.extend`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const MetadataContent = TextContent.extend``;

export const Divider = styled.div`
  width: 200px;
  border-top: 1px dashed white;
  margin: 48px 0px;
`;

export const HiddenDivider = styled.div`
  margin: 48px 0px;
`;

export const BodySection = Body.extend``;

export const ProjectPageImage = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const ProjectPageImageSource = styled.img`
  border: 1px solid white;
  width: 100%;
`;

const Metadata = ({ tools, role, site }) => (
  <MetadataSection>
    <MetadataItem>
      <MetadataTitle>Tools</MetadataTitle>
      <MetadataContent><ReactMarkdown source={tools} /></MetadataContent>
    </MetadataItem>
    <MetadataItem>
      <MetadataTitle>Role</MetadataTitle>
      <MetadataContent><ReactMarkdown source={role} /></MetadataContent>
    </MetadataItem>
    { site &&
      <MetadataItem>
        <MetadataTitle>External Site</MetadataTitle>
        <MetadataContent>
          <Link href={site}>{site}</Link>
        </MetadataContent>
      </MetadataItem>
    }
  </MetadataSection>
);

export const getProjectImages = projectData => [projectData.media].concat(
  projectData.images.map(image => image.src),
);

export const BaseProjectPage = ({ title, tools, role, site, body }) => (
  <ProjectPage>
    <ProjectCenteringContainer>
      <BackButton><Link href="/">Back</Link></BackButton>
      <ProjectPageTitle>{title}</ProjectPageTitle>
      <Metadata tools={tools} role={role} site={site} />
      <Divider />
      {body}
    </ProjectCenteringContainer>
  </ProjectPage>
);

export class BaseBodyContent extends React.Component {
  constructor() {
    super();

    this.state = {
      introContent: null,
    };
  }

  componentWillMount() {
    fetch(this.props.introContentPath).then(response => response.text()).then(text =>
      this.setState({ introContent: text }),
    );
  }

  render() {
    const { project } = this.props;
    const { introContent } = this.state;
    return (
      <BodySection>
        <TextContent>
          <ReactMarkdown source={introContent} escapeHtml={false} />
        </TextContent>
        <HiddenDivider />
        {
          getProjectImages(project).map(image => (
            <ProjectPageImage key={image}>
              <ProjectPageImageSource src={image} />
            </ProjectPageImage>
          ))
        }
      </BodySection>
    );
  }
}

Metadata.propTypes = {
  tools: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
};

BaseProjectPage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  tools: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
};

BaseBodyContent.propTypes = {
  introContentPath: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired,
};
