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

var _InlineResponse = require('../com.spoonacular.client.model/InlineResponse20044');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('../com.spoonacular.client.model/InlineResponse20045');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('../com.spoonacular.client.model/InlineResponse20046');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _InlineResponse7 = require('../com.spoonacular.client.model/InlineResponse20047');

var _InlineResponse8 = _interopRequireDefault(_InlineResponse7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Wine service.
* @module com.spoonacular.client/com.spoonacular/WineApi
* @version 1.0
*/
var WineApi = function () {

  /**
  * Constructs a new WineApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/WineApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function WineApi(apiClient) {
    _classCallCheck(this, WineApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the getDishPairingForWine operation.
   * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getDishPairingForWineCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20044} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Dish Pairing for Wine
   * Find a dish that goes well with a given wine.
   * @param {String} wine The type of wine that should be paired, e.g. \"merlot\", \"riesling\", or \"malbec\".
   * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getDishPairingForWineCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20044}
   */


  _createClass(WineApi, [{
    key: 'getDishPairingForWine',
    value: function getDishPairingForWine(wine, callback) {
      var postBody = null;
      // verify the required parameter 'wine' is set
      if (wine === undefined || wine === null) {
        throw new Error("Missing the required parameter 'wine' when calling getDishPairingForWine");
      }

      var pathParams = {};
      var queryParams = {
        'wine': wine
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;
      return this.apiClient.callApi('/food/wine/dishes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWineDescription operation.
     * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getWineDescriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20046} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Wine Description
     * Get a simple description of a certain wine, e.g. \"malbec\", \"riesling\", or \"merlot\".
     * @param {String} wine The name of the wine that should be paired, e.g. \"merlot\", \"riesling\", or \"malbec\".
     * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getWineDescriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20046}
     */

  }, {
    key: 'getWineDescription',
    value: function getWineDescription(wine, callback) {
      var postBody = null;
      // verify the required parameter 'wine' is set
      if (wine === undefined || wine === null) {
        throw new Error("Missing the required parameter 'wine' when calling getWineDescription");
      }

      var pathParams = {};
      var queryParams = {
        'wine': wine
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse6.default;
      return this.apiClient.callApi('/food/wine/description', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWinePairing operation.
     * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getWinePairingCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Wine Pairing
     * Find a wine that goes well with a food. Food can be a dish name (\"steak\"), an ingredient name (\"salmon\"), or a cuisine (\"italian\").
     * @param {String} food The food to get a pairing for. This can be a dish (\"steak\"), an ingredient (\"salmon\"), or a cuisine (\"italian\").
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxPrice The maximum price for the specific wine recommendation in USD.
     * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getWinePairingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045}
     */

  }, {
    key: 'getWinePairing',
    value: function getWinePairing(food, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'food' is set
      if (food === undefined || food === null) {
        throw new Error("Missing the required parameter 'food' when calling getWinePairing");
      }

      var pathParams = {};
      var queryParams = {
        'food': food,
        'maxPrice': opts['maxPrice']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4.default;
      return this.apiClient.callApi('/food/wine/pairing', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWineRecommendation operation.
     * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getWineRecommendationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Wine Recommendation
     * Get a specific wine recommendation (concrete product) for a given wine type, e.g. \"merlot\".
     * @param {String} wine The type of wine to get a specific product recommendation for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxPrice The maximum price for the specific wine recommendation in USD.
     * @param {Number} opts.minRating The minimum rating of the recommended wine between 0 and 1. For example, 0.8 equals 4 out of 5 stars.
     * @param {Number} opts._number The number of wine recommendations expected (between 1 and 100). (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getWineRecommendationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047}
     */

  }, {
    key: 'getWineRecommendation',
    value: function getWineRecommendation(wine, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'wine' is set
      if (wine === undefined || wine === null) {
        throw new Error("Missing the required parameter 'wine' when calling getWineRecommendation");
      }

      var pathParams = {};
      var queryParams = {
        'wine': wine,
        'maxPrice': opts['maxPrice'],
        'minRating': opts['minRating'],
        'number': opts['_number']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse8.default;
      return this.apiClient.callApi('/food/wine/recommendation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WineApi;
}();

exports.default = WineApi;