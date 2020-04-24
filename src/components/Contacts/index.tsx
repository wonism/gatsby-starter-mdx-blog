import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Head from '@shared/Head';
import Title from '@shared/Title';

import { Form } from './styled';

const Contacts = (): React.ReactElement => (
  <StaticQuery
    query={contactsQuery}
    render={(data) => (
      <section>
        <Title>
          <Head title="Contacts" />
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
