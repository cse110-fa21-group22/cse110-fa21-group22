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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20045ProductMatches model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045ProductMatches
 * @version 1.0
 */
var InlineResponse20045ProductMatches = function () {
  /**
   * Constructs a new <code>InlineResponse20045ProductMatches</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045ProductMatches
   * @param id {Number} 
   * @param title {String} 
   * @param averageRating {Number} 
   * @param imageUrl {String} 
   * @param link {String} 
   * @param price {String} 
   * @param ratingCount {Number} 
   * @param score {Number} 
   */
  function InlineResponse20045ProductMatches(id, title, averageRating, imageUrl, link, price, ratingCount, score) {
    _classCallCheck(this, InlineResponse20045ProductMatches);

    InlineResponse20045ProductMatches.initialize(this, id, title, averageRating, imageUrl, link, price, ratingCount, score);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20045ProductMatches, null, [{
    key: 'initialize',
    value: function initialize(obj, id, title, averageRating, imageUrl, link, price, ratingCount, score) {
      obj['id'] = id;
      obj['title'] = title;
      obj['averageRating'] = averageRating;
      obj['imageUrl'] = imageUrl;
      obj['link'] = link;
      obj['price'] = price;
      obj['ratingCount'] = ratingCount;
      obj['score'] = score;
    }

    /**
     * Constructs a <code>InlineResponse20045ProductMatches</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045ProductMatches} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045ProductMatches} The populated <code>InlineResponse20045ProductMatches</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20045ProductMatches();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('averageRating')) {
          obj['averageRating'] = _ApiClient2.default.convertToType(data['averageRating'], 'Number');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient2.default.convertToType(data['description'], Object);
        }
        if (data.hasOwnProperty('imageUrl')) {
          obj['imageUrl'] = _ApiClient2.default.convertToType(data['imageUrl'], 'String');
        }
        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient2.default.convertToType(data['link'], 'String');
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient2.default.convertToType(data['price'], 'String');
        }
        if (data.hasOwnProperty('ratingCount')) {
          obj['ratingCount'] = _ApiClient2.default.convertToType(data['ratingCount'], 'Number');
        }
        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient2.default.convertToType(data['score'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20045ProductMatches;
}();

/**
 * @member {Number} id
 */


InlineResponse20045ProductMatches.prototype['id'] = undefined;

/**
 * @member {String} title
 */
InlineResponse20045ProductMatches.prototype['title'] = undefined;

/**
 * @member {Number} averageRating
 */
InlineResponse20045ProductMatches.prototype['averageRating'] = undefined;

/**
 * @member {Object} description
 */
InlineResponse20045ProductMatches.prototype['description'] = undefined;

/**
 * @member {String} imageUrl
 */
InlineResponse20045ProductMatches.prototype['imageUrl'] = undefined;

/**
 * @member {String} link
 */
InlineResponse20045ProductMatches.prototype['link'] = undefined;

/**
 * @member {String} price
 */
InlineResponse20045ProductMatches.prototype['price'] = undefined;

/**
 * @member {Number} ratingCount
 */
InlineResponse20045ProductMatches.prototype['ratingCount'] = undefined;

/**
 * @member {Number} score
 */
InlineResponse20045ProductMatches.prototype['score'] = undefined;

exports.default = InlineResponse20045ProductMatches;