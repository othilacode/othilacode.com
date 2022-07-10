import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';

const samplePageLinks = [
  {
    text: 'Cours',
    url: 'courses',
    badge: false,
    description:
      'A simple example of linking to another page within a Gatsby site',
  },
  { text: 'Blog', url: 'blog' },
  { text: 'Server Side Rendering', url: 'using-ssr' },
  { text: 'Deferred Static Generation', url: 'using-dsg' },
];

const moreLinks = [
  { text: 'Join us on Discord', url: 'https://gatsby.dev/discord' },
  {
    text: 'Documentation',
    url: 'https://gatsbyjs.com/docs/',
  },
  {
    text: 'Starters',
    url: 'https://gatsbyjs.com/starters/',
  },
  {
    text: 'Showcase',
    url: 'https://gatsbyjs.com/showcase/',
  },
  {
    text: 'Contributing',
    url: 'https://www.gatsbyjs.com/contributing/',
  },
  { text: 'Issues', url: 'https://github.com/gatsbyjs/gatsby/issues' },
];

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt=""
      />
      <h1 className="text-3xl font-bold underline">
        Welcome to <b>Gatsby!</b>
      </h1>
      <p>
        <b>Example pages:</b>{' '}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
);

export default IndexPage;
