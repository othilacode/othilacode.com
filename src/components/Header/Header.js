import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Button } from '../Button';

export const Header = ({ siteTitle }) => (
  <header className="h-[80px] drop-shadow-lg">
    <div className="flex justify-between items-center px-4 py-4">
      <div className="flex justify-center">
        <Link to="/" className="text-2xl font-bold text-zinc-900">
          {siteTitle}
        </Link>
        <div className="mx-4 w-24 flex justify-between items-center">
          <Link to="/course" className="text-sm text-zinc-600">
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
