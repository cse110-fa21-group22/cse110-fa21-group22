describe('Basic user flow for Search Page', () => {
    jest.setTimeout(10000);

    // Launch the site
    beforeAll(async () => {
        await page.goto('https://619eba98b1f5aa97eda3fee5--icookfood.netlify.app/webpages/search.html');
        await page.waitForTimeout(800);
    });

    // Check the search page without a search
    it('Check for 10 default recipes on empty search', async () => {
        console.log('Check for 10 default recipe');
        await page.waitForTimeout('500');

        const recipeCards = await page.$$eval('section', (sections) => {
          return sections[0].querySelectorAll('recipe-card-component').length;
        });
        
        expect(recipeCards).toBe(10);
      });

    // Search for basic recipe
    it('Inital search', async () => {
        const navBarComp = await page.$('navbar-component');
        const root = await navBarComp.getProperty('shadowRoot');
        //const navBarSearchInput = await root.$('.nav-search-input');
        //await root.type('.nav-search-input', 'chicken');
        
        const navBar = await root.$('.navbar');//.$('.nav-search').$('input').value = 'chicken';
        const navSearch = await navBar.$('.nav-search');
        let input = await navSearch.$('input');
        input.value = 'chicken';

        await page.reload();
        await page.waitForTimeout('500');

        // Checks search result to be 10 recipes 
        const recipeCards = await page.$$eval('section', (sections) => {
            return sections[0].querySelectorAll('recipe-card-component').length;
          });
          
          expect(recipeCards).toBe(10);
    });
});