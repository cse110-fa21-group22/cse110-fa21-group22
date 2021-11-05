'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WineApi = exports.RecipesApi = exports.ProductsApi = exports.MiscApi = exports.MenuItemsApi = exports.MealPlanningApi = exports.IngredientsApi = exports.RecipesParseIngredientsNutritionWeightPerServing = exports.RecipesParseIngredientsNutritionProperties = exports.RecipesParseIngredientsNutritionNutrients = exports.RecipesParseIngredientsNutritionCaloricBreakdown = exports.RecipesParseIngredientsNutrition = exports.RecipesParseIngredientsEstimatedCost = exports.RecipesFindByIngredientsMissedIngredients = exports.InlineResponse200Results = exports.InlineResponse2009 = exports.InlineResponse2008 = exports.InlineResponse2007 = exports.InlineResponse2006Recipes = exports.InlineResponse2006 = exports.InlineResponse20057Suggests = exports.InlineResponse20057 = exports.InlineResponse20056 = exports.InlineResponse20055 = exports.InlineResponse20054Videos = exports.InlineResponse20054 = exports.InlineResponse20053SearchResults = exports.InlineResponse20053Results = exports.InlineResponse20053 = exports.InlineResponse20052 = exports.InlineResponse20051 = exports.InlineResponse20050 = exports.InlineResponse2005 = exports.InlineResponse20049Recipes = exports.InlineResponse20049NutritionCaloriesConfidenceRange95Percent = exports.InlineResponse20049NutritionCalories = exports.InlineResponse20049Nutrition = exports.InlineResponse20049Category = exports.InlineResponse20049 = exports.InlineResponse20048 = exports.InlineResponse20047RecommendedWines = undefined;
exports.InlineResponse20047 = exports.InlineResponse20046 = exports.InlineResponse20045ProductMatches = exports.InlineResponse20045 = exports.InlineResponse20044 = exports.InlineResponse20043 = exports.InlineResponse20042Measures = exports.InlineResponse20042Items = exports.InlineResponse20042Aisles = exports.InlineResponse20042 = exports.InlineResponse20041Value = exports.InlineResponse20041Items = exports.InlineResponse20041Days = exports.InlineResponse20041 = exports.InlineResponse20040Value = exports.InlineResponse20040Items = exports.InlineResponse20040 = exports.InlineResponse2004 = exports.InlineResponse2003WinePairingProductMatches = exports.InlineResponse2003WinePairing = exports.InlineResponse2003MeasuresMetric = exports.InlineResponse2003Measures = exports.InlineResponse2003ExtendedIngredients = exports.InlineResponse20039 = exports.InlineResponse20038Value = exports.InlineResponse20038NutritionSummaryNutrients = exports.InlineResponse20038NutritionSummary = exports.InlineResponse20038Items = exports.InlineResponse20038Days = exports.InlineResponse20038 = exports.InlineResponse20037Nutrients = exports.InlineResponse20037 = exports.InlineResponse20036 = exports.InlineResponse20035MenuItems = exports.InlineResponse20035 = exports.InlineResponse20034 = exports.InlineResponse20033 = exports.InlineResponse20032Results = exports.InlineResponse20032 = exports.InlineResponse20031ComparableProductsProtein = exports.InlineResponse20031ComparableProducts = exports.InlineResponse20031 = exports.InlineResponse20030Ingredients = exports.InlineResponse20030 = exports.InlineResponse2003 = exports.InlineResponse20029CustomFoods = exports.InlineResponse20029 = exports.InlineResponse20028Servings = exports.InlineResponse20028Nutrition = exports.InlineResponse20028Ingredients = exports.InlineResponse20028 = exports.InlineResponse20027 = exports.InlineResponse20026 = exports.InlineResponse20025Results = exports.InlineResponse20025 = exports.InlineResponse20024 = exports.InlineResponse20023Ingredients = exports.InlineResponse20023 = exports.InlineResponse20022Nutrition = exports.InlineResponse20022 = exports.InlineResponse20021CaloriesConfidenceRange95Percent = exports.InlineResponse20021Calories = exports.InlineResponse20021 = exports.InlineResponse20020 = exports.InlineResponse2002 = exports.InlineResponse20019 = exports.InlineResponse20018Ingredients = exports.InlineResponse20018Dishes = exports.InlineResponse20018 = exports.InlineResponse20017 = exports.InlineResponse20016 = exports.InlineResponse20015 = exports.InlineResponse20014 = exports.InlineResponse20013Steps = exports.InlineResponse20013ParsedInstructions = exports.InlineResponse20013Ingredients1 = exports.InlineResponse20013Ingredients = exports.InlineResponse20013 = exports.InlineResponse20012 = exports.InlineResponse20011Ingredients = exports.InlineResponse20011 = exports.InlineResponse20010Ingredients = exports.InlineResponse20010AmountMetric = exports.InlineResponse20010Amount = exports.InlineResponse20010 = exports.InlineResponse2001 = exports.InlineResponse200 = exports.InlineObject9 = exports.InlineObject8 = exports.InlineObject7 = exports.InlineObject6 = exports.InlineObject5 = exports.InlineObject4 = exports.InlineObject3 = exports.InlineObject2 = exports.InlineObject10 = exports.InlineObject1 = exports.InlineObject = exports.FoodIngredientsMapProducts = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _FoodIngredientsMapProducts = require('./com.spoonacular.client.model/FoodIngredientsMapProducts');

var _FoodIngredientsMapProducts2 = _interopRequireDefault(_FoodIngredientsMapProducts);

