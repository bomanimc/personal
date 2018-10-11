/* eslint no-confusing-arrow: 0 */

import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import ShrumenContentPath from './shrumen.md';
import { ProjectContent } from '../../constants';
import { Body, TextContent, Link } from '../commonComponents';

const project = ProjectContent[0];

const ProjectPage = styled.div`
  padding: 48px;
`;

const BackButton = styled.span`
  font-weight: bold;
`;

const ProjectPageTitle = styled.p`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 16px;
`;

const MetadataSection = styled.div`
  display: flex;
  margin-top: 16px;
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

const MetadataContent = TextContent.extend``;

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
        <BackButton><Link href="/">Back</Link></BackButton>
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
      <MetadataContent><ReactMarkdown source={project.tools} /></MetadataContent>
    </MetadataItem>
    <MetadataItem>
      <MetadataTitle>Role</MetadataTitle>
      <MetadataContent><ReactMarkdown source={project.role} /></MetadataContent>
    </MetadataItem>
    <MetadataItem>
      <MetadataTitle>External Site</MetadataTitle>
      <MetadataContent>
        <Link href="https://www.foldhaus.com/shrumen-lumen">foldhaus.com/shrumen-lumen</Link>
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
