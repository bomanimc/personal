import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

export default class MarkdownTextBlock extends React.Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    markdownContent: this.props.placeholderContent,
  };

  componentWillMount() {
    const { markdownContentPath, placeholderContent } = this.props;
    if (markdownContentPath === null || markdownContentPath === undefined) {
      this.setState({ markdownContent: placeholderContent });
      return;
    }

    fetch(markdownContentPath)
      .then(response => response.text())
      .then(text => this.setState({ markdownContent: text }));
  }

  render() {
    const { markdownContent } = this.state;
    return (
      <ReactMarkdown source={markdownContent} escapeHtml={false} />
    );
  }
}

MarkdownTextBlock.propTypes = {
  markdownContentPath: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
};

MarkdownTextBlock.defaultProps = {
  placeholderContent: '',
};
