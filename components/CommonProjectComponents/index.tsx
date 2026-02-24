/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint react/forbid-prop-types: 0 */

'use client'

import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { audioCodec } from "@cloudinary/url-gen/actions/transcode";
import type { Project } from '@/sanity.types'

import { MediaTypes } from '../../constants';
import {
  ExternalLink,
  TextContent,
  Divider,
  Page,
  PageCenteringContainer,
  PageTitle,
  MetadataSection,
  MetadataItem,
  MetadataTitle,
} from '../CommonComponents';
import styles from "./commonProjectComponents.module.scss";

const myCld = new Cloudinary({ cloud: { cloudName: 'bomani-personal' } });

interface MetadataProps {
  year: string;
  tools: string;
  role: string;
  site?: string;
};

const Metadata = ({
  year, tools, role, site,
}: MetadataProps) => (
  <MetadataSection>
    <MetadataItem>
      <MetadataTitle>Year</MetadataTitle>
      <TextContent>{year}</TextContent>
    </MetadataItem>
    <MetadataItem>
      <MetadataTitle>Tools</MetadataTitle>
      <TextContent>{tools}</TextContent>
    </MetadataItem>
    <MetadataItem>
      <MetadataTitle>Role</MetadataTitle>
      <TextContent>{role}</TextContent>
    </MetadataItem>
    { site
      && (
      <MetadataItem>
        <MetadataTitle>External Site</MetadataTitle>
        <TextContent>
          <ExternalLink href={site} target="_blank" rel="noopener noreferrer">
            {site}
          </ExternalLink>
        </TextContent>
      </MetadataItem>
      )}
  </MetadataSection>
);

export const getProjectMedia = (projectData: any, showMainMedia: boolean) => {
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


interface BaseProjectPageProps {
  year: string;
  title: string;
  body: React.ReactNode;
  tools: string;
  role: string;
  site?: string,
};

export const BaseProjectPage = ({
  year, title, tools, role, site, body,
}: BaseProjectPageProps) => (
  // TODO: Fix Layout
  <div>
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


interface BaseBodyContentProps {
  content?: React.ReactNode;
  media?: Project['otherMedia']
};

export const BaseBodyContent = ({ media, content }: BaseBodyContentProps) => {
  const mediaSection = (media ?? []).map((mediaItem) => {
    console.log(mediaItem);
    switch (mediaItem._type) {
      case "video": {
        const videoIframe = mediaItem.url?.includes('vimeo')
          ? (
            <iframe
              src={`${mediaItem.url}?title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;autopause=0&amp;controls=0&amp;app_id=122963`}
              allow="autoplay; fullscreen"
              allowFullScreen={true}
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
              allowFullScreen={true}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube Video Player"
              src={`${mediaItem.url}?autoplay=0&amp;mute=0&amp;controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1`}
              id="widget2"
              width="100%"
              height="100%"
              frameBorder="0"
            />
          );
        return (
          <div className={styles.videoWrapper} key={mediaItem.url}>
            {videoIframe}
          </div>
        );
      }
      case "cloudinaryImage":
      default: {
        if (mediaItem.cloudinaryKey?.includes('video')) {
          const myVideo = myCld
            .video(mediaItem.cloudinaryKey)
            .transcode(audioCodec("none"));

          return (
            <div className={styles.projectVideoContainer}>
                <AdvancedVideo
                  className={styles.projectPageVideo}
                  cldVid={myVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
          );
        } else {
          const img = myCld
            .image(mediaItem.cloudinaryKey)
            .quality('auto:best')
            .format('auto');

          return (
            <div className={styles.projectPageImageContainer} key={mediaItem.cloudinaryKey}>
              <AdvancedImage
                className={styles.projectPageImage}
                cldImg={img}
              />
            </div>
          );
        }
      }
    }
  });

  return (
    <TextContent>
      <TextContent>{content}</TextContent>
      <div className={styles.hiddenDivider} />
      {mediaSection}
    </TextContent>
  );
};





