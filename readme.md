# About 
This template project contains a lot of different modern frontend technologies. 
Such as 
- webpack 5 (own custom config)
- Typescript
- React 17 +
- Redux Toolkit
- scss 
- i18n
- JSON server
- Storybook
### Architecture 
This project uses [Feature-Sliced Design](https://feature-sliced.design/ru/)

### Testing
- Jest
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [Loki](https://loki.js.org/) screenshot testing
- Generating beautiful reports with [reg-cli](https://github.com/reg-viz/reg-cli)

CI (github actions) 

### Code quality
- eslint
- own custom FSD check plugin [eslint-plugin-relative-path-fsd-checker](https://www.npmjs.com/package/eslint-plugin-relative-path-fsd-checker)
- stylelint
- Husky
- BundleAnalyzer
- Automating the creation of FSD slices using the `generate:fsd features testFeature` command
### Requirements
Node.js - 17.4.0
npm  - 8.5.1
