/* eslint-disable dot-notation */
/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint no-unused-vars: "error" */
jest.setTimeout(30000);

// Links for testing on deployment
const HOME_DEPLOY_LINK = 'https://icookfood.netlify.app/webpages/home.html';
const SEARCH_DEPLOY_LINK = 'https://icookfood.netlify.app/webpages/search.html';
const FAV_DEPLOY_LINK = 'https://icookfood.netlify.app/webpages/favorite.html';
const FAV_SELECTED = 'https://icookfood.netlify.app/assets/favorite-selected.svg';
// Links for testing on PR
const PREVIEW_TAG = 'https://deploy-preview-';
const END_TAG = '--icookfood.netlify.app/';

const prNum = 0; // change -> (your pr number);

let homeLink = '';
let searchLink = '';
let favLink = '';
let favSelected = '';

if (prNum > 0) {
  homeLink = `${PREVIEW_TAG}${prNum}${END_TAG}webpages/home.html`;
  searchLink = `${PREVIEW_TAG}${prNum}${END_TAG}webpages/search.html`;
  favLink = `${PREVIEW_TAG}${prNum}${END_TAG}webpages/favorite.html`;
  favSelected = `${PREVIEW_TAG}${prNum}${END_TAG}assets/favorite-selected.svg`;
} else {
  homeLink = HOME_DEPLOY_LINK;
  searchLink = SEARCH_DEPLOY_LINK;
  favLink = FAV_DEPLOY_LINK;
  favSelected = FAV_SELECTED;
}

// Unit test: Refresh Button
describe('Testing Refresh Button', () => {
  beforeAll(async () => {
    await page.goto(homeLink);
    await page.setCacheEnabled(false);
    await page.waitForTimeout(800);
  });

  // Check refresh button works and loads new recipes
  it('Check refresh button works and loads new recipes', async () => {
    const firstSet = [];
    await page.waitForTimeout('500');
    
    // Gets the first 3 recipe cards before refresh
    const exploreCards = await page.$$('recipe-card-component');
    for (let i = 0; i < 3; i += 1) {
      const root = await exploreCards[i].getProperty('shadowRoot');
      const name = await root.$('.recipe-name');
      const innerText = await name.getProperty('innerText');
      firstSet.push(innerText['_remoteObject'].value);
    }
    
    await page.waitForTimeout('500');
    // Clicks refresh button
    const refreshButton = await page.$('.home-page-popular-refresh');
    await refreshButton.click();
    await page.waitForTimeout('2000');

    const newRecipeCards = await page.$$('recipe-card-component');
    let isDifferent = true;
    for (let i = 0; i < 3; i += 1) {
      const root = await newRecipeCards[i].getProperty('shadowRoot');
      const name = await root.$('.recipe-name');
      const innerText = await name.getProperty('innerText');

      if (firstSet[i] == innerText['_remoteObject'].value) {
        isDifferent = false;
        break;
      }
    }

    expect(isDifferent).toBe(true);
  });

});
