import React from "react";
import cx from "classnames";
import Link, { LinkProps } from "next/link";
import styles from "./commonComponents.module.scss";

interface StylingWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export const Body = ({ className, children }: StylingWrapperProps) => (
  <p className={cx(styles.bodyText, className)}>{children}</p>
);

export const TextContent = ({ className, children }: StylingWrapperProps) => (
  <span className={cx(styles.textContent, className)}>{children}</span>
);

export const InternalLink = ({
  className,
  children,
  ...rest
}: StylingWrapperProps & LinkProps) => (
  <Link className={cx(styles.link, className)} {...rest}>
    {children}
  </Link>
);

export const ExternalLink = ({
  className,
  children,
  ...rest
}: StylingWrapperProps & React.ComponentProps<"a">) => (
  <a className={cx(styles.link, className)} {...rest}>
    {children}
  </a>
);

interface ProjectGridContainerProps extends StylingWrapperProps {
  containerHeight: string;
}

export const ProjectGridContainer = ({
  className,
  children,
  containerHeight,
  ...rest
}: ProjectGridContainerProps) => (
  <div
    className={cx(styles.projectGridContainer, className)}
    {...rest}
    style={{ "--container-height": containerHeight } as React.CSSProperties}
  >
    {children}
  </div>
);

export const Divider = () => <div className={styles.divider} />;

export const MetadataSection = ({
  className,
  children,
  ...rest
}: StylingWrapperProps & React.ComponentProps<"div">) => (
  <div className={cx(styles.metadataSection, className)} {...rest}>
    {children}
  </div>
);

export const MetadataItem = ({
  className,
  children,
  ...rest
}: StylingWrapperProps & React.ComponentProps<"div">) => (
  <div className={cx(styles.metadataItem, className)} {...rest}>
    {children}
  </div>
);

export const MetadataTitle = ({ className, children }: StylingWrapperProps) => (
  <Body className={cx(styles.metadataTitle, className)}>{children}</Body>
);

export const Page = ({
  className,
  children,
  ...rest
}: StylingWrapperProps & React.ComponentProps<"div">) => (
  <div className={cx(styles.page, className)} {...rest}>
    {children}
  </div>
);

export const PageCenteringContainer = ({
  className,
  children,
  ...rest
}: StylingWrapperProps & React.ComponentProps<"div">) => (
  <div className={cx(styles.pageCenteringContainer, className)} {...rest}>
    {children}
  </div>
);

export const PageTitle = ({
  className,
  children,
  ...rest
}: StylingWrapperProps & React.ComponentProps<"p">) => (
  <p className={cx(styles.pageTitle, className)} {...rest}>
    {children}
  </p>
);

interface BasePageProps {
  title: string;
  body: React.ReactNode;
  metadata: React.ReactNode;
}

export const BasePage = ({ title, body, metadata }: BasePageProps) => (
  <div>
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

interface BaseAnimationPageProps {
  title: string;
  children: React.ReactNode;
}

export const BaseAnimationPage = ({
  children,
}: BaseAnimationPageProps) => (
  <div>
    <Page>{children}</Page>
  </div>
);
