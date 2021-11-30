/* eslint-disable dot-notation */
/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-mixed-spaces-and-tabs */

jest.setTimeout(15000);
describe('Simple Favorites Flow', () => {
  // First, visit the iCook website
  beforeAll(async () => {
    await page.goto('https://icookfood.netlify.app/webpages/home.html');
    await page.setCacheEnabled(false);
    await page.waitForTimeout(2000);
  });

  let favoritedRecipe;
  let newLength;
  // Now, favorite a recipe and check it is hearted on favorite page
  it('Check favorited recipe has red heart on recipe page', async () => {
    console.log('Check favorited recipe has red heart on recipe page...');
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

    await page.goto('https://icookfood.netlify.app/webpages/home.html');
    await page.waitForTimeout(2000);

    // Click favorited recipe
    const exploreCards2 = await page.$$('recipe-card-component');
    // Navigate to recipe page for favorited recipe
    newLength = exploreCards2.length;
    await exploreCards2[newLength - 1].click();
    await page.waitForTimeout(1500);

    // Get image source
    const src = await page.evaluate(() => {
      const elem = document.querySelector('img');
      return elem.src;
    });
    // Check that the heart of favorited recipe is red on recipe page
    expect(src).toBe('https://icookfood.netlify.app/assets/favorite-selected.svg');
  });

  // Now, check the title of the recipe page
  it('Check that we navigated to the correct recipe page', async () => {
    console.log('Check the title of the recipe page...');
    // Get recipe page title
    const title = await page.$('.recipe-name');
    const innerText = await title.getProperty('innerText');
    favoritedRecipe += ' ';
    // Check that the title matches the recipe you clicked
    expect(innerText['_remoteObject'].value).toBe(favoritedRecipe);
  });

  // Now, check that the steps are populated
  it('Check that steps are populated', async () => {
    console.log('Check the steps are populated...');
    await page.waitForTimeout(1000);

    const num = await page.$$('li');
    // Check that the steps are populated
    expect(num.length > 0).toBe(true);
  });

  // Now, unheart the recipe and go back to home page to make sure its gone
  it('Check that unfavorited recipe is removed from favorites', async () => {
    console.log('Check that unfavorited recipe is removed from favorites...');
    // Unfavorite the recipe
    const heart = await page.$('.favorite-heart');
    await heart.click();

    // Go back to home page
    await page.goto('https://icookfood.netlify.app/webpages/home.html');
    await page.waitForTimeout(2000);

    const exploreCards = await page.$$('recipe-card-component');

    // Check that there are no favorited recipes (only explore cards shown)
    expect(exploreCards.length).toBe(newLength - 1);
  });
});
