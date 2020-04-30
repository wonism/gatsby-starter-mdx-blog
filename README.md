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
- ⚛️  Support writing blog contents w/ [MDX](https://github.com/mdx-js)
- 🔮 Comments [Utterances](https://utteranc.es)
- 🔍 Search Engine Optimization w/ [React Helmet](https://github.com/nfl/react-helmet)
- ✉️ Contacts Form w/ [React Mail Form](https://github.com/wonism/react-mail-form)
- 📊 [Google Analytics](https://analytics.google.com)
- 🗄 Sitemap and RSS Feed
- 💅 CSS in JS w/ [Emotion](https://emotion.sh/docs/introduction)
- 📝 All codes are written in [TypeScript](https://www.typescriptlang.org)
- 🤖 Support post scaffolding
  - You can just run `npm run new` then input url & title. (slugify the url automatically.)
- ✏️ Draft version of your post
  - You can just add `draft: true` below the `date` in mdx file.
- 🔖 Support **Category** and **Tag**
  - You can just add `categories: ["Category"]` and `tags: ["Tag"]` below the `date` in mdx file.
- 🔢 Support pagination

## You SHOULD change...
- Your picture in `./content/images/profile.png`
- Favicon in `./content/images/favicon.png`
  - You can check the details for favicon in [Gatsby Plugin Manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest)
- Your biography in `src/shared/Bio/index.tsx`
- `gastby-config.js`
  - site meta data
  - google analytics tracking id

## Todo
- [ ] Themes
