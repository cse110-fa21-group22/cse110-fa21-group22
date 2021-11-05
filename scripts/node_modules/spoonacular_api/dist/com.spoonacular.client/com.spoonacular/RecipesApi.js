'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _InlineObject = require('../com.spoonacular.client.model/InlineObject');

var _InlineObject2 = _interopRequireDefault(_InlineObject);

var _InlineResponse = require('../com.spoonacular.client.model/InlineResponse200');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('../com.spoonacular.client.model/InlineResponse2001');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('../com.spoonacular.client.model/InlineResponse20010');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _InlineResponse7 = require('../com.spoonacular.client.model/InlineResponse20011');

var _InlineResponse8 = _interopRequireDefault(_InlineResponse7);

var _InlineResponse9 = require('../com.spoonacular.client.model/InlineResponse20012');

var _InlineResponse10 = _interopRequireDefault(_InlineResponse9);

var _InlineResponse11 = require('../com.spoonacular.client.model/InlineResponse20013');

var _InlineResponse12 = _interopRequireDefault(_InlineResponse11);

var _InlineResponse13 = require('../com.spoonacular.client.model/InlineResponse20014');

var _InlineResponse14 = _interopRequireDefault(_InlineResponse13);

var _InlineResponse15 = require('../com.spoonacular.client.model/InlineResponse20015');

var _InlineResponse16 = _interopRequireDefault(_InlineResponse15);

var _InlineResponse17 = require('../com.spoonacular.client.model/InlineResponse20016');

var _InlineResponse18 = _interopRequireDefault(_InlineResponse17);

var _InlineResponse19 = require('../com.spoonacular.client.model/InlineResponse20017');

var _InlineResponse20 = _interopRequireDefault(_InlineResponse19);

var _InlineResponse21 = require('../com.spoonacular.client.model/InlineResponse20018');

var _InlineResponse22 = _interopRequireDefault(_InlineResponse21);

var _InlineResponse23 = require('../com.spoonacular.client.model/InlineResponse20019');

var _InlineResponse24 = _interopRequireDefault(_InlineResponse23);

var _InlineResponse25 = require('../com.spoonacular.client.model/InlineResponse2002');

var _InlineResponse26 = _interopRequireDefault(_InlineResponse25);

var _InlineResponse27 = require('../com.spoonacular.client.model/InlineResponse20020');

var _InlineResponse28 = _interopRequireDefault(_InlineResponse27);

var _InlineResponse29 = require('../com.spoonacular.client.model/InlineResponse20021');

var _InlineResponse30 = _interopRequireDefault(_InlineResponse29);

var _InlineResponse31 = require('../com.spoonacular.client.model/InlineResponse20023');

var _InlineResponse32 = _interopRequireDefault(_InlineResponse31);

var _InlineResponse33 = require('../com.spoonacular.client.model/InlineResponse2003');

var _InlineResponse34 = _interopRequireDefault(_InlineResponse33);

var _InlineResponse35 = require('../com.spoonacular.client.model/InlineResponse2004');

var _InlineResponse36 = _interopRequireDefault(_InlineResponse35);

var _InlineResponse37 = require('../com.spoonacular.client.model/InlineResponse2005');

var _InlineResponse38 = _interopRequireDefault(_InlineResponse37);

var _InlineResponse39 = require('../com.spoonacular.client.model/InlineResponse20050');

var _InlineResponse40 = _interopRequireDefault(_InlineResponse39);

var _InlineResponse41 = require('../com.spoonacular.client.model/InlineResponse2006');

var _InlineResponse42 = _interopRequireDefault(_InlineResponse41);

var _InlineResponse43 = require('../com.spoonacular.client.model/InlineResponse2007');

var _InlineResponse44 = _interopRequireDefault(_InlineResponse43);

var _InlineResponse45 = require('../com.spoonacular.client.model/InlineResponse2008');

var _InlineResponse46 = _interopRequireDefault(_InlineResponse45);

var _InlineResponse47 = require('../com.spoonacular.client.model/InlineResponse2009');

