/* eslint no-confusing-arrow: 0 */

import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import ShrumenContentPath from './shrumen.md';
import { ProjectContent } from '../../constants';
import { Body, TextContent } from '../commonComponents';

const project = ProjectContent[0];

const ProjectPage = styled.div`
  padding: 48px;
`;

const ProjectPageTitle = styled.p`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
`;

const MetadataSection = styled.div`
  display: flex;
  margin-top: 48px;
`;

const MetadataItem = styled.div`
  margin-right: 48px;
  width: 300px;
`;

const MetadataTitle = Body.extend`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

const MetadataContent = Body.extend``;

const Divider = styled.div`
  width: 60vw;
  border-top: 1px dashed white;
  margin: 48px 0px;
`;

const BodySection = Body.extend``;

class ShrumenProjectPage extends React.Component {
  constructor() {
    super();

    this.state = {
      introContent: null,
    };
  }

  componentWillMount() {
    fetch(ShrumenContentPath).then(response => response.text()).then(text =>
      this.setState({ introContent: text }),
    );
  }

  render() {
    const { introContent } = this.state;
    return (
      <ProjectPage>
        <ProjectPageTitle>{project.title}</ProjectPageTitle>
        <Metadata />
        <Divider />
        <BodyContent introContent={introContent} />
      </ProjectPage>
    );
  }
}

const Metadata = () => (
  <MetadataSection>
    <MetadataItem>
      <MetadataTitle>Tools</MetadataTitle>
      <MetadataContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </MetadataContent>
    </MetadataItem>
    <MetadataItem>
      <MetadataTitle>Role</MetadataTitle>
      <MetadataContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </MetadataContent>
    </MetadataItem>
    <MetadataItem>
      <MetadataTitle>Duration</MetadataTitle>
      <MetadataContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </MetadataContent>
    </MetadataItem>
  </MetadataSection>
);

const BodyContent = ({ introContent }) => (
  <BodySection>
    <TextContent><ReactMarkdown source={introContent} /></TextContent>
  </BodySection>
);

BodyContent.propTypes = {
  introContent: PropTypes.string.isRequired,
};

export default ShrumenProjectPage;
