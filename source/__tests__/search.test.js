/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
jest.setTimeout(10000);

describe('Basic user flow for Search Page', () => {
  // Launch the site
  beforeAll(async () => {
    await page.goto('https://icookfood.netlify.app/webpages/search.html');
    await page.waitForTimeout(800);
  });

  let firstSet = [];

  // Check the search page without a search
  it('Check for 10 default recipes on empty search', async () => {
    console.log('Check for 10 default recipe');
    await page.waitForTimeout('500');

    const recipeCards = await page.$$('recipe-card-component');
    for (let i = 0; i < recipeCards.length; i++) {
      await page.waitForTimeout('500');
      let root = await recipeCards[i].getProperty('shadowRoot');
      let name = await root.$('.recipe-name');
      let innerText = await name.getProperty('innerText');
      firstSet.push(innerText['_remoteObject'].value);
    }

    expect(recipeCards.length).toBe(10);
  }, 100000);

  /*
    
    // Search for basic recipe
    // Needs some work
    it('Inital search', async () => {
        // const navBarComp = await page.$('navbar-component');
        // const root = await navBarComp.getProperty('shadowRoot');
        // //const navBarSearchInput = await root.$('.nav-search-input');
        // //await root.type('.nav-search-input', 'chicken');
        
        // const navBar = await root.$('.navbar');//.$('.nav-search').$('input').value = 'chicken';
        // const navSearch = await navBar.$('.nav-search');
        // let input = await navSearch.$('input');
        // input.value = 'chicken';

        await page.goto('https://619eba98b1f5aa97eda3fee5--icookfood.netlify.app/webpages/search.html?search=chicken');
        //await page.reload();
        await page.waitForTimeout('500');

        // Checks search result to be 10 recipes 
        // Will need to modify this to check for chicken recipes 
        const recipeCards = await page.$$eval('.recipe-section', (sections) => {
            return sections[0].querySelectorAll('recipe-card-component').length;
          });
          
        expect(recipeCards).toBe(10);
    });

    */

  let secondSet = [];
  // User clicks the next results button, make sure there recipe cards are populated
  it('Check next results button', async () => {
    console.log('Check next button');
    // await page.waitForTimeout('500');

    const nextButton = await page.$('.next-button');

    await nextButton.click();
    await page.waitForTimeout('500');

    const recipeCards = await page.$$('recipe-card-component');
    secondSet = recipeCards;
    // const recipeCards = await page.$$eval('.recipe-section', (sections) => {
    //     for (let i = 0; i < sections[0].querySelectorAll[0])
    //     return sections[0].querySelectorAll('recipe-card-component').length;
    //   });

    expect(recipeCards.length).toBe(10);
  });

  // User clicks the previous button, make sure the recipes are populated
  it('Check previous results button', async () => {
    console.log('Check previous button');
    const prevButton = await page.$('.previous-button');

    await prevButton.click();
    await page.waitForTimeout('1000');

    const currentRecipes = await page.$$('recipe-card-component');

    expect(currentRecipes.length).toBe(10);
  });

  // After previous button is clicked, make sure the recipes are the same
  it('Check to the recipes are the same after previous button', async () => {
    const currentRecipes = await page.$$('recipe-card-component');
    let isSame = true;
    for (let i = 0; i < currentRecipes.length; i += 1) {
      let root = await currentRecipes[i].getProperty('shadowRoot');
      let name = await root.$('.recipe-name');
      let innerText = await name.getProperty('innerText');
      let recipeTitle = innerText['_remoteObject'].value;
      if (firstSet[i] != recipeTitle) {
        isSame = false;
        break;
      }
    }
    // eslint-disable-next-line no-underscore-dangle
    expect(isSame).toBe(true);
  });
});