var _InlineResponse48 = _interopRequireDefault(_InlineResponse47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Recipes service.
* @module com.spoonacular.client/com.spoonacular/RecipesApi
* @version 1.0
*/
var RecipesApi = function () {

  /**
  * Constructs a new RecipesApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/RecipesApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function RecipesApi(apiClient) {
    _classCallCheck(this, RecipesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the analyzeARecipeSearchQuery operation.
   * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~analyzeARecipeSearchQueryCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Analyze a Recipe Search Query
   * Parse a recipe search query to find out its intention.
   * @param {String} q The recipe search query.
   * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~analyzeARecipeSearchQueryCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018}
   */


  _createClass(RecipesApi, [{
    key: 'analyzeARecipeSearchQuery',
    value: function analyzeARecipeSearchQuery(q, callback) {
      var postBody = null;
      // verify the required parameter 'q' is set
      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling analyzeARecipeSearchQuery");
      }

      var pathParams = {};
      var queryParams = {
        'q': q
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse22.default;
      return this.apiClient.callApi('/recipes/queries/analyze', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the analyzeRecipeInstructions operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~analyzeRecipeInstructionsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Analyze Recipe Instructions
     * This endpoint allows you to break down instructions into atomic steps. Furthermore, each step will contain the ingredients and equipment required. Additionally, all ingredients and equipment from the recipe's instructions will be extracted independently of the step they're used in.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~analyzeRecipeInstructionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20016}
     */

  }, {
    key: 'analyzeRecipeInstructions',
    value: function analyzeRecipeInstructions(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Content-Type': opts['contentType']
      };
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse18.default;
      return this.apiClient.callApi('/recipes/analyzeInstructions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the autocompleteRecipeSearch operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~autocompleteRecipeSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2007>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Autocomplete Recipe Search
     * Autocomplete a partial input to suggest possible recipe names.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~autocompleteRecipeSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2007>}
     */

  }, {
    key: 'autocompleteRecipeSearch',
    value: function autocompleteRecipeSearch(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'number': opts['_number']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse44.default];
      return this.apiClient.callApi('/recipes/autocomplete', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the classifyCuisine operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~classifyCuisineCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20017} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Classify Cuisine
     * Classify the recipe's cuisine.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~classifyCuisineCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20017}
     */

  }, {
    key: 'classifyCuisine',
    value: function classifyCuisine(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Content-Type': opts['contentType']
      };
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse20.default;
      return this.apiClient.callApi('/recipes/cuisine', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the computeGlycemicLoad operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~computeGlycemicLoadCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compute Glycemic Load
     * Retrieve the glycemic index for a list of ingredients and compute the individual and total glycemic load.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject} inlineObject 
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.language The language of the input. Either 'en' or 'de'.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~computeGlycemicLoadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023}
     */

  }, {
    key: 'computeGlycemicLoad',
    value: function computeGlycemicLoad(inlineObject, opts, callback) {
      opts = opts || {};
      var postBody = inlineObject;
      // verify the required parameter 'inlineObject' is set
      if (inlineObject === undefined || inlineObject === null) {
        throw new Error("Missing the required parameter 'inlineObject' when calling computeGlycemicLoad");
      }

      var pathParams = {};
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse32.default;
      return this.apiClient.callApi('/food/ingredients/glycemicLoad', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the convertAmounts operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~convertAmountsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20019} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Amounts
     * Convert amounts like \"2 cups of flour to grams\".
     * @param {String} ingredientName The ingredient which you want to convert.
     * @param {Number} sourceAmount The amount from which you want to convert, e.g. the 2.5 in \"2.5 cups of flour to grams\".
     * @param {String} sourceUnit The unit from which you want to convert, e.g. the grams in \"2.5 cups of flour to grams\". You can also use \"piece\", e.g. \"3.4 oz tomatoes to piece\"
     * @param {String} targetUnit The unit to which you want to convert, e.g. the grams in \"2.5 cups of flour to grams\". You can also use \"piece\", e.g. \"3.4 oz tomatoes to piece\"
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~convertAmountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20019}
     */

  }, {
    key: 'convertAmounts',
    value: function convertAmounts(ingredientName, sourceAmount, sourceUnit, targetUnit, callback) {
      var postBody = null;
      // verify the required parameter 'ingredientName' is set
      if (ingredientName === undefined || ingredientName === null) {
        throw new Error("Missing the required parameter 'ingredientName' when calling convertAmounts");
      }
      // verify the required parameter 'sourceAmount' is set
      if (sourceAmount === undefined || sourceAmount === null) {
        throw new Error("Missing the required parameter 'sourceAmount' when calling convertAmounts");
      }
      // verify the required parameter 'sourceUnit' is set
      if (sourceUnit === undefined || sourceUnit === null) {
        throw new Error("Missing the required parameter 'sourceUnit' when calling convertAmounts");
      }
      // verify the required parameter 'targetUnit' is set
      if (targetUnit === undefined || targetUnit === null) {
        throw new Error("Missing the required parameter 'targetUnit' when calling convertAmounts");
      }

      var pathParams = {};
      var queryParams = {
        'ingredientName': ingredientName,
        'sourceAmount': sourceAmount,
        'sourceUnit': sourceUnit,
        'targetUnit': targetUnit
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse24.default;
      return this.apiClient.callApi('/recipes/convert', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the createRecipeCard operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~createRecipeCardCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20015} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Recipe Card
     * Generate a recipe card for a recipe.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~createRecipeCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20015}
     */

  }, {
    key: 'createRecipeCard',
    value: function createRecipeCard(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Content-Type': opts['contentType']
      };
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse16.default;
      return this.apiClient.callApi('/recipes/visualizeRecipe', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the equipmentByIDImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~equipmentByIDImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Equipment by ID Image
     * Visualize a recipe's equipment list as an image.
     * @param {Number} id The recipe id.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~equipmentByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'equipmentByIDImage',
    value: function equipmentByIDImage(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling equipmentByIDImage");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;
      return this.apiClient.callApi('/recipes/{id}/equipmentWidget.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the extractRecipeFromWebsite operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~extractRecipeFromWebsiteCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extract Recipe from Website
     * This endpoint lets you extract recipe data such as title, ingredients, and instructions from any properly formatted Website.
     * @param {String} url The URL of the recipe page.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceExtraction If true, the extraction will be triggered whether we already know the recipe or not. Use this only if information is missing as this operation is slower.
     * @param {Boolean} opts.analyze If true, the recipe will be analyzed and classified resolving in more data such as cuisines, dish types, and more.
     * @param {Boolean} opts.includeNutrition Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings. (default to false)
     * @param {Boolean} opts.includeTaste Whether taste data should be added to correctly parsed ingredients. (default to false)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~extractRecipeFromWebsiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003}
     */

  }, {
    key: 'extractRecipeFromWebsite',
    value: function extractRecipeFromWebsite(url, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'url' is set
      if (url === undefined || url === null) {
        throw new Error("Missing the required parameter 'url' when calling extractRecipeFromWebsite");
      }

      var pathParams = {};
      var queryParams = {
        'url': url,
        'forceExtraction': opts['forceExtraction'],
        'analyze': opts['analyze'],
        'includeNutrition': opts['includeNutrition'],
        'includeTaste': opts['includeTaste']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse34.default;
      return this.apiClient.callApi('/recipes/extract', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAnalyzedRecipeInstructions operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~getAnalyzedRecipeInstructionsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Analyzed Recipe Instructions
     * Get an analyzed breakdown of a recipe's instructions. Each step is enriched with the ingredients and equipment required.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.stepBreakdown Whether to break down the recipe steps even more.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~getAnalyzedRecipeInstructionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013}
     */

  }, {
    key: 'getAnalyzedRecipeInstructions',
    value: function getAnalyzedRecipeInstructions(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAnalyzedRecipeInstructions");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'stepBreakdown': opts['stepBreakdown']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse12.default;
      return this.apiClient.callApi('/recipes/{id}/analyzedInstructions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRandomRecipes operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~getRandomRecipesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Random Recipes
     * Find random (popular) recipes. If you need to filter recipes by diet, nutrition etc. you might want to consider using the complex recipe search endpoint and set the sort request parameter to random.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.limitLicense Whether the recipes should have an open license that allows display with proper attribution. (default to true)
     * @param {String} opts.tags The tags (can be diets, meal types, cuisines, or intolerances) that the recipe must have.
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~getRandomRecipesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2006}
     */

  }, {
    key: 'getRandomRecipes',
    value: function getRandomRecipes(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'limitLicense': opts['limitLicense'],
        'tags': opts['tags'],
        'number': opts['_number']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse42.default;
      return this.apiClient.callApi('/recipes/random', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRecipeEquipmentByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeEquipmentByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Equipment by ID
     * Get a recipe's equipment list.
     * @param {Number} id The item's id.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeEquipmentByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2009}
     */

  }, {
    key: 'getRecipeEquipmentByID',
    value: function getRecipeEquipmentByID(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRecipeEquipmentByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse48.default;
      return this.apiClient.callApi('/recipes/{id}/equipmentWidget.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRecipeInformation operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recipe Information
     * Use a recipe id to get full information about a recipe, such as ingredients, nutrition, diet and allergen information, etc.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeNutrition Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings. (default to false)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003}
     */

  }, {
    key: 'getRecipeInformation',
    value: function getRecipeInformation(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRecipeInformation");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'includeNutrition': opts['includeNutrition']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse34.default;
      return this.apiClient.callApi('/recipes/{id}/information', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRecipeInformationBulk operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeInformationBulkCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2004>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recipe Information Bulk
     * Get information about multiple recipes at once. This is equivalent to calling the Get Recipe Information endpoint multiple times, but faster.
     * @param {String} ids A comma-separated list of recipe ids.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeNutrition Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings. (default to false)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeInformationBulkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2004>}
     */

  }, {
    key: 'getRecipeInformationBulk',
    value: function getRecipeInformationBulk(ids, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getRecipeInformationBulk");
      }

      var pathParams = {};
      var queryParams = {
        'ids': ids,
        'includeNutrition': opts['includeNutrition']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse36.default];
      return this.apiClient.callApi('/recipes/informationBulk', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRecipeIngredientsByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeIngredientsByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ingredients by ID
     * Get a recipe's ingredient list.
     * @param {Number} id The item's id.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeIngredientsByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20011}
     */

  }, {
    key: 'getRecipeIngredientsByID',
    value: function getRecipeIngredientsByID(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRecipeIngredientsByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse8.default;
      return this.apiClient.callApi('/recipes/{id}/ingredientWidget.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRecipeNutritionWidgetByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeNutritionWidgetByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Nutrition by ID
     * Get a recipe's nutrition data.
     * @param {Number} id The item's id.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeNutritionWidgetByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20012}
     */

  }, {
    key: 'getRecipeNutritionWidgetByID',
    value: function getRecipeNutritionWidgetByID(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRecipeNutritionWidgetByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse10.default;
      return this.apiClient.callApi('/recipes/{id}/nutritionWidget.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRecipePriceBreakdownByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipePriceBreakdownByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price Breakdown by ID
     * Get a recipe's price breakdown data.
     * @param {Number} id The item's id.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipePriceBreakdownByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010}
     */

  }, {
    key: 'getRecipePriceBreakdownByID',
    value: function getRecipePriceBreakdownByID(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRecipePriceBreakdownByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse6.default;
      return this.apiClient.callApi('/recipes/{id}/priceBreakdownWidget.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRecipeTasteByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeTasteByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Taste by ID
     * Get a recipe's taste. The tastes supported are sweet, salty, sour, bitter, savory, and fatty.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/Boolean} opts.normalize Normalize to the strongest taste. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~getRecipeTasteByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2008}
     */

  }, {
    key: 'getRecipeTasteByID',
    value: function getRecipeTasteByID(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRecipeTasteByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'normalize': opts['normalize']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse46.default;
      return this.apiClient.callApi('/recipes/{id}/tasteWidget.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSimilarRecipes operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~getSimilarRecipesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2005>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Similar Recipes
     * Find recipes which are similar to the given one.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {Boolean} opts.limitLicense Whether the recipes should have an open license that allows display with proper attribution. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~getSimilarRecipesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2005>}
     */

  }, {
    key: 'getSimilarRecipes',
    value: function getSimilarRecipes(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSimilarRecipes");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'number': opts['_number'],
        'limitLicense': opts['limitLicense']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse38.default];
      return this.apiClient.callApi('/recipes/{id}/similar', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the guessNutritionByDishName operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~guessNutritionByDishNameCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Guess Nutrition by Dish Name
     * Estimate the macronutrients of a dish based on its title.
     * @param {String} title The title of the dish.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~guessNutritionByDishNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021}
     */

  }, {
    key: 'guessNutritionByDishName',
    value: function guessNutritionByDishName(title, callback) {
      var postBody = null;
      // verify the required parameter 'title' is set
      if (title === undefined || title === null) {
        throw new Error("Missing the required parameter 'title' when calling guessNutritionByDishName");
      }

      var pathParams = {};
      var queryParams = {
        'title': title
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse30.default;
      return this.apiClient.callApi('/recipes/guessNutrition', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the ingredientsByIDImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~ingredientsByIDImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ingredients by ID Image
     * Visualize a recipe's ingredient list.
     * @param {Number} id The recipe id.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.measure Whether the the measures should be 'us' or 'metric'.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~ingredientsByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'ingredientsByIDImage',
    value: function ingredientsByIDImage(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ingredientsByIDImage");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'measure': opts['measure']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;
      return this.apiClient.callApi('/recipes/{id}/ingredientWidget.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the parseIngredients operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~parseIngredientsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20020>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse Ingredients
     * Extract an ingredient from plain text.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.language The language of the input. Either 'en' or 'de'.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~parseIngredientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20020>}
     */

  }, {
    key: 'parseIngredients',
    value: function parseIngredients(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
        'Content-Type': opts['contentType']
      };
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse28.default];
      return this.apiClient.callApi('/recipes/parseIngredients', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the priceBreakdownByIDImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~priceBreakdownByIDImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price Breakdown by ID Image
     * Visualize a recipe's price breakdown.
     * @param {Number} id The recipe id.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~priceBreakdownByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'priceBreakdownByIDImage',
    value: function priceBreakdownByIDImage(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling priceBreakdownByIDImage");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;
      return this.apiClient.callApi('/recipes/{id}/priceBreakdownWidget.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the quickAnswer operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~quickAnswerCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20050} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Quick Answer
     * Answer a nutrition related natural language question.
     * @param {String} q The nutrition related question.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~quickAnswerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20050}
     */

  }, {
    key: 'quickAnswer',
    value: function quickAnswer(q, callback) {
      var postBody = null;
      // verify the required parameter 'q' is set
      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling quickAnswer");
      }

      var pathParams = {};
      var queryParams = {
        'q': q
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse40.default;
      return this.apiClient.callApi('/recipes/quickAnswer', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the recipeNutritionByIDImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~recipeNutritionByIDImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recipe Nutrition by ID Image
     * Visualize a recipe's nutritional information as an image.
     * @param {Number} id The recipe id.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~recipeNutritionByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'recipeNutritionByIDImage',
    value: function recipeNutritionByIDImage(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recipeNutritionByIDImage");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;
      return this.apiClient.callApi('/recipes/{id}/nutritionWidget.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the recipeNutritionLabelImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~recipeNutritionLabelImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recipe Nutrition Label Image
     * Get a recipe's nutrition label as an image.
     * @param {Number} id The recipe id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
     * @param {Boolean} opts.showZeroValues Whether to show zero values.
     * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~recipeNutritionLabelImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'recipeNutritionLabelImage',
    value: function recipeNutritionLabelImage(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recipeNutritionLabelImage");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'showOptionalNutrients': opts['showOptionalNutrients'],
        'showZeroValues': opts['showZeroValues'],
        'showIngredients': opts['showIngredients']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;
      return this.apiClient.callApi('/recipes/{id}/nutritionLabel.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the recipeNutritionLabelWidget operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~recipeNutritionLabelWidgetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recipe Nutrition Label Widget
     * Get a recipe's nutrition label as an HTML widget.
     * @param {Number} id The recipe id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
     * @param {Boolean} opts.showZeroValues Whether to show zero values.
     * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~recipeNutritionLabelWidgetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'recipeNutritionLabelWidget',
    value: function recipeNutritionLabelWidget(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recipeNutritionLabelWidget");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'defaultCss': opts['defaultCss'],
        'showOptionalNutrients': opts['showOptionalNutrients'],
        'showZeroValues': opts['showZeroValues'],
        'showIngredients': opts['showIngredients']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/{id}/nutritionLabel', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the recipeTasteByIDImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~recipeTasteByIDImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recipe Taste by ID Image
     * Get a recipe's taste as an image. The tastes supported are sweet, salty, sour, bitter, savory, and fatty.
     * @param {Number} id The recipe id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.normalize Normalize to the strongest taste.
     * @param {String} opts.rgb Red, green, blue values for the chart color.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~recipeTasteByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'recipeTasteByIDImage',
    value: function recipeTasteByIDImage(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recipeTasteByIDImage");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'normalize': opts['normalize'],
        'rgb': opts['rgb']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;
      return this.apiClient.callApi('/recipes/{id}/tasteWidget.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchRecipes operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~searchRecipesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Recipes
     * Search through hundreds of thousands of recipes using advanced filtering and ranking. NOTE: This method combines searching by query, by ingredients, and by nutrients into one endpoint.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {String} opts.cuisine The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR'). See a full list of supported cuisines.
     * @param {String} opts.excludeCuisine The cuisine(s) the recipes must not match. One or more, comma separated (will be interpreted as 'AND'). See a full list of supported cuisines.
     * @param {String} opts.diet The diet for which the recipes must be suitable. See a full list of supported diets.
     * @param {String} opts.intolerances A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.
     * @param {String} opts.equipment The equipment required. Multiple values will be interpreted as 'or'. For example, value could be \"blender, frying pan, bowl\".
     * @param {String} opts.includeIngredients A comma-separated list of ingredients that should/must be used in the recipes.
     * @param {String} opts.excludeIngredients A comma-separated list of ingredients or ingredient types that the recipes must not contain.
     * @param {String} opts.type The type of recipe. See a full list of supported meal types.
     * @param {Boolean} opts.instructionsRequired Whether the recipes must have instructions.
     * @param {Boolean} opts.fillIngredients Add information about the ingredients and whether they are used or missing in relation to the query.
     * @param {Boolean} opts.addRecipeInformation If set to true, you get more information about the recipes returned.
     * @param {Boolean} opts.addRecipeNutrition If set to true, you get nutritional information about each recipes returned.
     * @param {String} opts.author The username of the recipe author.
     * @param {String} opts.tags The tags (can be diets, meal types, cuisines, or intolerances) that the recipe must have.
     * @param {Number} opts.recipeBoxId The id of the recipe box to which the search should be limited to.
     * @param {String} opts.titleMatch Enter text that must be found in the title of the recipes.
     * @param {Number} opts.maxReadyTime The maximum time in minutes it should take to prepare and cook the recipe.
     * @param {Boolean} opts.ignorePantry Whether to ignore typical pantry items, such as water, salt, flour, etc. (default to false)
     * @param {String} opts.sort The strategy to sort recipes by. See a full list of supported sorting options.
     * @param {String} opts.sortDirection The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).
     * @param {Number} opts.minCarbs The minimum amount of carbohydrates in grams the recipe must have.
     * @param {Number} opts.maxCarbs The maximum amount of carbohydrates in grams the recipe can have.
     * @param {Number} opts.minProtein The minimum amount of protein in grams the recipe must have.
     * @param {Number} opts.maxProtein The maximum amount of protein in grams the recipe can have.
     * @param {Number} opts.minCalories The minimum amount of calories the recipe must have.
     * @param {Number} opts.maxCalories The maximum amount of calories the recipe can have.
     * @param {Number} opts.minFat The minimum amount of fat in grams the recipe must have.
     * @param {Number} opts.maxFat The maximum amount of fat in grams the recipe can have.
     * @param {Number} opts.minAlcohol The minimum amount of alcohol in grams the recipe must have.
     * @param {Number} opts.maxAlcohol The maximum amount of alcohol in grams the recipe can have.
     * @param {Number} opts.minCaffeine The minimum amount of caffeine in milligrams the recipe must have.
     * @param {Number} opts.maxCaffeine The maximum amount of caffeine in milligrams the recipe can have.
     * @param {Number} opts.minCopper The minimum amount of copper in milligrams the recipe must have.
     * @param {Number} opts.maxCopper The maximum amount of copper in milligrams the recipe can have.
     * @param {Number} opts.minCalcium The minimum amount of calcium in milligrams the recipe must have.
     * @param {Number} opts.maxCalcium The maximum amount of calcium in milligrams the recipe can have.
     * @param {Number} opts.minCholine The minimum amount of choline in milligrams the recipe must have.
     * @param {Number} opts.maxCholine The maximum amount of choline in milligrams the recipe can have.
     * @param {Number} opts.minCholesterol The minimum amount of cholesterol in milligrams the recipe must have.
     * @param {Number} opts.maxCholesterol The maximum amount of cholesterol in milligrams the recipe can have.
     * @param {Number} opts.minFluoride The minimum amount of fluoride in milligrams the recipe must have.
     * @param {Number} opts.maxFluoride The maximum amount of fluoride in milligrams the recipe can have.
     * @param {Number} opts.minSaturatedFat The minimum amount of saturated fat in grams the recipe must have.
     * @param {Number} opts.maxSaturatedFat The maximum amount of saturated fat in grams the recipe can have.
     * @param {Number} opts.minVitaminA The minimum amount of Vitamin A in IU the recipe must have.
     * @param {Number} opts.maxVitaminA The maximum amount of Vitamin A in IU the recipe can have.
     * @param {Number} opts.minVitaminC The minimum amount of Vitamin C milligrams the recipe must have.
     * @param {Number} opts.maxVitaminC The maximum amount of Vitamin C in milligrams the recipe can have.
     * @param {Number} opts.minVitaminD The minimum amount of Vitamin D in micrograms the recipe must have.
     * @param {Number} opts.maxVitaminD The maximum amount of Vitamin D in micrograms the recipe can have.
     * @param {Number} opts.minVitaminE The minimum amount of Vitamin E in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminE The maximum amount of Vitamin E in milligrams the recipe can have.
     * @param {Number} opts.minVitaminK The minimum amount of Vitamin K in micrograms the recipe must have.
     * @param {Number} opts.maxVitaminK The maximum amount of Vitamin K in micrograms the recipe can have.
     * @param {Number} opts.minVitaminB1 The minimum amount of Vitamin B1 in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminB1 The maximum amount of Vitamin B1 in milligrams the recipe can have.
     * @param {Number} opts.minVitaminB2 The minimum amount of Vitamin B2 in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminB2 The maximum amount of Vitamin B2 in milligrams the recipe can have.
     * @param {Number} opts.minVitaminB5 The minimum amount of Vitamin B5 in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminB5 The maximum amount of Vitamin B5 in milligrams the recipe can have.
     * @param {Number} opts.minVitaminB3 The minimum amount of Vitamin B3 in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminB3 The maximum amount of Vitamin B3 in milligrams the recipe can have.
     * @param {Number} opts.minVitaminB6 The minimum amount of Vitamin B6 in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminB6 The maximum amount of Vitamin B6 in milligrams the recipe can have.
     * @param {Number} opts.minVitaminB12 The minimum amount of Vitamin B12 in micrograms the recipe must have.
     * @param {Number} opts.maxVitaminB12 The maximum amount of Vitamin B12 in micrograms the recipe can have.
     * @param {Number} opts.minFiber The minimum amount of fiber in grams the recipe must have.
     * @param {Number} opts.maxFiber The maximum amount of fiber in grams the recipe can have.
     * @param {Number} opts.minFolate The minimum amount of folate in micrograms the recipe must have.
     * @param {Number} opts.maxFolate The maximum amount of folate in micrograms the recipe can have.
     * @param {Number} opts.minFolicAcid The minimum amount of folic acid in micrograms the recipe must have.
     * @param {Number} opts.maxFolicAcid The maximum amount of folic acid in micrograms the recipe can have.
     * @param {Number} opts.minIodine The minimum amount of iodine in micrograms the recipe must have.
     * @param {Number} opts.maxIodine The maximum amount of iodine in micrograms the recipe can have.
     * @param {Number} opts.minIron The minimum amount of iron in milligrams the recipe must have.
     * @param {Number} opts.maxIron The maximum amount of iron in milligrams the recipe can have.
     * @param {Number} opts.minMagnesium The minimum amount of magnesium in milligrams the recipe must have.
     * @param {Number} opts.maxMagnesium The maximum amount of magnesium in milligrams the recipe can have.
     * @param {Number} opts.minManganese The minimum amount of manganese in milligrams the recipe must have.
     * @param {Number} opts.maxManganese The maximum amount of manganese in milligrams the recipe can have.
     * @param {Number} opts.minPhosphorus The minimum amount of phosphorus in milligrams the recipe must have.
     * @param {Number} opts.maxPhosphorus The maximum amount of phosphorus in milligrams the recipe can have.
     * @param {Number} opts.minPotassium The minimum amount of potassium in milligrams the recipe must have.
     * @param {Number} opts.maxPotassium The maximum amount of potassium in milligrams the recipe can have.
     * @param {Number} opts.minSelenium The minimum amount of selenium in micrograms the recipe must have.
     * @param {Number} opts.maxSelenium The maximum amount of selenium in micrograms the recipe can have.
     * @param {Number} opts.minSodium The minimum amount of sodium in milligrams the recipe must have.
     * @param {Number} opts.maxSodium The maximum amount of sodium in milligrams the recipe can have.
     * @param {Number} opts.minSugar The minimum amount of sugar in grams the recipe must have.
     * @param {Number} opts.maxSugar The maximum amount of sugar in grams the recipe can have.
     * @param {Number} opts.minZinc The minimum amount of zinc in milligrams the recipe must have.
     * @param {Number} opts.maxZinc The maximum amount of zinc in milligrams the recipe can have.
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {Boolean} opts.limitLicense Whether the recipes should have an open license that allows display with proper attribution. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~searchRecipesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200}
     */

  }, {
    key: 'searchRecipes',
    value: function searchRecipes(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'cuisine': opts['cuisine'],
        'excludeCuisine': opts['excludeCuisine'],
        'diet': opts['diet'],
        'intolerances': opts['intolerances'],
        'equipment': opts['equipment'],
        'includeIngredients': opts['includeIngredients'],
        'excludeIngredients': opts['excludeIngredients'],
        'type': opts['type'],
        'instructionsRequired': opts['instructionsRequired'],
        'fillIngredients': opts['fillIngredients'],
        'addRecipeInformation': opts['addRecipeInformation'],
        'addRecipeNutrition': opts['addRecipeNutrition'],
        'author': opts['author'],
        'tags': opts['tags'],
        'recipeBoxId': opts['recipeBoxId'],
        'titleMatch': opts['titleMatch'],
        'maxReadyTime': opts['maxReadyTime'],
        'ignorePantry': opts['ignorePantry'],
        'sort': opts['sort'],
        'sortDirection': opts['sortDirection'],
        'minCarbs': opts['minCarbs'],
        'maxCarbs': opts['maxCarbs'],
        'minProtein': opts['minProtein'],
        'maxProtein': opts['maxProtein'],
        'minCalories': opts['minCalories'],
        'maxCalories': opts['maxCalories'],
        'minFat': opts['minFat'],
        'maxFat': opts['maxFat'],
        'minAlcohol': opts['minAlcohol'],
        'maxAlcohol': opts['maxAlcohol'],
        'minCaffeine': opts['minCaffeine'],
        'maxCaffeine': opts['maxCaffeine'],
        'minCopper': opts['minCopper'],
        'maxCopper': opts['maxCopper'],
        'minCalcium': opts['minCalcium'],
        'maxCalcium': opts['maxCalcium'],
        'minCholine': opts['minCholine'],
        'maxCholine': opts['maxCholine'],
        'minCholesterol': opts['minCholesterol'],
        'maxCholesterol': opts['maxCholesterol'],
        'minFluoride': opts['minFluoride'],
        'maxFluoride': opts['maxFluoride'],
        'minSaturatedFat': opts['minSaturatedFat'],
        'maxSaturatedFat': opts['maxSaturatedFat'],
        'minVitaminA': opts['minVitaminA'],
        'maxVitaminA': opts['maxVitaminA'],
        'minVitaminC': opts['minVitaminC'],
        'maxVitaminC': opts['maxVitaminC'],
        'minVitaminD': opts['minVitaminD'],
        'maxVitaminD': opts['maxVitaminD'],
        'minVitaminE': opts['minVitaminE'],
        'maxVitaminE': opts['maxVitaminE'],
        'minVitaminK': opts['minVitaminK'],
        'maxVitaminK': opts['maxVitaminK'],
        'minVitaminB1': opts['minVitaminB1'],
        'maxVitaminB1': opts['maxVitaminB1'],
        'minVitaminB2': opts['minVitaminB2'],
        'maxVitaminB2': opts['maxVitaminB2'],
        'minVitaminB5': opts['minVitaminB5'],
        'maxVitaminB5': opts['maxVitaminB5'],
        'minVitaminB3': opts['minVitaminB3'],
        'maxVitaminB3': opts['maxVitaminB3'],
        'minVitaminB6': opts['minVitaminB6'],
        'maxVitaminB6': opts['maxVitaminB6'],
        'minVitaminB12': opts['minVitaminB12'],
        'maxVitaminB12': opts['maxVitaminB12'],
        'minFiber': opts['minFiber'],
        'maxFiber': opts['maxFiber'],
        'minFolate': opts['minFolate'],
        'maxFolate': opts['maxFolate'],
        'minFolicAcid': opts['minFolicAcid'],
        'maxFolicAcid': opts['maxFolicAcid'],
        'minIodine': opts['minIodine'],
        'maxIodine': opts['maxIodine'],
        'minIron': opts['minIron'],
        'maxIron': opts['maxIron'],
        'minMagnesium': opts['minMagnesium'],
        'maxMagnesium': opts['maxMagnesium'],
        'minManganese': opts['minManganese'],
        'maxManganese': opts['maxManganese'],
        'minPhosphorus': opts['minPhosphorus'],
        'maxPhosphorus': opts['maxPhosphorus'],
        'minPotassium': opts['minPotassium'],
        'maxPotassium': opts['maxPotassium'],
        'minSelenium': opts['minSelenium'],
        'maxSelenium': opts['maxSelenium'],
        'minSodium': opts['minSodium'],
        'maxSodium': opts['maxSodium'],
        'minSugar': opts['minSugar'],
        'maxSugar': opts['maxSugar'],
        'minZinc': opts['minZinc'],
        'maxZinc': opts['maxZinc'],
        'offset': opts['offset'],
        'number': opts['_number'],
        'limitLicense': opts['limitLicense']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;
      return this.apiClient.callApi('/recipes/complexSearch', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchRecipesByIngredients operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~searchRecipesByIngredientsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2001>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Recipes by Ingredients
     *  Ever wondered what recipes you can cook with the ingredients you have in your fridge or pantry? This endpoint lets you find recipes that either maximize the usage of ingredients you have at hand (pre shopping) or minimize the ingredients that you don't currently have (post shopping).         
     * @param {Object} opts Optional parameters
     * @param {String} opts.ingredients A comma-separated list of ingredients that the recipes should contain.
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {Boolean} opts.limitLicense Whether the recipes should have an open license that allows display with proper attribution. (default to true)
     * @param {Number} opts.ranking Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
     * @param {Boolean} opts.ignorePantry Whether to ignore typical pantry items, such as water, salt, flour, etc. (default to false)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~searchRecipesByIngredientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2001>}
     */

  }, {
    key: 'searchRecipesByIngredients',
    value: function searchRecipesByIngredients(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'ingredients': opts['ingredients'],
        'number': opts['_number'],
        'limitLicense': opts['limitLicense'],
        'ranking': opts['ranking'],
        'ignorePantry': opts['ignorePantry']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse4.default];
      return this.apiClient.callApi('/recipes/findByIngredients', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchRecipesByNutrients operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~searchRecipesByNutrientsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2002>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Recipes by Nutrients
     * Find a set of recipes that adhere to the given nutritional limits. You may set limits for macronutrients (calories, protein, fat, and carbohydrate) and/or many micronutrients.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minCarbs The minimum amount of carbohydrates in grams the recipe must have.
     * @param {Number} opts.maxCarbs The maximum amount of carbohydrates in grams the recipe can have.
     * @param {Number} opts.minProtein The minimum amount of protein in grams the recipe must have.
     * @param {Number} opts.maxProtein The maximum amount of protein in grams the recipe can have.
     * @param {Number} opts.minCalories The minimum amount of calories the recipe must have.
     * @param {Number} opts.maxCalories The maximum amount of calories the recipe can have.
     * @param {Number} opts.minFat The minimum amount of fat in grams the recipe must have.
     * @param {Number} opts.maxFat The maximum amount of fat in grams the recipe can have.
     * @param {Number} opts.minAlcohol The minimum amount of alcohol in grams the recipe must have.
     * @param {Number} opts.maxAlcohol The maximum amount of alcohol in grams the recipe can have.
     * @param {Number} opts.minCaffeine The minimum amount of caffeine in milligrams the recipe must have.
     * @param {Number} opts.maxCaffeine The maximum amount of caffeine in milligrams the recipe can have.
     * @param {Number} opts.minCopper The minimum amount of copper in milligrams the recipe must have.
     * @param {Number} opts.maxCopper The maximum amount of copper in milligrams the recipe can have.
     * @param {Number} opts.minCalcium The minimum amount of calcium in milligrams the recipe must have.
     * @param {Number} opts.maxCalcium The maximum amount of calcium in milligrams the recipe can have.
     * @param {Number} opts.minCholine The minimum amount of choline in milligrams the recipe must have.
     * @param {Number} opts.maxCholine The maximum amount of choline in milligrams the recipe can have.
     * @param {Number} opts.minCholesterol The minimum amount of cholesterol in milligrams the recipe must have.
     * @param {Number} opts.maxCholesterol The maximum amount of cholesterol in milligrams the recipe can have.
     * @param {Number} opts.minFluoride The minimum amount of fluoride in milligrams the recipe must have.
     * @param {Number} opts.maxFluoride The maximum amount of fluoride in milligrams the recipe can have.
     * @param {Number} opts.minSaturatedFat The minimum amount of saturated fat in grams the recipe must have.
     * @param {Number} opts.maxSaturatedFat The maximum amount of saturated fat in grams the recipe can have.
     * @param {Number} opts.minVitaminA The minimum amount of Vitamin A in IU the recipe must have.
     * @param {Number} opts.maxVitaminA The maximum amount of Vitamin A in IU the recipe can have.
     * @param {Number} opts.minVitaminC The minimum amount of Vitamin C in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminC The maximum amount of Vitamin C in milligrams the recipe can have.
     * @param {Number} opts.minVitaminD The minimum amount of Vitamin D in micrograms the recipe must have.
     * @param {Number} opts.maxVitaminD The maximum amount of Vitamin D in micrograms the recipe can have.
     * @param {Number} opts.minVitaminE The minimum amount of Vitamin E in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminE The maximum amount of Vitamin E in milligrams the recipe can have.
     * @param {Number} opts.minVitaminK The minimum amount of Vitamin K in micrograms the recipe must have.
     * @param {Number} opts.maxVitaminK The maximum amount of Vitamin K in micrograms the recipe can have.
     * @param {Number} opts.minVitaminB1 The minimum amount of Vitamin B1 in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminB1 The maximum amount of Vitamin B1 in milligrams the recipe can have.
     * @param {Number} opts.minVitaminB2 The minimum amount of Vitamin B2 in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminB2 The maximum amount of Vitamin B2 in milligrams the recipe can have.
     * @param {Number} opts.minVitaminB5 The minimum amount of Vitamin B5 in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminB5 The maximum amount of Vitamin B5 in milligrams the recipe can have.
     * @param {Number} opts.minVitaminB3 The minimum amount of Vitamin B3 in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminB3 The maximum amount of Vitamin B3 in milligrams the recipe can have.
     * @param {Number} opts.minVitaminB6 The minimum amount of Vitamin B6 in milligrams the recipe must have.
     * @param {Number} opts.maxVitaminB6 The maximum amount of Vitamin B6 in milligrams the recipe can have.
     * @param {Number} opts.minVitaminB12 The minimum amount of Vitamin B12 in micrograms the recipe must have.
     * @param {Number} opts.maxVitaminB12 The maximum amount of Vitamin B12 in micrograms the recipe can have.
     * @param {Number} opts.minFiber The minimum amount of fiber in grams the recipe must have.
     * @param {Number} opts.maxFiber The maximum amount of fiber in grams the recipe can have.
     * @param {Number} opts.minFolate The minimum amount of folate in micrograms the recipe must have.
     * @param {Number} opts.maxFolate The maximum amount of folate in micrograms the recipe can have.
     * @param {Number} opts.minFolicAcid The minimum amount of folic acid in micrograms the recipe must have.
     * @param {Number} opts.maxFolicAcid The maximum amount of folic acid in micrograms the recipe can have.
     * @param {Number} opts.minIodine The minimum amount of iodine in micrograms the recipe must have.
     * @param {Number} opts.maxIodine The maximum amount of iodine in micrograms the recipe can have.
     * @param {Number} opts.minIron The minimum amount of iron in milligrams the recipe must have.
     * @param {Number} opts.maxIron The maximum amount of iron in milligrams the recipe can have.
     * @param {Number} opts.minMagnesium The minimum amount of magnesium in milligrams the recipe must have.
     * @param {Number} opts.maxMagnesium The maximum amount of magnesium in milligrams the recipe can have.
     * @param {Number} opts.minManganese The minimum amount of manganese in milligrams the recipe must have.
     * @param {Number} opts.maxManganese The maximum amount of manganese in milligrams the recipe can have.
     * @param {Number} opts.minPhosphorus The minimum amount of phosphorus in milligrams the recipe must have.
     * @param {Number} opts.maxPhosphorus The maximum amount of phosphorus in milligrams the recipe can have.
     * @param {Number} opts.minPotassium The minimum amount of potassium in milligrams the recipe must have.
     * @param {Number} opts.maxPotassium The maximum amount of potassium in milligrams the recipe can have.
     * @param {Number} opts.minSelenium The minimum amount of selenium in micrograms the recipe must have.
     * @param {Number} opts.maxSelenium The maximum amount of selenium in micrograms the recipe can have.
     * @param {Number} opts.minSodium The minimum amount of sodium in milligrams the recipe must have.
     * @param {Number} opts.maxSodium The maximum amount of sodium in milligrams the recipe can have.
     * @param {Number} opts.minSugar The minimum amount of sugar in grams the recipe must have.
     * @param {Number} opts.maxSugar The maximum amount of sugar in grams the recipe can have.
     * @param {Number} opts.minZinc The minimum amount of zinc in milligrams the recipe must have.
     * @param {Number} opts.maxZinc The maximum amount of zinc in milligrams the recipe can have.
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {Boolean} opts.random If true, every request will give you a random set of recipes within the requested limits.
     * @param {Boolean} opts.limitLicense Whether the recipes should have an open license that allows display with proper attribution. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~searchRecipesByNutrientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2002>}
     */

  }, {
    key: 'searchRecipesByNutrients',
    value: function searchRecipesByNutrients(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'minCarbs': opts['minCarbs'],
        'maxCarbs': opts['maxCarbs'],
        'minProtein': opts['minProtein'],
        'maxProtein': opts['maxProtein'],
        'minCalories': opts['minCalories'],
        'maxCalories': opts['maxCalories'],
        'minFat': opts['minFat'],
        'maxFat': opts['maxFat'],
        'minAlcohol': opts['minAlcohol'],
        'maxAlcohol': opts['maxAlcohol'],
        'minCaffeine': opts['minCaffeine'],
        'maxCaffeine': opts['maxCaffeine'],
        'minCopper': opts['minCopper'],
        'maxCopper': opts['maxCopper'],
        'minCalcium': opts['minCalcium'],
        'maxCalcium': opts['maxCalcium'],
        'minCholine': opts['minCholine'],
        'maxCholine': opts['maxCholine'],
        'minCholesterol': opts['minCholesterol'],
        'maxCholesterol': opts['maxCholesterol'],
        'minFluoride': opts['minFluoride'],
        'maxFluoride': opts['maxFluoride'],
        'minSaturatedFat': opts['minSaturatedFat'],
        'maxSaturatedFat': opts['maxSaturatedFat'],
        'minVitaminA': opts['minVitaminA'],
        'maxVitaminA': opts['maxVitaminA'],
        'minVitaminC': opts['minVitaminC'],
        'maxVitaminC': opts['maxVitaminC'],
        'minVitaminD': opts['minVitaminD'],
        'maxVitaminD': opts['maxVitaminD'],
        'minVitaminE': opts['minVitaminE'],
        'maxVitaminE': opts['maxVitaminE'],
        'minVitaminK': opts['minVitaminK'],
        'maxVitaminK': opts['maxVitaminK'],
        'minVitaminB1': opts['minVitaminB1'],
        'maxVitaminB1': opts['maxVitaminB1'],
        'minVitaminB2': opts['minVitaminB2'],
        'maxVitaminB2': opts['maxVitaminB2'],
        'minVitaminB5': opts['minVitaminB5'],
        'maxVitaminB5': opts['maxVitaminB5'],
        'minVitaminB3': opts['minVitaminB3'],
        'maxVitaminB3': opts['maxVitaminB3'],
        'minVitaminB6': opts['minVitaminB6'],
        'maxVitaminB6': opts['maxVitaminB6'],
        'minVitaminB12': opts['minVitaminB12'],
        'maxVitaminB12': opts['maxVitaminB12'],
        'minFiber': opts['minFiber'],
        'maxFiber': opts['maxFiber'],
        'minFolate': opts['minFolate'],
        'maxFolate': opts['maxFolate'],
        'minFolicAcid': opts['minFolicAcid'],
        'maxFolicAcid': opts['maxFolicAcid'],
        'minIodine': opts['minIodine'],
        'maxIodine': opts['maxIodine'],
        'minIron': opts['minIron'],
        'maxIron': opts['maxIron'],
        'minMagnesium': opts['minMagnesium'],
        'maxMagnesium': opts['maxMagnesium'],
        'minManganese': opts['minManganese'],
        'maxManganese': opts['maxManganese'],
        'minPhosphorus': opts['minPhosphorus'],
        'maxPhosphorus': opts['maxPhosphorus'],
        'minPotassium': opts['minPotassium'],
        'maxPotassium': opts['maxPotassium'],
        'minSelenium': opts['minSelenium'],
        'maxSelenium': opts['maxSelenium'],
        'minSodium': opts['minSodium'],
        'maxSodium': opts['maxSodium'],
        'minSugar': opts['minSugar'],
        'maxSugar': opts['maxSugar'],
        'minZinc': opts['minZinc'],
        'maxZinc': opts['maxZinc'],
        'offset': opts['offset'],
        'number': opts['_number'],
        'random': opts['random'],
        'limitLicense': opts['limitLicense']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse26.default];
      return this.apiClient.callApi('/recipes/findByNutrients', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the summarizeRecipe operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~summarizeRecipeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Summarize Recipe
     * Automatically generate a short description that summarizes key information about the recipe.
     * @param {Number} id The item's id.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~summarizeRecipeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20014}
     */

  }, {
    key: 'summarizeRecipe',
    value: function summarizeRecipe(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling summarizeRecipe");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse14.default;
      return this.apiClient.callApi('/recipes/{id}/summary', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeEquipment operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeEquipmentCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Equipment Widget
     * Visualize the equipment used to make a recipe.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeEquipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizeEquipment',
    value: function visualizeEquipment(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Content-Type': opts['contentType'],
        'Accept': opts['accept']
      };
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/visualizeEquipment', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizePriceBreakdown operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizePriceBreakdownCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price Breakdown Widget
     * Visualize the price breakdown of a recipe.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.language The language of the input. Either 'en' or 'de'.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizePriceBreakdownCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizePriceBreakdown',
    value: function visualizePriceBreakdown(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
        'Content-Type': opts['contentType'],
        'Accept': opts['accept']
      };
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/visualizePriceEstimator', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeRecipeEquipmentByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeEquipmentByIDCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Equipment by ID Widget
     * Visualize a recipe's equipment list.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeEquipmentByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizeRecipeEquipmentByID',
    value: function visualizeRecipeEquipmentByID(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling visualizeRecipeEquipmentByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'defaultCss': opts['defaultCss']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/{id}/equipmentWidget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeRecipeIngredientsByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeIngredientsByIDCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ingredients by ID Widget
     * Visualize a recipe's ingredient list.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.measure Whether the the measures should be 'us' or 'metric'.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeIngredientsByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizeRecipeIngredientsByID',
    value: function visualizeRecipeIngredientsByID(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling visualizeRecipeIngredientsByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'defaultCss': opts['defaultCss'],
        'measure': opts['measure']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/{id}/ingredientWidget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeRecipeNutrition operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeNutritionCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recipe Nutrition Widget
     * Visualize a recipe's nutritional information as HTML including CSS.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.language The language of the input. Either 'en' or 'de'.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeNutritionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizeRecipeNutrition',
    value: function visualizeRecipeNutrition(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
        'Content-Type': opts['contentType'],
        'Accept': opts['accept']
      };
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/visualizeNutrition', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeRecipeNutritionByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeNutritionByIDCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recipe Nutrition by ID Widget
     * Visualize a recipe's nutritional information as HTML including CSS.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeNutritionByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizeRecipeNutritionByID',
    value: function visualizeRecipeNutritionByID(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling visualizeRecipeNutritionByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'defaultCss': opts['defaultCss']
      };
      var headerParams = {
        'Accept': opts['accept']
      };
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/{id}/nutritionWidget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeRecipePriceBreakdownByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipePriceBreakdownByIDCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price Breakdown by ID Widget
     * Visualize a recipe's price breakdown.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipePriceBreakdownByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizeRecipePriceBreakdownByID',
    value: function visualizeRecipePriceBreakdownByID(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling visualizeRecipePriceBreakdownByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'defaultCss': opts['defaultCss']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/{id}/priceBreakdownWidget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeRecipeTaste operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeTasteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recipe Taste Widget
     * Visualize a recipe's taste information as HTML including CSS. You can play around with that endpoint!
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.language The language of the input. Either 'en' or 'de'.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
     * @param {Boolean} opts.normalize Whether to normalize to the strongest taste.
     * @param {String} opts.rgb Red, green, blue values for the chart color.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeTasteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizeRecipeTaste',
    value: function visualizeRecipeTaste(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'language': opts['language'],
        'normalize': opts['normalize'],
        'rgb': opts['rgb']
      };
      var headerParams = {
        'Content-Type': opts['contentType'],
        'Accept': opts['accept']
      };
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/visualizeTaste', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeRecipeTasteByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeTasteByIDCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recipe Taste by ID Widget
     * Get a recipe's taste. The tastes supported are sweet, salty, sour, bitter, savory, and fatty.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/Boolean} opts.normalize Whether to normalize to the strongest taste. (default to true)
     * @param {String} opts.rgb Red, green, blue values for the chart color.
     * @param {module:com.spoonacular.client/com.spoonacular/RecipesApi~visualizeRecipeTasteByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizeRecipeTasteByID',
    value: function visualizeRecipeTasteByID(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling visualizeRecipeTasteByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'normalize': opts['normalize'],
        'rgb': opts['rgb']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/{id}/tasteWidget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RecipesApi;
}();

exports.default = RecipesApi;