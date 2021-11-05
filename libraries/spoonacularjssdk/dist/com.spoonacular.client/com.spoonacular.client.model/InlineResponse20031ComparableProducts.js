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

var _InlineResponse20031ComparableProductsProtein = require('./InlineResponse20031ComparableProductsProtein');

var _InlineResponse20031ComparableProductsProtein2 = _interopRequireDefault(_InlineResponse20031ComparableProductsProtein);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20031ComparableProducts model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts
 * @version 1.0
 */
var InlineResponse20031ComparableProducts = function () {
  /**
   * Constructs a new <code>InlineResponse20031ComparableProducts</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts
   * @param calories {Array.<Object>} 
   * @param likes {Array.<Object>} 
   * @param price {Array.<Object>} 
   * @param protein {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein>} 
   * @param spoonacularScore {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein>} 
   * @param sugar {Array.<Object>} 
   */
  function InlineResponse20031ComparableProducts(calories, likes, price, protein, spoonacularScore, sugar) {
    _classCallCheck(this, InlineResponse20031ComparableProducts);

    InlineResponse20031ComparableProducts.initialize(this, calories, likes, price, protein, spoonacularScore, sugar);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20031ComparableProducts, null, [{
    key: 'initialize',
    value: function initialize(obj, calories, likes, price, protein, spoonacularScore, sugar) {
      obj['calories'] = calories;
      obj['likes'] = likes;
      obj['price'] = price;
      obj['protein'] = protein;
      obj['spoonacularScore'] = spoonacularScore;
      obj['sugar'] = sugar;
    }

    /**
     * Constructs a <code>InlineResponse20031ComparableProducts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts} The populated <code>InlineResponse20031ComparableProducts</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20031ComparableProducts();

        if (data.hasOwnProperty('calories')) {
          obj['calories'] = _ApiClient2.default.convertToType(data['calories'], [Object]);
        }
        if (data.hasOwnProperty('likes')) {
          obj['likes'] = _ApiClient2.default.convertToType(data['likes'], [Object]);
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient2.default.convertToType(data['price'], [Object]);
        }
        if (data.hasOwnProperty('protein')) {
          obj['protein'] = _ApiClient2.default.convertToType(data['protein'], [_InlineResponse20031ComparableProductsProtein2.default]);
        }
        if (data.hasOwnProperty('spoonacularScore')) {
          obj['spoonacularScore'] = _ApiClient2.default.convertToType(data['spoonacularScore'], [_InlineResponse20031ComparableProductsProtein2.default]);
        }
        if (data.hasOwnProperty('sugar')) {
          obj['sugar'] = _ApiClient2.default.convertToType(data['sugar'], [Object]);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20031ComparableProducts;
}();

/**
 * @member {Array.<Object>} calories
 */


InlineResponse20031ComparableProducts.prototype['calories'] = undefined;

/**
 * @member {Array.<Object>} likes
 */
InlineResponse20031ComparableProducts.prototype['likes'] = undefined;

/**
 * @member {Array.<Object>} price
 */
InlineResponse20031ComparableProducts.prototype['price'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein>} protein
 */
InlineResponse20031ComparableProducts.prototype['protein'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein>} spoonacularScore
 */
InlineResponse20031ComparableProducts.prototype['spoonacularScore'] = undefined;

/**
 * @member {Array.<Object>} sugar
 */
InlineResponse20031ComparableProducts.prototype['sugar'] = undefined;

exports.default = InlineResponse20031ComparableProducts;