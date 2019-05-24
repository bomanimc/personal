/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
// import styled from 'styled-components';
import LinksBar from '../partials/LinksBar';
import { Link, TextContent, BasePage, BodySection } from '../commonComponents';
import { SocialLinks, NavLinks } from '../../constants';

const AboutPage = () => (
  <div id="root">
    <LinksBar links={NavLinks} />
    <BasePage
      title={'About'}
      body={
        <BodySection>
          <TextContent>
            <TextContent>
              During the day, Bomani works on news products at Facebook.
              He has previously interned at IDEO, Grubhub, and Boeing.
              <br />
              <br />
              Bomani has conducted HCI & Learning Sciences research
              with <Link href="http://delta.northwestern.edu/">Delta Lab</Link>, and
              has contributed to journalism innovation projects as a Fellow
              at <Link href="https://knightlab.northwestern.edu/">Knight Lab</Link>.
              <br />
              <br />
              <br />
              See his full resume <Link href="/resume">here</Link>.
            </TextContent>
          </TextContent>
        </BodySection>
      }
    />
    <LinksBar links={SocialLinks} />
  </div>
);

export default AboutPage;
