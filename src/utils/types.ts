export type Pair<V, S> = [V, S];

export type ValueOf<T> = T[keyof T];

interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  mail: string;
  keywords: string[];
}

export interface Site {
  siteMetadata: SiteMetadata;
}

interface Frontmatter {
  title: string;
  date: string;
  tags?: string;
  image?: string;
}

export interface Mdx {
  id: string;
  frontmatter: Frontmatter;
  fields: { slug: string };
  body: string;
  excerpt: string;
}

interface PageInput {
  path: string;
  component: string;
  layout?: string;
  context?: any;
}

interface BoundActionCreators {
  createPage: (page: PageInput) => void;
  deletePage: (page: PageInput) => void;
  createRedirect: (
    opts: {
      fromPath: string;
      isPermanent?: boolean;
      redirectInBrowser?: boolean;
      toPath: string;
    }
  ) => void;
}

export type GatsbyCreatePages = (
  fns: { graphql: any; boundActionCreators: BoundActionCreators }
) => void;
