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

        const numRecipeCards = await page.$$eval('recipe-card-component', (recipeCards) => {
          firstSet = recipeCards;
          return recipeCards.length;//sections[0].querySelectorAll('recipe-card-component').length;
        });
        
        expect(numRecipeCards).toBe(10);
      }, 10000);

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

        let nextButton = await page.$('.next-button');
       
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

    
});