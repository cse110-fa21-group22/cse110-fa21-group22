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

var _InlineResponse20018Dishes = require('./InlineResponse20018Dishes');

var _InlineResponse20018Dishes2 = _interopRequireDefault(_InlineResponse20018Dishes);

var _InlineResponse20018Ingredients = require('./InlineResponse20018Ingredients');

var _InlineResponse20018Ingredients2 = _interopRequireDefault(_InlineResponse20018Ingredients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20018 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018
 * @version 1.0
 */
var InlineResponse20018 = function () {
  /**
   * Constructs a new <code>InlineResponse20018</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018
   * @param dishes {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018Dishes>} 
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018Ingredients>} 
   * @param cuisines {Array.<String>} 
   * @param modifiers {Array.<String>} 
   */
  function InlineResponse20018(dishes, ingredients, cuisines, modifiers) {
    _classCallCheck(this, InlineResponse20018);

    InlineResponse20018.initialize(this, dishes, ingredients, cuisines, modifiers);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20018, null, [{
    key: 'initialize',
    value: function initialize(obj, dishes, ingredients, cuisines, modifiers) {
      obj['dishes'] = dishes;
      obj['ingredients'] = ingredients;
      obj['cuisines'] = cuisines;
      obj['modifiers'] = modifiers;
    }

    /**
     * Constructs a <code>InlineResponse20018</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018} The populated <code>InlineResponse20018</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20018();

        if (data.hasOwnProperty('dishes')) {
          obj['dishes'] = _ApiClient2.default.convertToType(data['dishes'], [_InlineResponse20018Dishes2.default]);
        }
        if (data.hasOwnProperty('ingredients')) {
          obj['ingredients'] = _ApiClient2.default.convertToType(data['ingredients'], [_InlineResponse20018Ingredients2.default]);
        }
        if (data.hasOwnProperty('cuisines')) {
          obj['cuisines'] = _ApiClient2.default.convertToType(data['cuisines'], ['String']);
        }
        if (data.hasOwnProperty('modifiers')) {
          obj['modifiers'] = _ApiClient2.default.convertToType(data['modifiers'], ['String']);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20018;
}();

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018Dishes>} dishes
 */


InlineResponse20018.prototype['dishes'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018Ingredients>} ingredients
 */
InlineResponse20018.prototype['ingredients'] = undefined;

/**
 * @member {Array.<String>} cuisines
 */
InlineResponse20018.prototype['cuisines'] = undefined;

/**
 * @member {Array.<String>} modifiers
 */
InlineResponse20018.prototype['modifiers'] = undefined;

exports.default = InlineResponse20018;