var _InlineObject = require('./com.spoonacular.client.model/InlineObject');

var _InlineObject2 = _interopRequireDefault(_InlineObject);

var _InlineObject3 = require('./com.spoonacular.client.model/InlineObject1');

var _InlineObject4 = _interopRequireDefault(_InlineObject3);

var _InlineObject5 = require('./com.spoonacular.client.model/InlineObject10');

var _InlineObject6 = _interopRequireDefault(_InlineObject5);

var _InlineObject7 = require('./com.spoonacular.client.model/InlineObject2');

var _InlineObject8 = _interopRequireDefault(_InlineObject7);

var _InlineObject9 = require('./com.spoonacular.client.model/InlineObject3');

var _InlineObject10 = _interopRequireDefault(_InlineObject9);

var _InlineObject11 = require('./com.spoonacular.client.model/InlineObject4');

var _InlineObject12 = _interopRequireDefault(_InlineObject11);

var _InlineObject13 = require('./com.spoonacular.client.model/InlineObject5');

var _InlineObject14 = _interopRequireDefault(_InlineObject13);

var _InlineObject15 = require('./com.spoonacular.client.model/InlineObject6');

var _InlineObject16 = _interopRequireDefault(_InlineObject15);

var _InlineObject17 = require('./com.spoonacular.client.model/InlineObject7');

var _InlineObject18 = _interopRequireDefault(_InlineObject17);

var _InlineObject19 = require('./com.spoonacular.client.model/InlineObject8');

var _InlineObject20 = _interopRequireDefault(_InlineObject19);

var _InlineObject21 = require('./com.spoonacular.client.model/InlineObject9');

var _InlineObject22 = _interopRequireDefault(_InlineObject21);

var _InlineResponse = require('./com.spoonacular.client.model/InlineResponse200');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('./com.spoonacular.client.model/InlineResponse2001');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('./com.spoonacular.client.model/InlineResponse20010');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _InlineResponse20010Amount = require('./com.spoonacular.client.model/InlineResponse20010Amount');

var _InlineResponse20010Amount2 = _interopRequireDefault(_InlineResponse20010Amount);

var _InlineResponse20010AmountMetric = require('./com.spoonacular.client.model/InlineResponse20010AmountMetric');

var _InlineResponse20010AmountMetric2 = _interopRequireDefault(_InlineResponse20010AmountMetric);

var _InlineResponse20010Ingredients = require('./com.spoonacular.client.model/InlineResponse20010Ingredients');

var _InlineResponse20010Ingredients2 = _interopRequireDefault(_InlineResponse20010Ingredients);

var _InlineResponse7 = require('./com.spoonacular.client.model/InlineResponse20011');

var _InlineResponse8 = _interopRequireDefault(_InlineResponse7);

var _InlineResponse20011Ingredients = require('./com.spoonacular.client.model/InlineResponse20011Ingredients');

var _InlineResponse20011Ingredients2 = _interopRequireDefault(_InlineResponse20011Ingredients);

var _InlineResponse9 = require('./com.spoonacular.client.model/InlineResponse20012');

var _InlineResponse10 = _interopRequireDefault(_InlineResponse9);

var _InlineResponse11 = require('./com.spoonacular.client.model/InlineResponse20013');

var _InlineResponse12 = _interopRequireDefault(_InlineResponse11);

var _InlineResponse20013Ingredients = require('./com.spoonacular.client.model/InlineResponse20013Ingredients');

var _InlineResponse20013Ingredients2 = _interopRequireDefault(_InlineResponse20013Ingredients);

var _InlineResponse20013Ingredients3 = require('./com.spoonacular.client.model/InlineResponse20013Ingredients1');

var _InlineResponse20013Ingredients4 = _interopRequireDefault(_InlineResponse20013Ingredients3);

var _InlineResponse20013ParsedInstructions = require('./com.spoonacular.client.model/InlineResponse20013ParsedInstructions');

var _InlineResponse20013ParsedInstructions2 = _interopRequireDefault(_InlineResponse20013ParsedInstructions);

var _InlineResponse20013Steps = require('./com.spoonacular.client.model/InlineResponse20013Steps');

var _InlineResponse20013Steps2 = _interopRequireDefault(_InlineResponse20013Steps);

var _InlineResponse13 = require('./com.spoonacular.client.model/InlineResponse20014');

var _InlineResponse14 = _interopRequireDefault(_InlineResponse13);

var _InlineResponse15 = require('./com.spoonacular.client.model/InlineResponse20015');

var _InlineResponse16 = _interopRequireDefault(_InlineResponse15);

var _InlineResponse17 = require('./com.spoonacular.client.model/InlineResponse20016');

var _InlineResponse18 = _interopRequireDefault(_InlineResponse17);

var _InlineResponse19 = require('./com.spoonacular.client.model/InlineResponse20017');

var _InlineResponse20 = _interopRequireDefault(_InlineResponse19);

var _InlineResponse21 = require('./com.spoonacular.client.model/InlineResponse20018');

var _InlineResponse22 = _interopRequireDefault(_InlineResponse21);

var _InlineResponse20018Dishes = require('./com.spoonacular.client.model/InlineResponse20018Dishes');

var _InlineResponse20018Dishes2 = _interopRequireDefault(_InlineResponse20018Dishes);

var _InlineResponse20018Ingredients = require('./com.spoonacular.client.model/InlineResponse20018Ingredients');

var _InlineResponse20018Ingredients2 = _interopRequireDefault(_InlineResponse20018Ingredients);

var _InlineResponse23 = require('./com.spoonacular.client.model/InlineResponse20019');

