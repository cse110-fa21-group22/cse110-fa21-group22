# Welcome!

Greetings new recruit! Welcome to Team22x Plus Pro Max! We have developed a recipe application called iCook! Here's some things to know about this repo:
1. README.MD
2. Workflow and Pipeline
3. Repo Organization
___
### README.md

README.md is located at the root of this repo or you can [Click Here](/README.md) to go to the file.
In this file, there is our **team number**, a **project description** and links to our **team page**, **application**, etc.
___
### Workflow

The workflow or CICD Pipeline can be found in ./admin/cipipeline, or [Click Here](./cipipeline). In here, take a look at the phase1.drawio.png. This is our diagram that describes our workflow process. 

If you'd like to investigate this further, you can look at /.github/workflows or [Click Here](/.github/workflows) to see the yml files that will run with Github actions. 
___
### Repo Organization

In the root there are 4 directories:
- [.github](/.github)
- [admin](/admin)
- [specs](/specs)
- [src](/src)

There are also 8 stand-alone files that should -- for the most part -- not be touched unless needed to i.e making updates to README.md, adding files to .gitignore, etc. 

---
### Inside [.github](/.github)

In here there is a folder [workflows](/.github/workflows) which has 3 yml files for github actions. 
- [docs.yml](/.github/workflows/docs.yml) generates JSDocs on Push to main
- [lint.yml](/.github/workflows/lint.yml) runs ESLint and Prettier on PR and Push to main
- [testing.yml](/.github/workflows/testing.yml) runs our E2E tests on PR to main

---

