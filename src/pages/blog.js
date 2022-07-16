import * as React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/organism/Layout';
import { Seo } from '../components/atoms/Seo';

const Blog = () => (
  <Layout>
    <Seo title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Blog;
