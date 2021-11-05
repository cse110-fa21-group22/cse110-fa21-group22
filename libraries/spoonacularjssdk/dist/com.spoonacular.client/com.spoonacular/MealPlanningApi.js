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

var _InlineObject = require('../com.spoonacular.client.model/InlineObject10');

var _InlineObject2 = _interopRequireDefault(_InlineObject);

var _InlineObject3 = require('../com.spoonacular.client.model/InlineObject3');

var _InlineObject4 = _interopRequireDefault(_InlineObject3);

var _InlineObject5 = require('../com.spoonacular.client.model/InlineObject4');

var _InlineObject6 = _interopRequireDefault(_InlineObject5);

var _InlineObject7 = require('../com.spoonacular.client.model/InlineObject5');

var _InlineObject8 = _interopRequireDefault(_InlineObject7);

var _InlineObject9 = require('../com.spoonacular.client.model/InlineObject6');

var _InlineObject10 = _interopRequireDefault(_InlineObject9);

var _InlineObject11 = require('../com.spoonacular.client.model/InlineObject7');

var _InlineObject12 = _interopRequireDefault(_InlineObject11);

var _InlineObject13 = require('../com.spoonacular.client.model/InlineObject8');

var _InlineObject14 = _interopRequireDefault(_InlineObject13);

var _InlineObject15 = require('../com.spoonacular.client.model/InlineObject9');

var _InlineObject16 = _interopRequireDefault(_InlineObject15);

var _InlineResponse = require('../com.spoonacular.client.model/InlineResponse20037');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('../com.spoonacular.client.model/InlineResponse20038');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('../com.spoonacular.client.model/InlineResponse20039');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _InlineResponse7 = require('../com.spoonacular.client.model/InlineResponse20040');

var _InlineResponse8 = _interopRequireDefault(_InlineResponse7);

var _InlineResponse9 = require('../com.spoonacular.client.model/InlineResponse20041');

var _InlineResponse10 = _interopRequireDefault(_InlineResponse9);

var _InlineResponse11 = require('../com.spoonacular.client.model/InlineResponse20042');

var _InlineResponse12 = _interopRequireDefault(_InlineResponse11);

var _InlineResponse13 = require('../com.spoonacular.client.model/InlineResponse20043');

