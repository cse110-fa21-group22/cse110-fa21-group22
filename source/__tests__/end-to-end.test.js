/* eslint-disable dot-notation */
/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-mixed-spaces-and-tabs */
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
  
    /*
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
    */
  });

describe('Basic user flow for Search Page', () => {
    // Launch the site
    beforeAll(async () => {
      const client = await page.target().createCDPSession();
      await client.send('Network.clearBrowserCookies');
      await client.send('Network.clearBrowserCache');
      await page.goto('https://icookfood.netlify.app/webpages/search.html');
      await page.waitForTimeout(800);
    });
  
    let firstSet = [];
  
    // Check the search page without a search
    it('Check for 10 default recipes on empty search', async () => {
      console.log('Check for 10 default recipe');
      await page.waitForTimeout('1000');
  
      const recipeCards = await page.$$('recipe-card-component');
      for (let i = 0; i < recipeCards.length; i++) {
        await page.waitForTimeout('1000');
        let root = await recipeCards[i].getProperty('shadowRoot');
        let name = await root.$('.recipe-name');
        let innerText = await name.getProperty('innerText');
        firstSet.push(innerText['_remoteObject'].value);
      }
  
      expect(recipeCards.length).toBe(10);
    });
  
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
      }); */
  
    let secondSet = [];
    // User clicks the next results button, make sure there recipe cards are populated
    it('Check next results button', async () => {
      console.log('Check next button');
      await page.waitForTimeout('500');
  
      const nextButton = await page.$('.next-button');
  
      await nextButton.click();
      await page.waitForTimeout('500');
  
      const recipeCards = await page.$$('recipe-card-component');
      for (let i = 0; i < recipeCards.length; i++) {
        await page.waitForTimeout('1000');
        let root = await recipeCards[i].getProperty('shadowRoot');
        let name = await root.$('.recipe-name');
        let innerText = await name.getProperty('innerText');
        secondSet.push(innerText['_remoteObject'].value);
      }
  
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
  
    // Click the next button again and check if those populated recipes are the same
    it('Check to the recipes are the same after next button', async () => {
      console.log('Check next button');
      await page.waitForTimeout('500');
  
      const nextButton = await page.$('.next-button');
  
      await nextButton.click();
      await page.waitForTimeout('1000');
  
      const currentRecipes = await page.$$('recipe-card-component');
      let isSame = true;
      for (let i = 0; i < currentRecipes.length; i += 1) {
        let root = await currentRecipes[i].getProperty('shadowRoot');
        let name = await root.$('.recipe-name');
        let innerText = await name.getProperty('innerText');
        let recipeTitle = innerText['_remoteObject'].value;
        if (secondSet[i] != recipeTitle) {
          isSame = false;
          break;
        }
      }
      // eslint-disable-next-line no-underscore-dangle
      expect(isSame).toBe(true);
    });
  
    let favoritedRecipe;
    // Now, favorite a recipe and check it is added to master-favorites
    it('Add a new recipe to default favorites list', async () => {
      console.log('Check for new recipe card in default list');
      // Query select all of the sections and then select all of the recipe cards
      const recipeCards = await page.$$('recipe-card-component');
      const root = await recipeCards[0].getProperty('shadowRoot');
      const name = await root.$('.recipe-name');
      const innerText = await name.getProperty('innerText');
      favoritedRecipe = innerText['_remoteObject'].value;
      // Favorite the first recipe that appears by adding it to default list
      const favoriteIcon = await root.$('.recipe-favorite');
      await favoriteIcon.click();
      const button = await root.$('button');
      await button.click();
      await page.waitForTimeout('2000');
  
      // Go to favorites page
      await page.goto('https://icookfood.netlify.app/webpages/favorite.html');
      await page.waitForTimeout('5000');
  
      // Retrieve the recipe in the favorites list
      const userList = await page.$$('user-list');
      //console.log(favRecipeCards)
      const userRoot = await userList[0].getProperty('shadowRoot');
      const favRecipeCard = await userRoot.$$('recipe-card-component');
      const favRoot = await favRecipeCard[favRecipeCard.length - 1].getProperty('shadowRoot');
      const favoritedName = await favRoot.$('.recipe-name');
      const favoritedInnerText = await favoritedName.getProperty('innerText');
  
      // Check that the title we favorited is the same as the title in the favorites list
      expect(favoritedInnerText['_remoteObject'].value).toBe(favoritedRecipe);
    });
    
  });

describe('Simple Favorites Flow', () => {
    // First, visit the iCook website
    beforeAll(async () => {
      const client = await page.target().createCDPSession();
      await client.send('Network.clearBrowserCookies');
      await client.send('Network.clearBrowserCache');
      await page.goto('https://icookfood.netlify.app/webpages/home.html');
      //await page.setCacheEnabled(false);
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
      console.log(newLength);
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
  
