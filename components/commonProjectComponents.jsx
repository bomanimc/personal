/* eslint react/forbid-prop-types: 0 */

'use client'

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { audioCodec } from "@cloudinary/url-gen/actions/transcode";
import { Helmet } from 'react-helmet';
import { MediaTypes } from '../constants';
import {
  ExternalLink,
  TextContent,
  Divider,
  Page,
  PageCenteringContainer,
  PageTitle,
  BodySection,
  MetadataSection,
  MetadataItem,
  MetadataTitle,
  MetadataContent,
} from './commonComponents';
import { setMetaTitleWithName } from '../utils/utils';
import theme from '../theme';

const myCld = new Cloudinary({ cloud: { cloudName: 'bomani-personal' } });

export const HiddenDivider = styled.div`
  margin: 48px 0px;
`;

export const ProjectPageImageContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const ProjectPageImage = styled(AdvancedImage)`
  border: 1px solid ${theme.color.blue};
  width: 100%;
`;

const BaseVideoContainer = styled.div`
  width: 100%;
  border: 1px solid ${theme.color.blue};
  margin-bottom: 16px;
`;

export const VideoWrapper = styled(BaseVideoContainer)`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ProjectVideoContainer = styled(BaseVideoContainer)`
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: auto;
    min-width: auto;
  }
`;

const ProjectVideo = styled(AdvancedVideo)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Metadata = ({
  year, tools, role, site,
}) => (
  <MetadataSection>
    <MetadataItem>
      <MetadataTitle>Year</MetadataTitle>
      <MetadataContent>{year}</MetadataContent>
    </MetadataItem>
    <MetadataItem>
      <MetadataTitle>Tools</MetadataTitle>
      <MetadataContent>{tools}</MetadataContent>
    </MetadataItem>
    <MetadataItem>
      <MetadataTitle>Role</MetadataTitle>
      <MetadataContent>{role}</MetadataContent>
    </MetadataItem>
    { site
      && (
      <MetadataItem>
        <MetadataTitle>External Site</MetadataTitle>
        <MetadataContent>
          <ExternalLink href={site} target="_blank" rel="noopener noreferrer">
            {site}
          </ExternalLink>
        </MetadataContent>
      </MetadataItem>
      )}
  </MetadataSection>
);

export const getProjectMedia = (projectData, showMainMedia) => {
  const { projectMedia } = projectData;
  return showMainMedia
    ? [
      {
        type: MediaTypes.image,
        src: projectData.media,
      },
    ].concat(projectMedia)
    : projectMedia;
};

export const BaseProjectPage = ({
  year, title, tools, role, site, body,
}) => (
  // TODO: Fix Layout
  <div>
    <Helmet>
      {setMetaTitleWithName(title)}
    </Helmet>
    <Page>
      <PageCenteringContainer>
        <PageTitle>{title}</PageTitle>
        <Metadata year={year} tools={tools} role={role} site={site} />
        <Divider />
        {body}
      </PageCenteringContainer>
    </Page>
  </div>
);

export const BaseBodyContent = ({ project, showMainMedia, customContent }) => {
  const mediaSection = getProjectMedia(project, showMainMedia).map((media) => {
    switch (media.type) {
      case MediaTypes.video: {
        const videoIframe = media.videoUrl.includes('vimeo')
          ? (
            <iframe
              src={`${media.videoUrl}?title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;autopause=0&amp;controls=0&amp;app_id=122963`}
              allow="autoplay; fullscreen"
              allowFullScreen=""
              title="Vimeo Video Player"
              data-ready="true"
              style={{ width: '100%', height: '100%' }}
              width="640"
              height="360"
              frameBorder="0"
            />
          )
          : (
            <iframe
              allowFullScreen="1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube Video Player"
              src={`${media.videoUrl}?autoplay=0&amp;mute=0&amp;controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1`}
              id="widget2"
              width="100%"
              height="100%"
              frameBorder="0"
            />
          );
        return (
          <VideoWrapper key={media.videoUrl}>
            {videoIframe}
          </VideoWrapper>
        );
      }
      case MediaTypes.image:
      default: {
        if (media.src.includes('video')) {
          const myVideo = myCld
            .video(media.src)
            .transcode(audioCodec("none"));

          return (
            <ProjectVideoContainer>
                <ProjectVideo
                  cldVid={myVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  secure
                />
              </ProjectVideoContainer>
          );
        } else {
          const img = myCld
            .image(media.src)
            .quality('auto:best')
            .format('auto');

          return (
            <ProjectPageImageContainer key={media.src}>
                <ProjectPageImage
                  cldImg={img}
                  secure
                />
              </ProjectPageImageContainer>
          );
        }
      }
    }
  });

  const content = customContent || project.body;

  return (
    <BodySection>
      <TextContent>{content}</TextContent>
      <HiddenDivider />
      {mediaSection}
    </BodySection>
  );
};

Metadata.propTypes = {
  year: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  site: PropTypes.string,
};

BaseProjectPage.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  tools: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  site: PropTypes.string,
};

BaseBodyContent.propTypes = {
  customContent: PropTypes.node,
  project: PropTypes.object.isRequired,
  showMainMedia: PropTypes.bool,
};

BaseBodyContent.defaultProps = {
  customContent: null,
  showMainMedia: true,
};

BaseProjectPage.defaultProps = {
  site: null,
};

Metadata.defaultProps = {
  site: null,
};
