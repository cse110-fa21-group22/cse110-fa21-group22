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

var _InlineResponse = require('../com.spoonacular.client.model/InlineResponse20029');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

var _InlineResponse3 = require('../com.spoonacular.client.model/InlineResponse20048');

var _InlineResponse4 = _interopRequireDefault(_InlineResponse3);

var _InlineResponse5 = require('../com.spoonacular.client.model/InlineResponse20049');

var _InlineResponse6 = _interopRequireDefault(_InlineResponse5);

var _InlineResponse7 = require('../com.spoonacular.client.model/InlineResponse20051');

var _InlineResponse8 = _interopRequireDefault(_InlineResponse7);

var _InlineResponse9 = require('../com.spoonacular.client.model/InlineResponse20052');

var _InlineResponse10 = _interopRequireDefault(_InlineResponse9);

var _InlineResponse11 = require('../com.spoonacular.client.model/InlineResponse20053');

var _InlineResponse12 = _interopRequireDefault(_InlineResponse11);

var _InlineResponse13 = require('../com.spoonacular.client.model/InlineResponse20054');

var _InlineResponse14 = _interopRequireDefault(_InlineResponse13);

var _InlineResponse15 = require('../com.spoonacular.client.model/InlineResponse20055');

var _InlineResponse16 = _interopRequireDefault(_InlineResponse15);

var _InlineResponse17 = require('../com.spoonacular.client.model/InlineResponse20056');

var _InlineResponse18 = _interopRequireDefault(_InlineResponse17);

var _InlineResponse19 = require('../com.spoonacular.client.model/InlineResponse20057');

