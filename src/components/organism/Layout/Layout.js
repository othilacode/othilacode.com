/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from '../../molecules/Header/Header';

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container h-screen mx-auto px-5">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="mb-auto">{children}</main>
      <footer
        className="bg-blue-500 fixed
             inset-x-0
             bottom-0"
      >
        © {new Date().getFullYear()} &middot; Built with{' '}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