var _InlineResponse14 = _interopRequireDefault(_InlineResponse13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* MealPlanning service.
* @module com.spoonacular.client/com.spoonacular/MealPlanningApi
* @version 1.0
*/
var MealPlanningApi = function () {

  /**
  * Constructs a new MealPlanningApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/MealPlanningApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function MealPlanningApi(apiClient) {
    _classCallCheck(this, MealPlanningApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the addMealPlanTemplate operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addMealPlanTemplateCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add Meal Plan Template
   * Add a meal plan template for a user.
   * @param {String} username The username.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject6} inlineObject6 
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addMealPlanTemplateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040}
   */


  _createClass(MealPlanningApi, [{
    key: 'addMealPlanTemplate',
    value: function addMealPlanTemplate(username, hash, inlineObject6, callback) {
      var postBody = inlineObject6;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling addMealPlanTemplate");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling addMealPlanTemplate");
      }
      // verify the required parameter 'inlineObject6' is set
      if (inlineObject6 === undefined || inlineObject6 === null) {
        throw new Error("Missing the required parameter 'inlineObject6' when calling addMealPlanTemplate");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = _InlineResponse8.default;
      return this.apiClient.callApi('/mealplanner/{username}/templates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addToMealPlan operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToMealPlanCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add to Meal Plan
     * Add an item to the user's meal plan.
     * @param {String} username The username.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject4} inlineObject4 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToMealPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'addToMealPlan',
    value: function addToMealPlan(username, hash, inlineObject4, callback) {
      var postBody = inlineObject4;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling addToMealPlan");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling addToMealPlan");
      }
      // verify the required parameter 'inlineObject4' is set
      if (inlineObject4 === undefined || inlineObject4 === null) {
        throw new Error("Missing the required parameter 'inlineObject4' when calling addToMealPlan");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['', 'application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mealplanner/{username}/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addToShoppingList operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToShoppingListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add to Shopping List
     * Add an item to the current shopping list of a user.
     * @param {String} username The username.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject9} inlineObject9 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042}
     */

  }, {
    key: 'addToShoppingList',
    value: function addToShoppingList(username, hash, inlineObject9, callback) {
      var postBody = inlineObject9;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling addToShoppingList");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling addToShoppingList");
      }
      // verify the required parameter 'inlineObject9' is set
      if (inlineObject9 === undefined || inlineObject9 === null) {
        throw new Error("Missing the required parameter 'inlineObject9' when calling addToShoppingList");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['', 'application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse12.default;
      return this.apiClient.callApi('/mealplanner/{username}/shopping-list/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the clearMealPlanDay operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~clearMealPlanDayCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clear Meal Plan Day
     * Delete all planned items from the user's meal plan for a specific day.
     * @param {String} username The username.
     * @param {String} _date The date in the format yyyy-mm-dd.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject3} inlineObject3 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~clearMealPlanDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'clearMealPlanDay',
    value: function clearMealPlanDay(username, _date, hash, inlineObject3, callback) {
      var postBody = inlineObject3;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling clearMealPlanDay");
      }
      // verify the required parameter '_date' is set
      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling clearMealPlanDay");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling clearMealPlanDay");
      }
      // verify the required parameter 'inlineObject3' is set
      if (inlineObject3 === undefined || inlineObject3 === null) {
        throw new Error("Missing the required parameter 'inlineObject3' when calling clearMealPlanDay");
      }

      var pathParams = {
        'username': username,
        'date': _date
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mealplanner/{username}/day/{date}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the connectUser operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~connectUserCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20043} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Connect User
     * In order to call user-specific endpoints, you need to connect your app's users to spoonacular users.
     * @param {Object} body 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~connectUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20043}
     */

  }, {
    key: 'connectUser',
    value: function connectUser(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling connectUser");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['', 'application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse14.default;
      return this.apiClient.callApi('/users/connect', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteFromMealPlan operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromMealPlanCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete from Meal Plan
     * Delete an item from the user's meal plan.
     * @param {String} username The username.
     * @param {Number} id The shopping list item id.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject5} inlineObject5 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromMealPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'deleteFromMealPlan',
    value: function deleteFromMealPlan(username, id, hash, inlineObject5, callback) {
      var postBody = inlineObject5;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteFromMealPlan");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFromMealPlan");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling deleteFromMealPlan");
      }
      // verify the required parameter 'inlineObject5' is set
      if (inlineObject5 === undefined || inlineObject5 === null) {
        throw new Error("Missing the required parameter 'inlineObject5' when calling deleteFromMealPlan");
      }

      var pathParams = {
        'username': username,
        'id': id
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mealplanner/{username}/items/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteFromShoppingList operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromShoppingListCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete from Shopping List
     * Delete an item from the current shopping list of the user.
     * @param {String} username The username.
     * @param {Number} id The item's id.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject10} inlineObject10 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'deleteFromShoppingList',
    value: function deleteFromShoppingList(username, id, hash, inlineObject10, callback) {
      var postBody = inlineObject10;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteFromShoppingList");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFromShoppingList");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling deleteFromShoppingList");
      }
      // verify the required parameter 'inlineObject10' is set
      if (inlineObject10 === undefined || inlineObject10 === null) {
        throw new Error("Missing the required parameter 'inlineObject10' when calling deleteFromShoppingList");
      }

      var pathParams = {
        'username': username,
        'id': id
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mealplanner/{username}/shopping-list/items/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteMealPlanTemplate operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteMealPlanTemplateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Meal Plan Template
     * Delete a meal plan template for a user.
     * @param {String} username The username.
     * @param {Number} id The item's id.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject7} inlineObject7 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteMealPlanTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'deleteMealPlanTemplate',
    value: function deleteMealPlanTemplate(username, id, hash, inlineObject7, callback) {
      var postBody = inlineObject7;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteMealPlanTemplate");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteMealPlanTemplate");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling deleteMealPlanTemplate");
      }
      // verify the required parameter 'inlineObject7' is set
      if (inlineObject7 === undefined || inlineObject7 === null) {
        throw new Error("Missing the required parameter 'inlineObject7' when calling deleteMealPlanTemplate");
      }

      var pathParams = {
        'username': username,
        'id': id
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mealplanner/{username}/templates/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the generateMealPlan operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateMealPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20037} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate Meal Plan
     * Generate a meal plan with three meals per day (breakfast, lunch, and dinner).
     * @param {Object} opts Optional parameters
     * @param {String} opts.timeFrame Either for one \"day\" or an entire \"week\".
     * @param {Number} opts.targetCalories What is the caloric target for one day? The meal plan generator will try to get as close as possible to that goal.
     * @param {String} opts.diet Enter a diet that the meal plan has to adhere to. See a full list of supported diets.
     * @param {String} opts.exclude A comma-separated list of allergens or ingredients that must be excluded.
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateMealPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20037}
     */

  }, {
    key: 'generateMealPlan',
    value: function generateMealPlan(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'timeFrame': opts['timeFrame'],
        'targetCalories': opts['targetCalories'],
        'diet': opts['diet'],
        'exclude': opts['exclude']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;
      return this.apiClient.callApi('/mealplanner/generate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the generateShoppingList operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateShoppingListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate Shopping List
     * Generate the shopping list for a user from the meal planner in a given time frame.
     * @param {String} username The username.
     * @param {String} startDate The start date in the format yyyy-mm-dd.
     * @param {String} endDate The end date in the format yyyy-mm-dd.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject8} inlineObject8 
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042}
     */

  }, {
    key: 'generateShoppingList',
    value: function generateShoppingList(username, startDate, endDate, hash, inlineObject8, callback) {
      var postBody = inlineObject8;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling generateShoppingList");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling generateShoppingList");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling generateShoppingList");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling generateShoppingList");
      }
      // verify the required parameter 'inlineObject8' is set
      if (inlineObject8 === undefined || inlineObject8 === null) {
        throw new Error("Missing the required parameter 'inlineObject8' when calling generateShoppingList");
      }

      var pathParams = {
        'username': username,
        'start-date': startDate,
        'end-date': endDate
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [''];
      var accepts = ['application/json'];
      var returnType = _InlineResponse12.default;
      return this.apiClient.callApi('/mealplanner/{username}/shopping-list/{start-date}/{end-date}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getMealPlanTemplate operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20041} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meal Plan Template
     * Get information about a meal plan template.
     * @param {String} username The username.
     * @param {Number} id The item's id.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20041}
     */

  }, {
    key: 'getMealPlanTemplate',
    value: function getMealPlanTemplate(username, id, hash, callback) {
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getMealPlanTemplate");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMealPlanTemplate");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMealPlanTemplate");
      }

      var pathParams = {
        'username': username,
        'id': id
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse10.default;
      return this.apiClient.callApi('/mealplanner/{username}/templates/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getMealPlanTemplates operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20039} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meal Plan Templates
     * Get meal plan templates from user or public ones.
     * @param {String} username The username.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20039}
     */

  }, {
    key: 'getMealPlanTemplates',
    value: function getMealPlanTemplates(username, hash, callback) {
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getMealPlanTemplates");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMealPlanTemplates");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse6.default;
      return this.apiClient.callApi('/mealplanner/{username}/templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getMealPlanWeek operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanWeekCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meal Plan Week
     * Retrieve a meal planned week for the given user. The username must be a spoonacular user and the hash must the the user's hash that can be found in his/her account.
     * @param {String} username The username.
     * @param {String} startDate The start date of the meal planned week in the format yyyy-mm-dd.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanWeekCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038}
     */

  }, {
    key: 'getMealPlanWeek',
    value: function getMealPlanWeek(username, startDate, hash, callback) {
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getMealPlanWeek");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getMealPlanWeek");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMealPlanWeek");
      }

      var pathParams = {
        'username': username,
        'start-date': startDate
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4.default;
      return this.apiClient.callApi('/mealplanner/{username}/week/{start-date}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getShoppingList operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getShoppingListCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Shopping List
     * Get the current shopping list for the given user.
     * @param {String} username The username.
     * @param {String} hash The private hash for the username.
     * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042}
     */

  }, {
    key: 'getShoppingList',
    value: function getShoppingList(username, hash, callback) {
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getShoppingList");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getShoppingList");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'hash': hash
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse12.default;
      return this.apiClient.callApi('/mealplanner/{username}/shopping-list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MealPlanningApi;
}();

exports.default = MealPlanningApi;