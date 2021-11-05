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

var _InlineObject3 = require('../com.spoonacular.client.model/InlineObject1');

var _InlineObject4 = _interopRequireDefault(_InlineObject3);

var _InlineResponse = require('../com.spoonacular.client.model/InlineResponse20027');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('../com.spoonacular.client.model/InlineResponse20028');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('../com.spoonacular.client.model/InlineResponse20030');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _InlineResponse7 = require('../com.spoonacular.client.model/InlineResponse20031');

var _InlineResponse8 = _interopRequireDefault(_InlineResponse7);

var _InlineResponse9 = require('../com.spoonacular.client.model/InlineResponse20032');

var _InlineResponse10 = _interopRequireDefault(_InlineResponse9);

var _InlineResponse11 = require('../com.spoonacular.client.model/InlineResponse20033');

var _InlineResponse12 = _interopRequireDefault(_InlineResponse11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Products service.
* @module com.spoonacular.client/com.spoonacular/ProductsApi
* @version 1.0
*/
var ProductsApi = function () {

  /**
  * Constructs a new ProductsApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/ProductsApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function ProductsApi(apiClient) {
    _classCallCheck(this, ProductsApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the autocompleteProductSearch operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~autocompleteProductSearchCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20032} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Autocomplete Product Search
   * Generate suggestions for grocery products based on a (partial) query. The matches will be found by looking in the title only.
   * @param {String} query The (partial) search query.
   * @param {Object} opts Optional parameters
   * @param {Number} opts._number The number of results to return (between 1 and 25).
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~autocompleteProductSearchCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20032}
   */


  _createClass(ProductsApi, [{
    key: 'autocompleteProductSearch',
    value: function autocompleteProductSearch(query, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling autocompleteProductSearch");
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
      var returnType = _InlineResponse10.default;
      return this.apiClient.callApi('/food/products/suggest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the classifyGroceryProduct operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Classify Grocery Product
     * This endpoint allows you to match a packaged food to a basic category, e.g. a specific brand of milk to the category milk.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject1} inlineObject1 
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.locale The display name of the returned category, supported is en_US (for American English) and en_GB (for British English).
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033}
     */

  }, {
    key: 'classifyGroceryProduct',
    value: function classifyGroceryProduct(inlineObject1, opts, callback) {
      opts = opts || {};
      var postBody = inlineObject1;
      // verify the required parameter 'inlineObject1' is set
      if (inlineObject1 === undefined || inlineObject1 === null) {
        throw new Error("Missing the required parameter 'inlineObject1' when calling classifyGroceryProduct");
      }

      var pathParams = {};
      var queryParams = {
        'locale': opts['locale']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse12.default;
      return this.apiClient.callApi('/food/products/classify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the classifyGroceryProductBulk operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductBulkCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Classify Grocery Product Bulk
     * Provide a set of product jsons, get back classified products.
     * @param {Array.<InlineObject>} inlineObject 
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale The display name of the returned category, supported is en_US (for American English) and en_GB (for British English).
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductBulkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033>}
     */

  }, {
    key: 'classifyGroceryProductBulk',
    value: function classifyGroceryProductBulk(inlineObject, opts, callback) {
      opts = opts || {};
      var postBody = inlineObject;
      // verify the required parameter 'inlineObject' is set
      if (inlineObject === undefined || inlineObject === null) {
        throw new Error("Missing the required parameter 'inlineObject' when calling classifyGroceryProductBulk");
      }

      var pathParams = {};
      var queryParams = {
        'locale': opts['locale']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_InlineResponse12.default];
      return this.apiClient.callApi('/food/products/classifyBatch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getComparableProducts operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~getComparableProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Comparable Products
     * Find comparable products to the given one.
     * @param {Number} upc The UPC of the product for which you want to find comparable products.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~getComparableProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031}
     */

  }, {
    key: 'getComparableProducts',
    value: function getComparableProducts(upc, callback) {
      var postBody = null;
      // verify the required parameter 'upc' is set
      if (upc === undefined || upc === null) {
        throw new Error("Missing the required parameter 'upc' when calling getComparableProducts");
      }

      var pathParams = {
        'upc': upc
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse8.default;
      return this.apiClient.callApi('/food/products/upc/{upc}/comparable', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getProductInformation operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~getProductInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product Information
     * Use a product id to get full information about a product, such as ingredients, nutrition, etc. The nutritional information is per serving.
     * @param {Number} id The item's id.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~getProductInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030}
     */

  }, {
    key: 'getProductInformation',
    value: function getProductInformation(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductInformation");
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
      return this.apiClient.callApi('/food/products/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the productNutritionByIDImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionByIDImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Product Nutrition by ID Image
     * Visualize a product's nutritional information as an image.
     * @param {Number} id The id of the product.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'productNutritionByIDImage',
    value: function productNutritionByIDImage(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productNutritionByIDImage");
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
      return this.apiClient.callApi('/food/products/{id}/nutritionWidget.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the productNutritionLabelImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Product Nutrition Label Image
     * Get a product's nutrition label as an image.
     * @param {Number} id The product id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
     * @param {Boolean} opts.showZeroValues Whether to show zero values.
     * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: 'productNutritionLabelImage',
    value: function productNutritionLabelImage(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productNutritionLabelImage");
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
      return this.apiClient.callApi('/food/products/{id}/nutritionLabel.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the productNutritionLabelWidget operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelWidgetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Product Nutrition Label Widget
     * Get a product's nutrition label as an HTML widget.
     * @param {Number} id The product id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
     * @param {Boolean} opts.showZeroValues Whether to show zero values.
     * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelWidgetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'productNutritionLabelWidget',
    value: function productNutritionLabelWidget(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productNutritionLabelWidget");
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
      return this.apiClient.callApi('/food/products/{id}/nutritionLabel', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchGroceryProducts operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Grocery Products
     * Search packaged food products, such as frozen pizza or Greek yogurt.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {Number} opts.minCalories The minimum amount of calories the product must have.
     * @param {Number} opts.maxCalories The maximum amount of calories the product can have.
     * @param {Number} opts.minCarbs The minimum amount of carbohydrates in grams the product must have.
     * @param {Number} opts.maxCarbs The maximum amount of carbohydrates in grams the product can have.
     * @param {Number} opts.minProtein The minimum amount of protein in grams the product must have.
     * @param {Number} opts.maxProtein The maximum amount of protein in grams the product can have.
     * @param {Number} opts.minFat The minimum amount of fat in grams the product must have.
     * @param {Number} opts.maxFat The maximum amount of fat in grams the product can have.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/Boolean} opts.addProductInformation If set to true, you get more information about the products returned.
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027}
     */

  }, {
    key: 'searchGroceryProducts',
    value: function searchGroceryProducts(opts, callback) {
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
        'addProductInformation': opts['addProductInformation'],
        'offset': opts['offset'],
        'number': opts['_number']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;
      return this.apiClient.callApi('/food/products/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchGroceryProductsByUPC operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsByUPCCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Grocery Products by UPC
     * Get information about a packaged food using its UPC.
     * @param {Number} upc The product's UPC.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsByUPCCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028}
     */

  }, {
    key: 'searchGroceryProductsByUPC',
    value: function searchGroceryProductsByUPC(upc, callback) {
      var postBody = null;
      // verify the required parameter 'upc' is set
      if (upc === undefined || upc === null) {
        throw new Error("Missing the required parameter 'upc' when calling searchGroceryProductsByUPC");
      }

      var pathParams = {
        'upc': upc
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4.default;
      return this.apiClient.callApi('/food/products/upc/{upc}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeProductNutritionByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~visualizeProductNutritionByIDCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Product Nutrition by ID Widget
     * Visualize a product's nutritional information as HTML including CSS.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
     * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~visualizeProductNutritionByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: 'visualizeProductNutritionByID',
    value: function visualizeProductNutritionByID(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling visualizeProductNutritionByID");
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
      return this.apiClient.callApi('/food/products/{id}/nutritionWidget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProductsApi;
}();

exports.default = ProductsApi;