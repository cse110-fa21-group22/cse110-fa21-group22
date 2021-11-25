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
        
        //root.querySelector('.navbar').querySelector('.nav-search').querySelector('input').value = 'chicken';

        // Checks search result to be 10 recipes 
        const recipeCards = await page.$$eval('section', (sections) => {
            return sections[0].querySelectorAll('recipe-card-component').length;
          });
          
          expect(recipeCards).toBe(10);
    });
});