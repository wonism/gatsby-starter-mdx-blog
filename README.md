# gatsby-starter-mdx-blog
> Build your own blog w/ MDX & Gatsby

## Install
```
$ git clone git@github.com:wonism/gatsby-starter-mdx-blog.git <<PROJECT_NAME>>
# Recommend you to delete `.git`
$ cd <<PROJECT_NAME>> && rm -r .git
```

## Start with gatsby-cli
```
$ gatsby new <<PROJECT_NAME>> https://github.com/wonism/gatsby-stater-mdx-blog
```

## Development
```
$ npm start
```

## Build
```
$ npm run build
```

## Features
- Support post scaffolding
  - You can just run `npm run new` then input url & title. (slugify the url automatically.)
- Support writing blog contents w/ [MDX](https://github.com/mdx-js)
- Search Engine Optimization w/ [React Helmet](https://github.com/nfl/react-helmet)
- Contacts Form w/ [React Mail Form](https://github.com/wonism/react-mail-form)
- CSS in JS w/ [Emotion](https://emotion.sh/docs/introduction)
- All codes are written in [TypeScript](https://www.typescriptlang.org)
- [Google Analytics](https://analytics.google.com)
- Sitemap and RSS Feed
- Draft version of your post
  - You can just add `draft: true` below the date in mdx file

## You SHOULD change...
- Your picture in `src/contents/images/profile.png`
- Your biography in `src/shared/Bio/index.tsx`
- `gastby-config.js`
  - site meta data
  - google analytics tracking id

## Todo
- [ ] Comment w/ utterances
- [ ] Pagination
- [ ] Categorize
- [ ] Themes
