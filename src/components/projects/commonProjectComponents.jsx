/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import ReactMarkdown from 'react-markdown/with-html';
import { Helmet } from 'react-helmet';
import { Link, Body, TextContent, Divider, Page, PageCenteringContainer, PageTitle, PAGE_WIDTH } from '../commonComponents';
import { MediaTypes } from '../../constants';

export const BackButton = Link.extend`
  font-weight: bold;
`;

export const MetadataSection = styled.div`
  display: flex;
  margin-top: 16px;

  @media (max-width: ${PAGE_WIDTH}) {
    flex-direction: column;
  }
`;

export const MetadataItem = styled.div`
  margin-right: 48px;
  width: 300px;

  @media (max-width: ${PAGE_WIDTH}) {
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

export const HiddenDivider = styled.div`
  margin: 48px 0px;
`;

export const BodySection = TextContent.extend``;

export const ProjectPageImage = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const ProjectPageImageSource = styled.img`
  border: 1px solid white;
  width: 100%;
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: white;
  width: 100%;
  margin-bottom: 16px;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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

export const getProjectMedia = (projectData, showMainMedia) => {
  const projectMedia = projectData.projectMedia;
  return showMainMedia
    ? [
      {
        type: MediaTypes.image,
        src: projectData.media,
      },
    ].concat(projectMedia)
    : projectMedia;
};

export const BaseProjectPage = ({ id, title, tools, role, site, body }) => (
  <div>
    <Helmet>
      <title>{`${title} – BOMANI`}</title>
    </Helmet>
    <Page>
      <PageCenteringContainer>
        <BackButton href={`/#${id}`}>Back</BackButton>
        <PageTitle>{title}</PageTitle>
        <Metadata tools={tools} role={role} site={site} />
        <Divider />
        {body}
      </PageCenteringContainer>
    </Page>
  </div>
);

export class BaseBodyContent extends React.Component {
  constructor() {
    super();

    this.state = {
      introContent: null,
    };
  }

  componentWillMount() {
    const { introContentPath, project } = this.props;
    if (introContentPath === null || introContentPath === undefined) {
      this.setState({ introContent: project.body });
      return;
    }

    fetch(introContentPath).then(response => response.text()).then(text =>
      this.setState({ introContent: text }),
    );
  }

  render() {
    const { project, showMainMedia } = this.props;
    const { introContent } = this.state;

    const mediaSection = getProjectMedia(project, showMainMedia).map((media) => {
      switch (media.type) {
        case MediaTypes.video:
          return (
            <VideoWrapper key={media.videoUrl}>
              <ReactPlayer url={media.videoUrl} />
            </VideoWrapper>
          );
        case MediaTypes.image:
        default:
          return (
            <ProjectPageImage key={media.src}>
              <ProjectPageImageSource src={media.src} />
            </ProjectPageImage>
          );
      }
    });

    return (
      <BodySection>
        <TextContent>
          <ReactMarkdown source={introContent} escapeHtml={false} />
        </TextContent>
        <HiddenDivider />
        {mediaSection}
      </BodySection>
    );
  }
}

Metadata.propTypes = {
  tools: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  site: PropTypes.string,
};

BaseProjectPage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  tools: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  site: PropTypes.string,
};

BaseBodyContent.propTypes = {
  introContentPath: PropTypes.string,
  project: PropTypes.object.isRequired,
  showMainMedia: PropTypes.boolean,
};

BaseBodyContent.defaultProps = {
  introContentPath: null,
  showMainMedia: true,
};

BaseProjectPage.defaultProps = {
  site: null,
};

Metadata.defaultProps = {
  site: null,
};
