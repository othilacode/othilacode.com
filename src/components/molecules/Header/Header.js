import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '../../atoms/Button/Button';

export const Header = ({ siteTitle }) => (
  <header className="h-[80px] drop-shadow-lg">
    <div className="flex justify-between items-center px-4 py-4">
      <div className="flex justify-center">
        <Link to="/" className="p-2">
          <StaticImage
            src="../../images/othila.png"
            loading="eager"
            width={32}
            quality={95}
            formats={['auto', 'webp', 'avif']}
            alt={siteTitle}
          />
        </Link>
        <div className="mx-4 w-24 flex justify-between items-center">
          <Link to="/courses" className="text-sm text-zinc-600">
            Cours
          </Link>
          <Link to="/blog" className="text-sm text-zinc-600">
            Blog
          </Link>
        </div>
      </div>

      <Button
        handleClick={() => console.log('Contact Me')}
        text="Contactez-moi"
      />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
