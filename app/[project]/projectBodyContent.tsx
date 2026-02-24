'use client'

import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { audioCodec } from "@cloudinary/url-gen/actions/transcode";
import type { Project } from '@/sanity.types'

import {
  TextContent,
} from '../../components/CommonComponents';
import styles from "./projectBodyContent.module.scss";

const myCld = new Cloudinary({ cloud: { cloudName: 'bomani-personal' } });

interface Props {
  content?: React.ReactNode;
  media: Project['otherMedia'] | null;
};

export default function ProjectBodyContent({ media, content }: Props) {
  const mediaSection = (media ?? []).map((mediaItem) => {
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
