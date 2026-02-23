import React from "react";
import styled, { css } from "styled-components";
import { client } from "@/sanity/lib/client";
import { SOCIALS_QUERY } from "@/sanity/lib/queries";

import { ExternalLink } from "../CommonComponents";

const LinksContainer = styled.div`
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

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
