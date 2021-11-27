/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-mixed-spaces-and-tabs */

jest.setTimeout(10000);

describe('Home Page User Flow', () => {
  // First, visit the lab 8 website
  beforeAll(async () => {
    await page.goto('https://icookfood.netlify.app/webpages/home.html');
    await page.waitForTimeout(800);
  });

  // Next, check to make sure that explore and favorites list loaded
  it('Check for 2 recipe catagories', async () => {
    console.log('Check for 2 recipe catagories...');
    // Query select all of the sections and return the number of sections
    const numRecipeLists = await page.$$eval('section', (sections) => {
      return sections.length;
    });
    // Expect there that array of sections is length 2
    expect(numRecipeLists).toBe(2);
  });

  // Next, check to make sure there are 10 recipes in the explore section
  it('Check for 10 recipe cards', async () => {
    console.log('Check for 10 recipe cards...');
    // Query select all of the sections and then select all of the recipe cards
    await page.waitForTimeout('500');
    const exploreCards = await page.$$eval('section', (sections) => {
      return sections[0].querySelectorAll('recipe-card-component').length;
    });
    // Expect there that array of recipe cards in explore is length 10
    expect(exploreCards).toBe(10);
  });

  // Next, check that the same recipes displayed as in local storage
  it('Check recipes from local storage loaded', async () => {
    console.log('Check for recipe cards from local storage...');
    // Query select all of the sections and then select all of the recipe cards
    // await page.waitForTimeout('500');
    const favoritesLoaded = await page.$$eval('section', (sections) => {
      const favoriteCards = sections[1].querySelectorAll('recipe-card-component');
      const list = localStorage.getItem('favorites-master');
      const array = JSON.parse(list);

      for (let i = 0; i < favoriteCards.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
          if (array[j] !== favoriteCards[i].getAttribute('recipe-id')) {
            return false;
          }
        }
      }
      return true;
    });
    // Expect there that array of recipe cards in explore is length 10
    expect(favoritesLoaded).toBe(true);
  });

  // Now, favorite a recipe and make it appears on a page reload
  it('Add a new recipe to custom list', async () => {
    console.log('Check for new recipe card in custom list...');
    // Query select all of the sections and then select all of the recipe cards
    await page.waitForTimeout('500');
    const exploreCards = await page.$$('recipe-card-component');
    const root = await exploreCards[0].getProperty('shadowRoot');
    const favoriteIcon = await root.$('.recipe-favorite');
    await favoriteIcon.click();
    const button = await root.$('button');
    await button.click();

    await page.goto('https://icookfood.netlify.app/webpages/home.html');
    await page.waitForTimeout('1000');
    const exploreCards2 = await page.$$('recipe-card-component');

    expect(exploreCards2.length).toBe(11);
  });
});

