# Welcome!

Greetings and welcome to Team22x Plus Pro Max! We have developed a recipe application called iCook! Here's some things to know about this repo:

1. README.MD
2. Workflow and Pipeline
3. Repo Organization

---

### README.md

README.md is located at the root of this repo or you can [Click Here](/README.md) to go to the file.
In this file, there is our **team number**, a **project description** and links to our **team page**, **application**, etc.

---

### Workflow

The workflow or CICD Pipeline can be found in ./admin/cipipeline, or [Click Here](./cipipeline). In here, take a look at the phase1.drawio.png. This is our diagram that describes our workflow process.

To investigate this further, look at /.github/workflows or [Click Here](/.github/workflows) to see the yml files that will run with Github actions.

---

### Repo Organization

In the root there are 4 directories:

- [.github](/.github)
- [admin](/admin)
- [specs](/specs)
- [src](/src)

There are also 8 stand-alone files that should -- for the most part -- not be touched unless needed to i.e making updates to README.md, adding files to .gitignore, etc.

---

### Inside [.github](/.github)

In here, there is a folder [workflows](/.github/workflows) which has 3 yml files for github actions.

- [docs.yml](/.github/workflows/docs.yml) generates JSDocs on Push to main
- [lint.yml](/.github/workflows/lint.yml) runs ESLint and Prettier on PR and Push to main
- [testing.yml](/.github/workflows/testing.yml) runs our E2E tests on PR to main

There is also a [pull_request_template.md](/.github/pull_request_template.md) that is used to create a template for our PRs

---

### Inside [admin](/admin)

In here, there are multiple folders for administrative purposes.

- [branding](/admin/branding) has our team logo
- [cipipeline](/admin/cipipeline) has our pipeline information: diagram, pipeline procedure, and video demos
- [designs](/admin/designs) has our figma and miro boards
- [meetings](/admin/meetings) has all our previous meetings notes and a meeting notes template
- [misc](/admin/misc) has our rules and signed contracts for our team
- [videos](/admin/videos) has our team and status videos

---

### Inside [specs](/specs)

In there, we have 3 folders:

- [adrs](/specs/adrs) contains our current adrs for our design choices
- [brainstorm](/specs/brainstorm) has our miro board for brainstorming, uml diagram, and wireframes
- [pitch](/specs/pitch) has our team project pitch

---

### Inside [src](/src)

In this foler, this is where the code for the application goes:

- [**tests**](/src/__tests__) has our unittest.test.js and end-to-end.test.js
- [assets](/src/assets) has all the images and logos needed for the project
- [components](/src/components) has 5 JS files that are components to the page.
- [scripts](/src/scipts) has 5 JS files used for the backend javascript for the web application
- [styles](/src/styles) has our CSS files for styling the web app
- [webpages](/src/webpages) has our 4 HTML files for our 4 page web app
- [sw.js](/src/sw.js) is our service worker file

This concludes the tour of our repo!
