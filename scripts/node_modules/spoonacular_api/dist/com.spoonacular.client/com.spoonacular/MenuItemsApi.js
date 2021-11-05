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

var _InlineResponse = require('../com.spoonacular.client.model/InlineResponse20032');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('../com.spoonacular.client.model/InlineResponse20035');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('../com.spoonacular.client.model/InlineResponse20036');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* MenuItems service.
* @module com.spoonacular.client/com.spoonacular/MenuItemsApi
* @version 1.0
*/
var MenuItemsApi = function () {

  /**
  * Constructs a new MenuItemsApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/MenuItemsApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function MenuItemsApi(apiClient) {
    _classCallCheck(this, MenuItemsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the autocompleteMenuItemSearch operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~autocompleteMenuItemSearchCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20032} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Autocomplete Menu Item Search
   * Generate suggestions for menu items based on a (partial) query. The matches will be found by looking in the title only.
   * @param {String} query The (partial) search query.
   * @param {Object} opts Optional parameters
   * @param {Number} opts._number The number of results to return (between 1 and 25).
   * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~autocompleteMenuItemSearchCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20032}
   */


  _createClass(MenuItemsApi, [{
    key: 'autocompleteMenuItemSearch',
    value: function autocompleteMenuItemSearch(query, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling autocompleteMenuItemSearch");
      }

      var pathParams = {};
      var queryParams = {
        'query': query,
        'number': opts['_number']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;
      return this.apiClient.callApi('/food/menuItems/suggest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getMenuItemInformation operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~getMenuItemInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20036} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Menu Item Information
     * Use a menu item id to get all available information about a menu item, such as nutrition.
     * @param {Number} id The item's id.
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~getMenuItemInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20036}
     */

  }, {
    key: 'getMenuItemInformation',
    value: function getMenuItemInformation(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMenuItemInformation");
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
      return this.apiClient.callApi('/food/menuItems/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the menuItemNutritionByIDImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionByIDImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Menu Item Nutrition by ID Image
     * Visualize a menu item's nutritional information as HTML including CSS.
     * @param {Number} id The menu item id.
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'menuItemNutritionByIDImage',
    value: function menuItemNutritionByIDImage(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling menuItemNutritionByIDImage");
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
      return this.apiClient.callApi('/food/menuItems/{id}/nutritionWidget.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the menuItemNutritionLabelImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Menu Item Nutrition Label Image
     * Visualize a menu item's nutritional label information as an image.
     * @param {Number} id The menu item id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
     * @param {Boolean} opts.showZeroValues Whether to show zero values.
     * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'menuItemNutritionLabelImage',
    value: function menuItemNutritionLabelImage(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling menuItemNutritionLabelImage");
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
      return this.apiClient.callApi('/food/menuItems/{id}/nutritionLabel.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the menuItemNutritionLabelWidget operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelWidgetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Menu Item Nutrition Label Widget
     * Visualize a menu item's nutritional label information as HTML including CSS.
     * @param {Number} id The menu item id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
     * @param {Boolean} opts.showZeroValues Whether to show zero values.
     * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelWidgetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'menuItemNutritionLabelWidget',
    value: function menuItemNutritionLabelWidget(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling menuItemNutritionLabelWidget");
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
      return this.apiClient.callApi('/food/menuItems/{id}/nutritionLabel', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchMenuItems operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~searchMenuItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Menu Items
     * Search over 115,000 menu items from over 800 fast food and chain restaurants. For example, McDonald's Big Mac or Starbucks Mocha.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {Number} opts.minCalories The minimum amount of calories the menu item must have.
     * @param {Number} opts.maxCalories The maximum amount of calories the menu item can have.
     * @param {Number} opts.minCarbs The minimum amount of carbohydrates in grams the menu item must have.
     * @param {Number} opts.maxCarbs The maximum amount of carbohydrates in grams the menu item can have.
     * @param {Number} opts.minProtein The minimum amount of protein in grams the menu item must have.
     * @param {Number} opts.maxProtein The maximum amount of protein in grams the menu item can have.
     * @param {Number} opts.minFat The minimum amount of fat in grams the menu item must have.
     * @param {Number} opts.maxFat The maximum amount of fat in grams the menu item can have.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/Boolean} opts.addMenuItemInformation If set to true, you get more information about the menu items returned.
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~searchMenuItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035}
     */

  }, {
    key: 'searchMenuItems',
    value: function searchMenuItems(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'minCalories': opts['minCalories'],
        'maxCalories': opts['maxCalories'],
        'minCarbs': opts['minCarbs'],
        'maxCarbs': opts['maxCarbs'],
        'minProtein': opts['minProtein'],
        'maxProtein': opts['maxProtein'],
        'minFat': opts['minFat'],
        'maxFat': opts['maxFat'],
        'addMenuItemInformation': opts['addMenuItemInformation'],
        'offset': opts['offset'],
        'number': opts['_number']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4.default;
      return this.apiClient.callApi('/food/menuItems/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeMenuItemNutritionByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~visualizeMenuItemNutritionByIDCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Menu Item Nutrition by ID Widget
     * Visualize a menu item's nutritional information as HTML including CSS.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
     * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~visualizeMenuItemNutritionByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizeMenuItemNutritionByID',
    value: function visualizeMenuItemNutritionByID(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling visualizeMenuItemNutritionByID");
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
      return this.apiClient.callApi('/food/menuItems/{id}/nutritionWidget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MenuItemsApi;
}();

exports.default = MenuItemsApi;