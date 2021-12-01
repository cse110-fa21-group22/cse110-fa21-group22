/* eslint-disable dot-notation */
/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-mixed-spaces-and-tabs */
/*
jest.setTimeout(15000);
describe('Simple User Flow', () => {
  // First, visit the iCook website
  beforeAll(async () => {
    await page.goto('https://icookfood.netlify.app/webpages/home.html');
    await page.setCacheEnabled(false);
    await page.waitForTimeout(800);
  });

  // Next, check to make sure that explore and favorites list loaded
  it('Check for 2 recipe catagories', async () => {
    // Query select all of the sections and return the number of sections
    const numRecipeLists = await page.$$eval('section', (sections) => {
      return sections.length;
    });
    // Expect there that array of sections is length 2
    expect(numRecipeLists).toBe(2);
  });
  
  // Next, check to make sure there are 10 recipes in the explore section
  it('Check for 10 recipe cards', async () => {
    // Query select all of the sections and then select all of the recipe cards
    await page.waitForTimeout('500');
    const exploreCards = await page.$$eval('section', (sections) => {
      return sections[0].querySelectorAll('recipe-card-component').length;
    });
    // Expect there that array of recipe cards in explore is length 10
    expect(exploreCards).toBe(10);
  });

  let favoritedRecipe;
  // Now, favorite a recipe and check it is added to master-favorites
  it('Add a new recipe to default favorites list', async () => {
    console.log('Check for new recipe card in custom list...');
    // Query select all of the sections and then select all of the recipe cards
    const exploreCards = await page.$$('recipe-card-component');
    const root = await exploreCards[0].getProperty('shadowRoot');
    const name = await root.$('.recipe-name');
    const innerText = await name.getProperty('innerText');
    favoritedRecipe = innerText['_remoteObject'].value;
    // Favorite the first recipe that appears by adding it to default list
    const favoriteIcon = await root.$('.recipe-favorite');
    await favoriteIcon.click();
    const button = await root.$('button');
    await button.click();

    // Reload the page
    await page.goto('https://icookfood.netlify.app/webpages/home.html');
    await page.waitForTimeout('2000');

    // Retrieve the recipe in the favorites list
    const exploreCards2 = await page.$$('recipe-card-component');
    const root2 = await exploreCards2[10].getProperty('shadowRoot');
    const favoritedName = await root2.$('.recipe-name');
    const favoritedInnerText = await favoritedName.getProperty('innerText');

    // Check that the title we favorited is the same as the title in the favorites list
    expect(favoritedInnerText['_remoteObject'].value).toBe(innerText['_remoteObject'].value);
  });

  // Now go to the favorites page and make sure the favorited recipe is the
  // only recipe there so far
  it('Check favorited recipe is on favorites page', async () => {
    // Go to favorites page
    await page.goto('https://icookfood.netlify.app/webpages/favorite.html');
    await page.waitForTimeout('1500');

    const userList = await page.$$('user-list');
    const root = await userList[0].getProperty('shadowRoot');
    const recipeCard = await root.$('recipe-card-component');

    const recipeRoot = await recipeCard.getProperty('shadowRoot');
    const favoritedName = await recipeRoot.$('.recipe-name');
    const favoritedInnerText = await favoritedName.getProperty('innerText');

    expect(favoritedInnerText['_remoteObject'].value).toBe(favoritedRecipe);
  });

  /* start comment
  // Now, unfavorite the recipe and check the favorited recipe is gone
  it('Check unfavorited recipe is removed', async () => {
    await page.waitForTimeout('200');
    const userList = await page.$('user-list');
    const root = await userList.getProperty('shadowRoot');
    const recipeCard = await root.$('recipe-card-component');
    const recipeRoot = await recipeCard.getProperty('shadowRoot');

    // Click the heart to unfavorite
    const favoriteIcon = await recipeRoot.$('.recipe-favorite');
    await favoriteIcon.click();
    await page.waitForTimeout('100');

    // Go back to home page
    await page.goto('https://icookfood.netlify.app/webpages/home.html');
    await page.waitForTimeout('1500');

    const exploreCards = await page.$$('recipe-card-component');
    // Expect there that array of recipe cards in explore is length 10
    expect(exploreCards.length).toBe(10);
  });
  // end comment here
});
*/