var _InlineResponse24 = _interopRequireDefault(_InlineResponse23);

var _InlineResponse25 = require('./com.spoonacular.client.model/InlineResponse2002');

var _InlineResponse26 = _interopRequireDefault(_InlineResponse25);

var _InlineResponse27 = require('./com.spoonacular.client.model/InlineResponse20020');

var _InlineResponse28 = _interopRequireDefault(_InlineResponse27);

var _InlineResponse29 = require('./com.spoonacular.client.model/InlineResponse20021');

var _InlineResponse30 = _interopRequireDefault(_InlineResponse29);

var _InlineResponse20021Calories = require('./com.spoonacular.client.model/InlineResponse20021Calories');

var _InlineResponse20021Calories2 = _interopRequireDefault(_InlineResponse20021Calories);

var _InlineResponse20021CaloriesConfidenceRange95Percent = require('./com.spoonacular.client.model/InlineResponse20021CaloriesConfidenceRange95Percent');

var _InlineResponse20021CaloriesConfidenceRange95Percent2 = _interopRequireDefault(_InlineResponse20021CaloriesConfidenceRange95Percent);

var _InlineResponse31 = require('./com.spoonacular.client.model/InlineResponse20022');

var _InlineResponse32 = _interopRequireDefault(_InlineResponse31);

var _InlineResponse20022Nutrition = require('./com.spoonacular.client.model/InlineResponse20022Nutrition');

var _InlineResponse20022Nutrition2 = _interopRequireDefault(_InlineResponse20022Nutrition);

var _InlineResponse33 = require('./com.spoonacular.client.model/InlineResponse20023');

var _InlineResponse34 = _interopRequireDefault(_InlineResponse33);

var _InlineResponse20023Ingredients = require('./com.spoonacular.client.model/InlineResponse20023Ingredients');

var _InlineResponse20023Ingredients2 = _interopRequireDefault(_InlineResponse20023Ingredients);

var _InlineResponse35 = require('./com.spoonacular.client.model/InlineResponse20024');

var _InlineResponse36 = _interopRequireDefault(_InlineResponse35);

var _InlineResponse37 = require('./com.spoonacular.client.model/InlineResponse20025');

var _InlineResponse38 = _interopRequireDefault(_InlineResponse37);

var _InlineResponse20025Results = require('./com.spoonacular.client.model/InlineResponse20025Results');

var _InlineResponse20025Results2 = _interopRequireDefault(_InlineResponse20025Results);

var _InlineResponse39 = require('./com.spoonacular.client.model/InlineResponse20026');

var _InlineResponse40 = _interopRequireDefault(_InlineResponse39);

var _InlineResponse41 = require('./com.spoonacular.client.model/InlineResponse20027');

var _InlineResponse42 = _interopRequireDefault(_InlineResponse41);

var _InlineResponse43 = require('./com.spoonacular.client.model/InlineResponse20028');

var _InlineResponse44 = _interopRequireDefault(_InlineResponse43);

var _InlineResponse20028Ingredients = require('./com.spoonacular.client.model/InlineResponse20028Ingredients');

var _InlineResponse20028Ingredients2 = _interopRequireDefault(_InlineResponse20028Ingredients);

var _InlineResponse20028Nutrition = require('./com.spoonacular.client.model/InlineResponse20028Nutrition');

var _InlineResponse20028Nutrition2 = _interopRequireDefault(_InlineResponse20028Nutrition);

var _InlineResponse20028Servings = require('./com.spoonacular.client.model/InlineResponse20028Servings');

var _InlineResponse20028Servings2 = _interopRequireDefault(_InlineResponse20028Servings);

var _InlineResponse45 = require('./com.spoonacular.client.model/InlineResponse20029');

var _InlineResponse46 = _interopRequireDefault(_InlineResponse45);

var _InlineResponse20029CustomFoods = require('./com.spoonacular.client.model/InlineResponse20029CustomFoods');

var _InlineResponse20029CustomFoods2 = _interopRequireDefault(_InlineResponse20029CustomFoods);

var _InlineResponse47 = require('./com.spoonacular.client.model/InlineResponse2003');

var _InlineResponse48 = _interopRequireDefault(_InlineResponse47);

var _InlineResponse49 = require('./com.spoonacular.client.model/InlineResponse20030');

var _InlineResponse50 = _interopRequireDefault(_InlineResponse49);

var _InlineResponse20030Ingredients = require('./com.spoonacular.client.model/InlineResponse20030Ingredients');

var _InlineResponse20030Ingredients2 = _interopRequireDefault(_InlineResponse20030Ingredients);

var _InlineResponse51 = require('./com.spoonacular.client.model/InlineResponse20031');

var _InlineResponse52 = _interopRequireDefault(_InlineResponse51);

var _InlineResponse20031ComparableProducts = require('./com.spoonacular.client.model/InlineResponse20031ComparableProducts');

var _InlineResponse20031ComparableProducts2 = _interopRequireDefault(_InlineResponse20031ComparableProducts);

var _InlineResponse20031ComparableProductsProtein = require('./com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein');

var _InlineResponse20031ComparableProductsProtein2 = _interopRequireDefault(_InlineResponse20031ComparableProductsProtein);

var _InlineResponse53 = require('./com.spoonacular.client.model/InlineResponse20032');

var _InlineResponse54 = _interopRequireDefault(_InlineResponse53);

var _InlineResponse20032Results = require('./com.spoonacular.client.model/InlineResponse20032Results');

var _InlineResponse20032Results2 = _interopRequireDefault(_InlineResponse20032Results);

