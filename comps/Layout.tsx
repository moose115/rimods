import Head from 'next/head';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
min-height: 100vh;
padding: 0 .5rem;
background-image: url('/thumbnail.jpg');
background-attachment: fixed;
background-position: center center;
background-size: cover;
`;

const defaultDescription = 'Rimods is an enhanced mod catalogue for Rimworld. List your mods, create modpacks and share with others!';
const defaultTags = ', mod, mods, modification, modifications, rimworld, rimods, community';
const Layout = (
  {
    children, title, url, description, tags,
  }: {
    children?: ReactNode
    title?: string
    url?: string
    description?: string
    tags?: string
  },
) => (
  <StyledDiv>
    <Head>
      <title>{title}</title>
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={tags || (tags + defaultTags)} />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/thumbnail.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/thumbnail.jpg" />
    </Head>
    {children}
  </StyledDiv>
);

Layout.defaultProps = {
  children: null,
  title: 'Rimods',
  url: 'https://rimods.com/',
  description: defaultDescription,
  tags: '',
};

export default Layout;
