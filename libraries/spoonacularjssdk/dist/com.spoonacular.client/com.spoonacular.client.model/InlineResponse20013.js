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

var _InlineResponse20013Ingredients = require('./InlineResponse20013Ingredients1');

var _InlineResponse20013Ingredients2 = _interopRequireDefault(_InlineResponse20013Ingredients);

var _InlineResponse20013ParsedInstructions = require('./InlineResponse20013ParsedInstructions');

var _InlineResponse20013ParsedInstructions2 = _interopRequireDefault(_InlineResponse20013ParsedInstructions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20013 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013
 * @version 1.0
 */
var InlineResponse20013 = function () {
  /**
   * Constructs a new <code>InlineResponse20013</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013
   * @param parsedInstructions {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013ParsedInstructions>} 
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Ingredients1>} 
   * @param equipment {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Ingredients1>} 
   */
  function InlineResponse20013(parsedInstructions, ingredients, equipment) {
    _classCallCheck(this, InlineResponse20013);

    InlineResponse20013.initialize(this, parsedInstructions, ingredients, equipment);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20013, null, [{
    key: 'initialize',
    value: function initialize(obj, parsedInstructions, ingredients, equipment) {
      obj['parsedInstructions'] = parsedInstructions;
      obj['ingredients'] = ingredients;
      obj['equipment'] = equipment;
    }

    /**
     * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20013();

        if (data.hasOwnProperty('parsedInstructions')) {
          obj['parsedInstructions'] = _ApiClient2.default.convertToType(data['parsedInstructions'], [_InlineResponse20013ParsedInstructions2.default]);
        }
        if (data.hasOwnProperty('ingredients')) {
          obj['ingredients'] = _ApiClient2.default.convertToType(data['ingredients'], [_InlineResponse20013Ingredients2.default]);
        }
        if (data.hasOwnProperty('equipment')) {
          obj['equipment'] = _ApiClient2.default.convertToType(data['equipment'], [_InlineResponse20013Ingredients2.default]);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20013;
}();

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013ParsedInstructions>} parsedInstructions
 */


InlineResponse20013.prototype['parsedInstructions'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Ingredients1>} ingredients
 */
InlineResponse20013.prototype['ingredients'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Ingredients1>} equipment
 */
InlineResponse20013.prototype['equipment'] = undefined;

exports.default = InlineResponse20013;