var _InlineResponse55 = require('./com.spoonacular.client.model/InlineResponse20033');

var _InlineResponse56 = _interopRequireDefault(_InlineResponse55);

var _InlineResponse57 = require('./com.spoonacular.client.model/InlineResponse20034');

var _InlineResponse58 = _interopRequireDefault(_InlineResponse57);

var _InlineResponse59 = require('./com.spoonacular.client.model/InlineResponse20035');

var _InlineResponse60 = _interopRequireDefault(_InlineResponse59);

var _InlineResponse20035MenuItems = require('./com.spoonacular.client.model/InlineResponse20035MenuItems');

var _InlineResponse20035MenuItems2 = _interopRequireDefault(_InlineResponse20035MenuItems);

var _InlineResponse61 = require('./com.spoonacular.client.model/InlineResponse20036');

var _InlineResponse62 = _interopRequireDefault(_InlineResponse61);

var _InlineResponse63 = require('./com.spoonacular.client.model/InlineResponse20037');

var _InlineResponse64 = _interopRequireDefault(_InlineResponse63);

var _InlineResponse20037Nutrients = require('./com.spoonacular.client.model/InlineResponse20037Nutrients');

var _InlineResponse20037Nutrients2 = _interopRequireDefault(_InlineResponse20037Nutrients);

var _InlineResponse65 = require('./com.spoonacular.client.model/InlineResponse20038');

var _InlineResponse66 = _interopRequireDefault(_InlineResponse65);

var _InlineResponse20038Days = require('./com.spoonacular.client.model/InlineResponse20038Days');

var _InlineResponse20038Days2 = _interopRequireDefault(_InlineResponse20038Days);

var _InlineResponse20038Items = require('./com.spoonacular.client.model/InlineResponse20038Items');

var _InlineResponse20038Items2 = _interopRequireDefault(_InlineResponse20038Items);

var _InlineResponse20038NutritionSummary = require('./com.spoonacular.client.model/InlineResponse20038NutritionSummary');

var _InlineResponse20038NutritionSummary2 = _interopRequireDefault(_InlineResponse20038NutritionSummary);

var _InlineResponse20038NutritionSummaryNutrients = require('./com.spoonacular.client.model/InlineResponse20038NutritionSummaryNutrients');

var _InlineResponse20038NutritionSummaryNutrients2 = _interopRequireDefault(_InlineResponse20038NutritionSummaryNutrients);

var _InlineResponse20038Value = require('./com.spoonacular.client.model/InlineResponse20038Value');

var _InlineResponse20038Value2 = _interopRequireDefault(_InlineResponse20038Value);

var _InlineResponse67 = require('./com.spoonacular.client.model/InlineResponse20039');

var _InlineResponse68 = _interopRequireDefault(_InlineResponse67);

var _InlineResponse2003ExtendedIngredients = require('./com.spoonacular.client.model/InlineResponse2003ExtendedIngredients');

var _InlineResponse2003ExtendedIngredients2 = _interopRequireDefault(_InlineResponse2003ExtendedIngredients);

var _InlineResponse2003Measures = require('./com.spoonacular.client.model/InlineResponse2003Measures');

var _InlineResponse2003Measures2 = _interopRequireDefault(_InlineResponse2003Measures);

var _InlineResponse2003MeasuresMetric = require('./com.spoonacular.client.model/InlineResponse2003MeasuresMetric');

var _InlineResponse2003MeasuresMetric2 = _interopRequireDefault(_InlineResponse2003MeasuresMetric);

var _InlineResponse2003WinePairing = require('./com.spoonacular.client.model/InlineResponse2003WinePairing');

var _InlineResponse2003WinePairing2 = _interopRequireDefault(_InlineResponse2003WinePairing);

var _InlineResponse2003WinePairingProductMatches = require('./com.spoonacular.client.model/InlineResponse2003WinePairingProductMatches');

var _InlineResponse2003WinePairingProductMatches2 = _interopRequireDefault(_InlineResponse2003WinePairingProductMatches);

var _InlineResponse69 = require('./com.spoonacular.client.model/InlineResponse2004');

var _InlineResponse70 = _interopRequireDefault(_InlineResponse69);

var _InlineResponse71 = require('./com.spoonacular.client.model/InlineResponse20040');

var _InlineResponse72 = _interopRequireDefault(_InlineResponse71);

var _InlineResponse20040Items = require('./com.spoonacular.client.model/InlineResponse20040Items');

var _InlineResponse20040Items2 = _interopRequireDefault(_InlineResponse20040Items);

var _InlineResponse20040Value = require('./com.spoonacular.client.model/InlineResponse20040Value');

var _InlineResponse20040Value2 = _interopRequireDefault(_InlineResponse20040Value);

var _InlineResponse73 = require('./com.spoonacular.client.model/InlineResponse20041');

var _InlineResponse74 = _interopRequireDefault(_InlineResponse73);

var _InlineResponse20041Days = require('./com.spoonacular.client.model/InlineResponse20041Days');

var _InlineResponse20041Days2 = _interopRequireDefault(_InlineResponse20041Days);

var _InlineResponse20041Items = require('./com.spoonacular.client.model/InlineResponse20041Items');

var _InlineResponse20041Items2 = _interopRequireDefault(_InlineResponse20041Items);

var _InlineResponse20041Value = require('./com.spoonacular.client.model/InlineResponse20041Value');

var _InlineResponse20041Value2 = _interopRequireDefault(_InlineResponse20041Value);

var _InlineResponse75 = require('./com.spoonacular.client.model/InlineResponse20042');

