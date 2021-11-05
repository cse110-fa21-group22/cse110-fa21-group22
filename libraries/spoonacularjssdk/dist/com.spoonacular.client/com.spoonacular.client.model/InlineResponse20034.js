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

var _FoodIngredientsMapProducts = require('./FoodIngredientsMapProducts');

var _FoodIngredientsMapProducts2 = _interopRequireDefault(_FoodIngredientsMapProducts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20034 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20034
 * @version 1.0
 */
var InlineResponse20034 = function () {
  /**
   * Constructs a new <code>InlineResponse20034</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20034
   * @param original {String} 
   * @param originalName {String} 
   * @param ingredientImage {String} 
   * @param meta {Array.<String>} 
   * @param products {Array.<module:com.spoonacular.client/com.spoonacular.client.model/FoodIngredientsMapProducts>} 
   */
  function InlineResponse20034(original, originalName, ingredientImage, meta, products) {
    _classCallCheck(this, InlineResponse20034);

    InlineResponse20034.initialize(this, original, originalName, ingredientImage, meta, products);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20034, null, [{
    key: 'initialize',
    value: function initialize(obj, original, originalName, ingredientImage, meta, products) {
      obj['original'] = original;
      obj['originalName'] = originalName;
      obj['ingredientImage'] = ingredientImage;
      obj['meta'] = meta;
      obj['products'] = products;
    }

    /**
     * Constructs a <code>InlineResponse20034</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20034} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20034} The populated <code>InlineResponse20034</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20034();

        if (data.hasOwnProperty('original')) {
          obj['original'] = _ApiClient2.default.convertToType(data['original'], 'String');
        }
        if (data.hasOwnProperty('originalName')) {
          obj['originalName'] = _ApiClient2.default.convertToType(data['originalName'], 'String');
        }
        if (data.hasOwnProperty('ingredientImage')) {
          obj['ingredientImage'] = _ApiClient2.default.convertToType(data['ingredientImage'], 'String');
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient2.default.convertToType(data['meta'], ['String']);
        }
        if (data.hasOwnProperty('products')) {
          obj['products'] = _ApiClient2.default.convertToType(data['products'], [_FoodIngredientsMapProducts2.default]);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20034;
}();

/**
 * @member {String} original
 */


InlineResponse20034.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
InlineResponse20034.prototype['originalName'] = undefined;

/**
 * @member {String} ingredientImage
 */
InlineResponse20034.prototype['ingredientImage'] = undefined;

/**
 * @member {Array.<String>} meta
 */
InlineResponse20034.prototype['meta'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/FoodIngredientsMapProducts>} products
 */
InlineResponse20034.prototype['products'] = undefined;

exports.default = InlineResponse20034;