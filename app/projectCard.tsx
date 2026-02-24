'use client'

import styled from 'styled-components';
import { Cloudinary } from '@cloudinary/url-gen';
import type { Project } from '@/sanity.types'
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { InternalLink } from '../components/CommonComponents';
import { limitFit } from "@cloudinary/url-gen/actions/resize";
import { audioCodec } from "@cloudinary/url-gen/actions/transcode";
import theme from '../theme';

const TRANSITION_TIME = '.75s';
const myCld = new Cloudinary({ cloud: { cloudName: 'bomani-personal' } });

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  flex-wrap: nowrap;
  transition: box-shadow ${TRANSITION_TIME} ease;
  border: 2px solid #ffffff30;

  @media (hover: hover) {
    &:hover {
      box-shadow: 3px 3px 3px ${theme.color.blue};
    }
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const ProjectMediaContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter ${TRANSITION_TIME} ease;
  color: black;
`;

const ProjectDetailsWrapper = styled.div`
  padding-top: 66.5%;
  overflow: hidden;
  position: relative;
  z-index: -1;
`;

const ProjectImage = styled(AdvancedImage)`
  width: 100%;
  height: 100%;
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

interface Props {
  projectId: string;
  title: Project['title'];
  media: Project['primaryMedia'];
}

const Project = ({ projectId, title, media }: Props) => {
  const mediaAsset = (() => {
    // TODO: Clean up media naming
    if (media.includes("video")) {
      const myVideo = myCld
        .video(media)
        .transcode(audioCodec("none"));

      return (
        <ProjectVideo
          cldVid={myVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }
    else {
      const img = myCld
        .image(media)
        .resize(limitFit().height(630))
        .quality('auto')
        .format('auto');
      
      return (
        <ProjectImage
          cldImg={img}
          order={1}
          alt={title}
        />
      );
    }
  })();

  return (
    <ProjectContainer>
      <InternalLink href={`/${projectId}`}>
        <ProjectDetailsWrapper>
          <ProjectMediaContainer>
            {mediaAsset}
          </ProjectMediaContainer>
        </ProjectDetailsWrapper>
      </InternalLink>
    </ProjectContainer>
  );
};

export default Project;