var _InlineResponse76 = _interopRequireDefault(_InlineResponse75);

var _InlineResponse20042Aisles = require('./com.spoonacular.client.model/InlineResponse20042Aisles');

var _InlineResponse20042Aisles2 = _interopRequireDefault(_InlineResponse20042Aisles);

var _InlineResponse20042Items = require('./com.spoonacular.client.model/InlineResponse20042Items');

var _InlineResponse20042Items2 = _interopRequireDefault(_InlineResponse20042Items);

var _InlineResponse20042Measures = require('./com.spoonacular.client.model/InlineResponse20042Measures');

var _InlineResponse20042Measures2 = _interopRequireDefault(_InlineResponse20042Measures);

var _InlineResponse77 = require('./com.spoonacular.client.model/InlineResponse20043');

var _InlineResponse78 = _interopRequireDefault(_InlineResponse77);

var _InlineResponse79 = require('./com.spoonacular.client.model/InlineResponse20044');

var _InlineResponse80 = _interopRequireDefault(_InlineResponse79);

var _InlineResponse81 = require('./com.spoonacular.client.model/InlineResponse20045');

var _InlineResponse82 = _interopRequireDefault(_InlineResponse81);

var _InlineResponse20045ProductMatches = require('./com.spoonacular.client.model/InlineResponse20045ProductMatches');

var _InlineResponse20045ProductMatches2 = _interopRequireDefault(_InlineResponse20045ProductMatches);

var _InlineResponse83 = require('./com.spoonacular.client.model/InlineResponse20046');

var _InlineResponse84 = _interopRequireDefault(_InlineResponse83);

var _InlineResponse85 = require('./com.spoonacular.client.model/InlineResponse20047');

var _InlineResponse86 = _interopRequireDefault(_InlineResponse85);

var _InlineResponse20047RecommendedWines = require('./com.spoonacular.client.model/InlineResponse20047RecommendedWines');

var _InlineResponse20047RecommendedWines2 = _interopRequireDefault(_InlineResponse20047RecommendedWines);

var _InlineResponse87 = require('./com.spoonacular.client.model/InlineResponse20048');

var _InlineResponse88 = _interopRequireDefault(_InlineResponse87);

var _InlineResponse89 = require('./com.spoonacular.client.model/InlineResponse20049');

var _InlineResponse90 = _interopRequireDefault(_InlineResponse89);

var _InlineResponse20049Category = require('./com.spoonacular.client.model/InlineResponse20049Category');

var _InlineResponse20049Category2 = _interopRequireDefault(_InlineResponse20049Category);

var _InlineResponse20049Nutrition = require('./com.spoonacular.client.model/InlineResponse20049Nutrition');

var _InlineResponse20049Nutrition2 = _interopRequireDefault(_InlineResponse20049Nutrition);

var _InlineResponse20049NutritionCalories = require('./com.spoonacular.client.model/InlineResponse20049NutritionCalories');

var _InlineResponse20049NutritionCalories2 = _interopRequireDefault(_InlineResponse20049NutritionCalories);

var _InlineResponse20049NutritionCaloriesConfidenceRange95Percent = require('./com.spoonacular.client.model/InlineResponse20049NutritionCaloriesConfidenceRange95Percent');

var _InlineResponse20049NutritionCaloriesConfidenceRange95Percent2 = _interopRequireDefault(_InlineResponse20049NutritionCaloriesConfidenceRange95Percent);

var _InlineResponse20049Recipes = require('./com.spoonacular.client.model/InlineResponse20049Recipes');

var _InlineResponse20049Recipes2 = _interopRequireDefault(_InlineResponse20049Recipes);

var _InlineResponse91 = require('./com.spoonacular.client.model/InlineResponse2005');

var _InlineResponse92 = _interopRequireDefault(_InlineResponse91);

var _InlineResponse93 = require('./com.spoonacular.client.model/InlineResponse20050');

var _InlineResponse94 = _interopRequireDefault(_InlineResponse93);

var _InlineResponse95 = require('./com.spoonacular.client.model/InlineResponse20051');

var _InlineResponse96 = _interopRequireDefault(_InlineResponse95);

var _InlineResponse97 = require('./com.spoonacular.client.model/InlineResponse20052');

var _InlineResponse98 = _interopRequireDefault(_InlineResponse97);

var _InlineResponse99 = require('./com.spoonacular.client.model/InlineResponse20053');

var _InlineResponse100 = _interopRequireDefault(_InlineResponse99);

var _InlineResponse20053Results = require('./com.spoonacular.client.model/InlineResponse20053Results');

var _InlineResponse20053Results2 = _interopRequireDefault(_InlineResponse20053Results);

var _InlineResponse20053SearchResults = require('./com.spoonacular.client.model/InlineResponse20053SearchResults');

var _InlineResponse20053SearchResults2 = _interopRequireDefault(_InlineResponse20053SearchResults);

var _InlineResponse101 = require('./com.spoonacular.client.model/InlineResponse20054');

var _InlineResponse102 = _interopRequireDefault(_InlineResponse101);

var _InlineResponse20054Videos = require('./com.spoonacular.client.model/InlineResponse20054Videos');

var _InlineResponse20054Videos2 = _interopRequireDefault(_InlineResponse20054Videos);

var _InlineResponse103 = require('./com.spoonacular.client.model/InlineResponse20055');

var _InlineResponse104 = _interopRequireDefault(_InlineResponse103);

var _InlineResponse105 = require('./com.spoonacular.client.model/InlineResponse20056');

