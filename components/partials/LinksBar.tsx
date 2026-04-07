import styled, { css } from "styled-components";
import { client } from "@/sanity/lib/client";
import { SOCIALS_QUERY } from "@/sanity/lib/queries";

import { ExternalLink } from "../CommonComponents";
import LinksContainer from "./LinksContainer";

const linkStyle = css`
  display: inline-block;
  text-align: center;
  padding: 0px 10px;
  text-transform: lowercase;

  &.active {
    text-decoration: underline;
  }
`;

const ExternalLinkItem = styled(ExternalLink)`
  ${linkStyle}
`;

const LinksBar = async () => {
  const links = await client.fetch(SOCIALS_QUERY);

  const barLinks = links.map((item) => (
    <ExternalLinkItem
      href={item.url}
      key={item.platform}
      target="_blank"
      rel="noopener noreferrer"
    >
      {item.platform}
    </ExternalLinkItem>
  ));

  return <LinksContainer>{barLinks}</LinksContainer>;
};

export default LinksBar;