var _InlineResponse20 = _interopRequireDefault(_InlineResponse19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Misc service.
* @module com.spoonacular.client/com.spoonacular/MiscApi
* @version 1.0
*/
var MiscApi = function () {

  /**
  * Constructs a new MiscApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/MiscApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function MiscApi(apiClient) {
    _classCallCheck(this, MiscApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Callback function to receive the result of the detectFoodInText operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~detectFoodInTextCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20051} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Detect Food in Text
   * Take any text and find all mentions of food contained within it. This task is also called Named Entity Recognition (NER). In this case, the entities are foods. Either dishes, such as pizza or cheeseburger, or ingredients, such as cucumber or almonds.
   * @param {Object} opts Optional parameters
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~detectFoodInTextCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20051}
   */


  _createClass(MiscApi, [{
    key: 'detectFoodInText',
    value: function detectFoodInText(opts, callback) {
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
      var returnType = _InlineResponse8.default;
      return this.apiClient.callApi('/food/detect', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getARandomFoodJoke operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~getARandomFoodJokeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20055} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Random Food Joke
     * Get a random joke that is related to food. Caution: this is an endpoint for adults!
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~getARandomFoodJokeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20055}
     */

  }, {
    key: 'getARandomFoodJoke',
    value: function getARandomFoodJoke(callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse16.default;
      return this.apiClient.callApi('/food/jokes/random', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getConversationSuggests operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~getConversationSuggestsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20057} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Conversation Suggests
     * This endpoint returns suggestions for things the user can say or ask the chatbot.
     * @param {String} query A (partial) query from the user. The endpoint will return if it matches topics it can talk about.
     * @param {Object} opts Optional parameters
     * @param {Number} opts._number The number of suggestions to return (between 1 and 25).
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~getConversationSuggestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20057}
     */

  }, {
    key: 'getConversationSuggests',
    value: function getConversationSuggests(query, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getConversationSuggests");
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
      var returnType = _InlineResponse20.default;
      return this.apiClient.callApi('/food/converse/suggest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRandomFoodTrivia operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~getRandomFoodTriviaCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20055} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Random Food Trivia
     * Returns random food trivia.
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~getRandomFoodTriviaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20055}
     */

  }, {
    key: 'getRandomFoodTrivia',
    value: function getRandomFoodTrivia(callback) {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse16.default;
      return this.apiClient.callApi('/food/trivia/random', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the imageAnalysisByURL operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~imageAnalysisByURLCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Image Analysis by URL
     * Analyze a food image. The API tries to classify the image, guess the nutrition, and find a matching recipes.
     * @param {String} imageUrl The URL of the image to be analyzed.
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~imageAnalysisByURLCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049}
     */

  }, {
    key: 'imageAnalysisByURL',
    value: function imageAnalysisByURL(imageUrl, callback) {
      var postBody = null;
      // verify the required parameter 'imageUrl' is set
      if (imageUrl === undefined || imageUrl === null) {
        throw new Error("Missing the required parameter 'imageUrl' when calling imageAnalysisByURL");
      }

      var pathParams = {};
      var queryParams = {
        'imageUrl': imageUrl
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse6.default;
      return this.apiClient.callApi('/food/images/analyze', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the imageClassificationByURL operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~imageClassificationByURLCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Image Classification by URL
     * Classify a food image.
     * @param {String} imageUrl The URL of the image to be classified.
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~imageClassificationByURLCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048}
     */

  }, {
    key: 'imageClassificationByURL',
    value: function imageClassificationByURL(imageUrl, callback) {
      var postBody = null;
      // verify the required parameter 'imageUrl' is set
      if (imageUrl === undefined || imageUrl === null) {
        throw new Error("Missing the required parameter 'imageUrl' when calling imageClassificationByURL");
      }

      var pathParams = {};
      var queryParams = {
        'imageUrl': imageUrl
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4.default;
      return this.apiClient.callApi('/food/images/classify', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchAllFood operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchAllFoodCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search All Food
     * Search all food content with one call. That includes recipes, grocery products, menu items, simple foods (ingredients), and food videos.
     * @param {String} query The search query.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchAllFoodCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053}
     */

  }, {
    key: 'searchAllFood',
    value: function searchAllFood(query, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchAllFood");
      }

      var pathParams = {};
      var queryParams = {
        'query': query,
        'offset': opts['offset'],
        'number': opts['_number']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse12.default;
      return this.apiClient.callApi('/food/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchCustomFoods operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchCustomFoodsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Custom Foods
     * Search custom foods in a user's account.
     * @param {String} username The username.
     * @param {String} hash The private hash for the username.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchCustomFoodsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029}
     */

  }, {
    key: 'searchCustomFoods',
    value: function searchCustomFoods(username, hash, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling searchCustomFoods");
      }
      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling searchCustomFoods");
      }

      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'username': username,
        'hash': hash,
        'offset': opts['offset'],
        'number': opts['_number']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.default;
      return this.apiClient.callApi('/food/customFoods/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchFoodVideos operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchFoodVideosCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Food Videos
     * Find recipe and other food related videos.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {String} opts.type The type of the recipes. See a full list of supported meal types.
     * @param {String} opts.cuisine The cuisine(s) of the recipes. One or more, comma separated. See a full list of supported cuisines.
     * @param {String} opts.diet The diet for which the recipes must be suitable. See a full list of supported diets.
     * @param {String} opts.includeIngredients A comma-separated list of ingredients that the recipes should contain.
     * @param {String} opts.excludeIngredients A comma-separated list of ingredients or ingredient types that the recipes must not contain.
     * @param {Number} opts.minLength Minimum video length in seconds.
     * @param {Number} opts.maxLength Maximum video length in seconds.
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchFoodVideosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054}
     */

  }, {
    key: 'searchFoodVideos',
    value: function searchFoodVideos(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'type': opts['type'],
        'cuisine': opts['cuisine'],
        'diet': opts['diet'],
        'includeIngredients': opts['includeIngredients'],
        'excludeIngredients': opts['excludeIngredients'],
        'minLength': opts['minLength'],
        'maxLength': opts['maxLength'],
        'offset': opts['offset'],
        'number': opts['_number']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse14.default;
      return this.apiClient.callApi('/food/videos/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the searchSiteContent operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchSiteContentCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20052} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Site Content
     * Search spoonacular's site content. You'll be able to find everything that you could also find using the search suggestions on spoonacular.com. This is a suggest API so you can send partial strings as queries.
     * @param {String} query The query to search for. You can also use partial queries such as \"spagh\" to already find spaghetti recipes, articles, grocery products, and other content.
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchSiteContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20052}
     */

  }, {
    key: 'searchSiteContent',
    value: function searchSiteContent(query, callback) {
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchSiteContent");
      }

      var pathParams = {};
      var queryParams = {
        'query': query
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse10.default;
      return this.apiClient.callApi('/food/site/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the talkToChatbot operation.
     * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~talkToChatbotCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20056} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Talk to Chatbot
     * This endpoint can be used to have a conversation about food with the spoonacular chatbot. Use the \"Get Conversation Suggests\" endpoint to show your user what he or she can say.
     * @param {String} text The request / question / answer from the user to the chatbot.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contextId An arbitrary globally unique id for your conversation. The conversation can contain states so you should pass your context id if you want the bot to be able to remember the conversation.
     * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~talkToChatbotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20056}
     */

  }, {
    key: 'talkToChatbot',
    value: function talkToChatbot(text, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling talkToChatbot");
      }

      var pathParams = {};
      var queryParams = {
        'text': text,
        'contextId': opts['contextId']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse18.default;
      return this.apiClient.callApi('/food/converse', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MiscApi;
}();

exports.default = MiscApi;