import * as React from 'react';

import { Layout } from '../components/organism/Layout';
import { Seo } from '../components/atoms/Seo';
import { Banner } from '../components/molecules/Banner';
import { Divider } from '../components/atoms/Divider';
import { LastCourses } from '../components/molecules/LastCourses/';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center w-3/4">
        <Banner />
      </div>
      <Divider />
      <LastCourses />
      <Divider />
    </div>
  </Layout>
);

export default IndexPage;
