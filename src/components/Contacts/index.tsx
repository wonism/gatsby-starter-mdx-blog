import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Seo from '@shared/Seo';
import Title from '@shared/Title';

import { Form } from './styled';

const Contacts = (): React.ReactElement => (
  <StaticQuery
    query={contactsQuery}
    render={(data) => (
      <section>
        <Title>
          <Seo title="Contacts" description="You have any question about me? Contact me to get more information." />
          <hr />
        </Title>
        <Form to={data.site.siteMetadata.mail} />
      </section>
    )}
  />
);

const contactsQuery = graphql`
  query ContactsQuery {
    site {
      siteMetadata {
        mail
      }
    }
  }
`;

export default Contacts;