var _InlineResponse106 = _interopRequireDefault(_InlineResponse105);

var _InlineResponse107 = require('./com.spoonacular.client.model/InlineResponse20057');

var _InlineResponse108 = _interopRequireDefault(_InlineResponse107);

var _InlineResponse20057Suggests = require('./com.spoonacular.client.model/InlineResponse20057Suggests');

var _InlineResponse20057Suggests2 = _interopRequireDefault(_InlineResponse20057Suggests);

var _InlineResponse109 = require('./com.spoonacular.client.model/InlineResponse2006');

var _InlineResponse110 = _interopRequireDefault(_InlineResponse109);

var _InlineResponse2006Recipes = require('./com.spoonacular.client.model/InlineResponse2006Recipes');

var _InlineResponse2006Recipes2 = _interopRequireDefault(_InlineResponse2006Recipes);

var _InlineResponse111 = require('./com.spoonacular.client.model/InlineResponse2007');

var _InlineResponse112 = _interopRequireDefault(_InlineResponse111);

var _InlineResponse113 = require('./com.spoonacular.client.model/InlineResponse2008');

var _InlineResponse114 = _interopRequireDefault(_InlineResponse113);

var _InlineResponse115 = require('./com.spoonacular.client.model/InlineResponse2009');

var _InlineResponse116 = _interopRequireDefault(_InlineResponse115);

var _InlineResponse200Results = require('./com.spoonacular.client.model/InlineResponse200Results');

var _InlineResponse200Results2 = _interopRequireDefault(_InlineResponse200Results);

var _RecipesFindByIngredientsMissedIngredients = require('./com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients');

var _RecipesFindByIngredientsMissedIngredients2 = _interopRequireDefault(_RecipesFindByIngredientsMissedIngredients);

var _RecipesParseIngredientsEstimatedCost = require('./com.spoonacular.client.model/RecipesParseIngredientsEstimatedCost');

var _RecipesParseIngredientsEstimatedCost2 = _interopRequireDefault(_RecipesParseIngredientsEstimatedCost);

var _RecipesParseIngredientsNutrition = require('./com.spoonacular.client.model/RecipesParseIngredientsNutrition');

var _RecipesParseIngredientsNutrition2 = _interopRequireDefault(_RecipesParseIngredientsNutrition);

var _RecipesParseIngredientsNutritionCaloricBreakdown = require('./com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown');

var _RecipesParseIngredientsNutritionCaloricBreakdown2 = _interopRequireDefault(_RecipesParseIngredientsNutritionCaloricBreakdown);

var _RecipesParseIngredientsNutritionNutrients = require('./com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients');

var _RecipesParseIngredientsNutritionNutrients2 = _interopRequireDefault(_RecipesParseIngredientsNutritionNutrients);

var _RecipesParseIngredientsNutritionProperties = require('./com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties');

var _RecipesParseIngredientsNutritionProperties2 = _interopRequireDefault(_RecipesParseIngredientsNutritionProperties);

var _RecipesParseIngredientsNutritionWeightPerServing = require('./com.spoonacular.client.model/RecipesParseIngredientsNutritionWeightPerServing');

var _RecipesParseIngredientsNutritionWeightPerServing2 = _interopRequireDefault(_RecipesParseIngredientsNutritionWeightPerServing);

var _IngredientsApi = require('./com.spoonacular/IngredientsApi');

var _IngredientsApi2 = _interopRequireDefault(_IngredientsApi);

var _MealPlanningApi = require('./com.spoonacular/MealPlanningApi');

var _MealPlanningApi2 = _interopRequireDefault(_MealPlanningApi);

var _MenuItemsApi = require('./com.spoonacular/MenuItemsApi');

var _MenuItemsApi2 = _interopRequireDefault(_MenuItemsApi);

var _MiscApi = require('./com.spoonacular/MiscApi');

var _MiscApi2 = _interopRequireDefault(_MiscApi);

var _ProductsApi = require('./com.spoonacular/ProductsApi');

var _ProductsApi2 = _interopRequireDefault(_ProductsApi);

var _RecipesApi = require('./com.spoonacular/RecipesApi');

var _RecipesApi2 = _interopRequireDefault(_RecipesApi);

var _WineApi = require('./com.spoonacular/WineApi');

