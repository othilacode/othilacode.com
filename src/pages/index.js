import * as React from 'react';

import { Layout } from '../components/organism/Layout';
import { Seo } from '../components/atoms/Seo';
import { Banner } from '../components/molecules/Banner';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="flex flex-row justify-center">
      <Banner />
    </div>
  </Layout>
);

export default IndexPage;
