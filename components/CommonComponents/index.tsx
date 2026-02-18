/* eslint no-confusing-arrow: 0 */

import React from "react";
import cx from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";
// import { Helmet } from 'react-helmet';
import { setMetaTitleWithName } from "../../utils/utils";
import styles from "./commonComponents.module.scss";

export const PAGE_WIDTH = "1000px";

export const Body = ({ className, children }) => (
  <p className={cx(styles.bodyText, className)}>{children}</p>
);

export const TextContent = ({ className, children }) => (
  <span className={cx(styles.textContent, className)}>{children}</span>
);

export const InternalLink = ({ className, children, ...rest }) => (
  <Link className={cx(styles.link, className)} {...rest}>
    {children}
  </Link>
);

export const ExternalLink = ({ className, children, ...rest }) => (
  <a className={cx(styles.link, className)} {...rest}>
    {children}
  </a>
);

export const ProjectGridContainer = ({
  className,
  children,
  containerHeight,
  ...rest
}) => (
  <div
    className={cx(styles.projectGridContainer, className)}
    {...rest}
    style={{ "--container-height": containerHeight }}
  >
    {children}
  </div>
);

export const Divider = () => <div className={styles.divider} />;

export const MetadataSection = ({ className, children, ...rest }) => (
  <div className={cx(styles.metadataSection, className)} {...rest}>
    {children}
  </div>
);

export const MetadataItem = ({ className, children, ...rest }) => (
  <div className={cx(styles.metadataItem, className)} {...rest}>
    {children}
  </div>
);

export const MetadataTitle = ({ className, children, ...rest }) => (
  <Body className={cx(styles.metadataTitle, className)} {...rest}>
    {children}
  </Body>
);

export const Page = ({ className, children, ...rest }) => (
  <div className={cx(styles.page, className)} {...rest}>
    {children}
  </div>
);

export const PageCenteringContainer = ({ className, children, ...rest }) => (
  <div className={cx(styles.pageCenteringContainer, className)} {...rest}>
    {children}
  </div>
);

export const PageTitle = ({ className, children, ...rest }) => (
  <p className={cx(styles.pageTitle, className)} {...rest}>
    {children}
  </p>
);

export const BasePage = ({ title, body, metadata }) => (
  <div>
    {/* <Helmet>
      {setMetaTitleWithName(title)}
    </Helmet> */}
    <Page>
      <PageCenteringContainer>
        <PageTitle>{title}</PageTitle>
        {metadata}
        <Divider />
        {body}
      </PageCenteringContainer>
    </Page>
  </div>
);

export const BaseAnimationPage = ({ title, children }) => (
  <div>
    {/* <Helmet>
      {setMetaTitleWithName(title)}
    </Helmet> */}
    <Page>{children}</Page>
  </div>
);

BasePage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  metadata: PropTypes.node,
};

BasePage.defaultProps = {
  metadata: null,
};

BaseAnimationPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BaseAnimationPage.defaultProps = {
  children: null,
};