var _WineApi2 = _interopRequireDefault(_WineApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* The_spoonacular_Nutrition_Recipe_and_Food_API_allows_you_to_access_over_380000_recipes_thousands_of_ingredients_800000_food_products_and_100000_menu_items__Our_food_ontology_and_semantic_recipe_search_engine_makes_it_possible_to_search_for_recipes_using_natural_language_queries_such_as_gluten_free_brownies_without_sugar_or_low_fat_vegan_cupcakes__You_can_automatically_calculate_the_nutritional_information_for_any_recipe_analyze_recipe_costs_visualize_ingredient_lists_find_recipes_for_whats_in_your_fridge_find_recipes_based_on_special_diets_nutritional_requirements_or_favorite_ingredients_classify_recipes_into_types_and_cuisines_convert_ingredient_amounts_or_even_compute_an_entire_meal_plan__With_our_powerful_API_you_can_create_many_kinds_of_food_and_especially_nutrition_apps_Special_diets_dietary_requirements_currently_available_include_vegan_vegetarian_pescetarian_gluten_free_grain_free_dairy_free_high_protein_whole_30_low_sodium_low_carb_Paleo_ketogenic_FODMAP_and_Primal_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SpoonacularApi = require('com.spoonacular.client/index'); // See note below*.
* var xxxSvc = new SpoonacularApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SpoonacularApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['com.spoonacular.client/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SpoonacularApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SpoonacularApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module com.spoonacular.client/index
* @version 1.0
*/
exports.ApiClient = _ApiClient2.default;
exports.FoodIngredientsMapProducts = _FoodIngredientsMapProducts2.default;
exports.InlineObject = _InlineObject2.default;
exports.InlineObject1 = _InlineObject4.default;
exports.InlineObject10 = _InlineObject6.default;
exports.InlineObject2 = _InlineObject8.default;
exports.InlineObject3 = _InlineObject10.default;
exports.InlineObject4 = _InlineObject12.default;
exports.InlineObject5 = _InlineObject14.default;
exports.InlineObject6 = _InlineObject16.default;
exports.InlineObject7 = _InlineObject18.default;
exports.InlineObject8 = _InlineObject20.default;
exports.InlineObject9 = _InlineObject22.default;
exports.InlineResponse200 = _InlineResponse2.default;
exports.InlineResponse2001 = _InlineResponse4.default;
exports.InlineResponse20010 = _InlineResponse6.default;
exports.InlineResponse20010Amount = _InlineResponse20010Amount2.default;
exports.InlineResponse20010AmountMetric = _InlineResponse20010AmountMetric2.default;
exports.InlineResponse20010Ingredients = _InlineResponse20010Ingredients2.default;
exports.InlineResponse20011 = _InlineResponse8.default;
exports.InlineResponse20011Ingredients = _InlineResponse20011Ingredients2.default;
exports.InlineResponse20012 = _InlineResponse10.default;
exports.InlineResponse20013 = _InlineResponse12.default;
exports.InlineResponse20013Ingredients = _InlineResponse20013Ingredients2.default;
exports.InlineResponse20013Ingredients1 = _InlineResponse20013Ingredients4.default;
exports.InlineResponse20013ParsedInstructions = _InlineResponse20013ParsedInstructions2.default;
exports.InlineResponse20013Steps = _InlineResponse20013Steps2.default;
exports.InlineResponse20014 = _InlineResponse14.default;
exports.InlineResponse20015 = _InlineResponse16.default;
exports.InlineResponse20016 = _InlineResponse18.default;
exports.InlineResponse20017 = _InlineResponse20.default;
exports.InlineResponse20018 = _InlineResponse22.default;
exports.InlineResponse20018Dishes = _InlineResponse20018Dishes2.default;
exports.InlineResponse20018Ingredients = _InlineResponse20018Ingredients2.default;
exports.InlineResponse20019 = _InlineResponse24.default;
exports.InlineResponse2002 = _InlineResponse26.default;
exports.InlineResponse20020 = _InlineResponse28.default;
exports.InlineResponse20021 = _InlineResponse30.default;
exports.InlineResponse20021Calories = _InlineResponse20021Calories2.default;
exports.InlineResponse20021CaloriesConfidenceRange95Percent = _InlineResponse20021CaloriesConfidenceRange95Percent2.default;
exports.InlineResponse20022 = _InlineResponse32.default;
exports.InlineResponse20022Nutrition = _InlineResponse20022Nutrition2.default;
exports.InlineResponse20023 = _InlineResponse34.default;
exports.InlineResponse20023Ingredients = _InlineResponse20023Ingredients2.default;
exports.InlineResponse20024 = _InlineResponse36.default;
exports.InlineResponse20025 = _InlineResponse38.default;
exports.InlineResponse20025Results = _InlineResponse20025Results2.default;
exports.InlineResponse20026 = _InlineResponse40.default;
exports.InlineResponse20027 = _InlineResponse42.default;
exports.InlineResponse20028 = _InlineResponse44.default;
exports.InlineResponse20028Ingredients = _InlineResponse20028Ingredients2.default;
exports.InlineResponse20028Nutrition = _InlineResponse20028Nutrition2.default;
exports.InlineResponse20028Servings = _InlineResponse20028Servings2.default;
exports.InlineResponse20029 = _InlineResponse46.default;
exports.InlineResponse20029CustomFoods = _InlineResponse20029CustomFoods2.default;
exports.InlineResponse2003 = _InlineResponse48.default;
exports.InlineResponse20030 = _InlineResponse50.default;
exports.InlineResponse20030Ingredients = _InlineResponse20030Ingredients2.default;
exports.InlineResponse20031 = _InlineResponse52.default;
exports.InlineResponse20031ComparableProducts = _InlineResponse20031ComparableProducts2.default;
exports.InlineResponse20031ComparableProductsProtein = _InlineResponse20031ComparableProductsProtein2.default;
exports.InlineResponse20032 = _InlineResponse54.default;
exports.InlineResponse20032Results = _InlineResponse20032Results2.default;
exports.InlineResponse20033 = _InlineResponse56.default;
exports.InlineResponse20034 = _InlineResponse58.default;
exports.InlineResponse20035 = _InlineResponse60.default;
exports.InlineResponse20035MenuItems = _InlineResponse20035MenuItems2.default;
exports.InlineResponse20036 = _InlineResponse62.default;
exports.InlineResponse20037 = _InlineResponse64.default;
exports.InlineResponse20037Nutrients = _InlineResponse20037Nutrients2.default;
exports.InlineResponse20038 = _InlineResponse66.default;
exports.InlineResponse20038Days = _InlineResponse20038Days2.default;
exports.InlineResponse20038Items = _InlineResponse20038Items2.default;
exports.InlineResponse20038NutritionSummary = _InlineResponse20038NutritionSummary2.default;
exports.InlineResponse20038NutritionSummaryNutrients = _InlineResponse20038NutritionSummaryNutrients2.default;
exports.InlineResponse20038Value = _InlineResponse20038Value2.default;
exports.InlineResponse20039 = _InlineResponse68.default;
exports.InlineResponse2003ExtendedIngredients = _InlineResponse2003ExtendedIngredients2.default;
exports.InlineResponse2003Measures = _InlineResponse2003Measures2.default;
exports.InlineResponse2003MeasuresMetric = _InlineResponse2003MeasuresMetric2.default;
exports.InlineResponse2003WinePairing = _InlineResponse2003WinePairing2.default;
exports.InlineResponse2003WinePairingProductMatches = _InlineResponse2003WinePairingProductMatches2.default;
exports.InlineResponse2004 = _InlineResponse70.default;
exports.InlineResponse20040 = _InlineResponse72.default;
exports.InlineResponse20040Items = _InlineResponse20040Items2.default;
exports.InlineResponse20040Value = _InlineResponse20040Value2.default;
exports.InlineResponse20041 = _InlineResponse74.default;
exports.InlineResponse20041Days = _InlineResponse20041Days2.default;
exports.InlineResponse20041Items = _InlineResponse20041Items2.default;
exports.InlineResponse20041Value = _InlineResponse20041Value2.default;
exports.InlineResponse20042 = _InlineResponse76.default;
exports.InlineResponse20042Aisles = _InlineResponse20042Aisles2.default;
exports.InlineResponse20042Items = _InlineResponse20042Items2.default;
exports.InlineResponse20042Measures = _InlineResponse20042Measures2.default;
exports.InlineResponse20043 = _InlineResponse78.default;
exports.InlineResponse20044 = _InlineResponse80.default;
exports.InlineResponse20045 = _InlineResponse82.default;
exports.InlineResponse20045ProductMatches = _InlineResponse20045ProductMatches2.default;
exports.InlineResponse20046 = _InlineResponse84.default;
exports.InlineResponse20047 = _InlineResponse86.default;
exports.InlineResponse20047RecommendedWines = _InlineResponse20047RecommendedWines2.default;
exports.InlineResponse20048 = _InlineResponse88.default;
exports.InlineResponse20049 = _InlineResponse90.default;
exports.InlineResponse20049Category = _InlineResponse20049Category2.default;
exports.InlineResponse20049Nutrition = _InlineResponse20049Nutrition2.default;
exports.InlineResponse20049NutritionCalories = _InlineResponse20049NutritionCalories2.default;
exports.InlineResponse20049NutritionCaloriesConfidenceRange95Percent = _InlineResponse20049NutritionCaloriesConfidenceRange95Percent2.default;
exports.InlineResponse20049Recipes = _InlineResponse20049Recipes2.default;
exports.InlineResponse2005 = _InlineResponse92.default;
exports.InlineResponse20050 = _InlineResponse94.default;
exports.InlineResponse20051 = _InlineResponse96.default;
exports.InlineResponse20052 = _InlineResponse98.default;
exports.InlineResponse20053 = _InlineResponse100.default;
exports.InlineResponse20053Results = _InlineResponse20053Results2.default;
exports.InlineResponse20053SearchResults = _InlineResponse20053SearchResults2.default;
exports.InlineResponse20054 = _InlineResponse102.default;
exports.InlineResponse20054Videos = _InlineResponse20054Videos2.default;
exports.InlineResponse20055 = _InlineResponse104.default;
exports.InlineResponse20056 = _InlineResponse106.default;
exports.InlineResponse20057 = _InlineResponse108.default;
exports.InlineResponse20057Suggests = _InlineResponse20057Suggests2.default;
exports.InlineResponse2006 = _InlineResponse110.default;
exports.InlineResponse2006Recipes = _InlineResponse2006Recipes2.default;
exports.InlineResponse2007 = _InlineResponse112.default;
exports.InlineResponse2008 = _InlineResponse114.default;
exports.InlineResponse2009 = _InlineResponse116.default;
exports.InlineResponse200Results = _InlineResponse200Results2.default;
exports.RecipesFindByIngredientsMissedIngredients = _RecipesFindByIngredientsMissedIngredients2.default;
exports.RecipesParseIngredientsEstimatedCost = _RecipesParseIngredientsEstimatedCost2.default;
exports.RecipesParseIngredientsNutrition = _RecipesParseIngredientsNutrition2.default;
exports.RecipesParseIngredientsNutritionCaloricBreakdown = _RecipesParseIngredientsNutritionCaloricBreakdown2.default;
exports.RecipesParseIngredientsNutritionNutrients = _RecipesParseIngredientsNutritionNutrients2.default;
exports.RecipesParseIngredientsNutritionProperties = _RecipesParseIngredientsNutritionProperties2.default;
exports.RecipesParseIngredientsNutritionWeightPerServing = _RecipesParseIngredientsNutritionWeightPerServing2.default;
exports.IngredientsApi = _IngredientsApi2.default;
exports.MealPlanningApi = _MealPlanningApi2.default;
exports.MenuItemsApi = _MenuItemsApi2.default;
exports.MiscApi = _MiscApi2.default;
exports.ProductsApi = _ProductsApi2.default;
exports.RecipesApi = _RecipesApi2.default;
exports.WineApi = _WineApi2.default; /**
                                      * spoonacular API
                                      * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
                                      *
                                      * The version of the OpenAPI document: 1.0
                                      * Contact: mail@spoonacular.com
                                      *
                                      * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                      * https://openapi-generator.tech
                                      * Do not edit the class manually.
                                      *
                                      */