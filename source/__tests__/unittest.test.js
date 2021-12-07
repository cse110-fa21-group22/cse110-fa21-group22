test('Comment in code below to run unit tests locally', () => {
  expect(1 + 2).toBe(3);
});

/*
import search from '../../scripts/search.js';

test('search function test#1', () => {
  const inputList = {};
  inputList.query = 'eggs';
  inputList.number = 10;
  inputList.offset = 0;
  inputList.sort = '';
  inputList.recipeNutrition = 'true';
  inputList.cuisineFilter = '';
  inputList.dietFilter = '';
  inputList.timeFilter = '';
  inputList.typeFilter = '';

  return search(inputList).then((value) => {
    expect(value.totalResults).toBe(1596);
  });
});

test('search function test#2', () => {
  const inputList = {};
  inputList.query = 'eggs';
  inputList.number = 10;
  inputList.offset = 0;
  inputList.sort = '';
  inputList.recipeNutrition = 'true';
  inputList.cuisineFilter = 'Italian';
  inputList.dietFilter = '';
  inputList.timeFilter = '';
  inputList.typeFilter = '';

  return search(inputList).then((value) => {
    expect(value.totalResults).toBe(108);
  });
});

test('search function test#3', () => {
  const inputList = {};
  inputList.query = '';
  inputList.number = 10;
  inputList.offset = 0;
  inputList.sort = '';
  inputList.recipeNutrition = 'true';
  inputList.cuisineFilter = '';
  inputList.dietFilter = 'Vegan';
  inputList.timeFilter = '';
  inputList.typeFilter = '';

  return search(inputList).then((value) => {
    expect(value.totalResults).toBe(657);
  });
});

test('search function test#4', () => {
  const inputList = {};
  inputList.query = '';
  inputList.number = 10;
  inputList.offset = 0;
  inputList.sort = '';
  inputList.recipeNutrition = 'true';
  inputList.cuisineFilter = '';
  inputList.dietFilter = '';
  inputList.timeFilter = '';
  inputList.typeFilter = '';
  return search(inputList).then((value) => {
    expect(value.totalResults).toBe(5076);
  });
});

test('search function test#5', () => {
  const inputList = {};
  inputList.query = 'thiswillgivenoresults';
  inputList.number = 10;
  inputList.offset = 0;
  inputList.sort = '';
  inputList.recipeNutrition = 'true';
  inputList.cuisineFilter = 'Italian';
  inputList.dietFilter = '';
  inputList.timeFilter = '';
  inputList.typeFilter = '';
  return search(inputList).then((value) => {
    expect(value.totalResults).toBe(0);
  });
});
*/
