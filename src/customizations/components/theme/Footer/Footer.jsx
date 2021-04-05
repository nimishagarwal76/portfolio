/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { Logo } from '@plone/volto/components';

const messages = defineMessages({
    copyright: {
        id: 'Copyright',
        defaultMessage: 'Copyright',
    },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => (
<Segment role="contentinfo" vertical className="footer-wrapper" >
  <Container>
    <Segment basic  className="discreet footer">
      <div className="footer-inner">
        <Logo />
        <List horizontal inverted>
          {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
          <div role="listitem" className="item">
            <Link className="item" to="/sitemap">
              <FormattedMessage id="Site Map" defaultMessage="Site Map" />
            </Link>
          </div>
        </List>
      </div>

      <p>
        Made with &hearts; by Nimish Agrawal
      </p>
    </Segment>
  </Container>
</Segment>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
    /**
     * i18n object
     */
};

export default injectIntl(Footer);
