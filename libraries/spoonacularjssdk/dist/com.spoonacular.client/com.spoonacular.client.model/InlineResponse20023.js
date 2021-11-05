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

var _InlineResponse20023Ingredients = require('./InlineResponse20023Ingredients');

var _InlineResponse20023Ingredients2 = _interopRequireDefault(_InlineResponse20023Ingredients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20023 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023
 * @version 1.0
 */
var InlineResponse20023 = function () {
  /**
   * Constructs a new <code>InlineResponse20023</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023
   * @param totalGlycemicLoad {Number} 
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023Ingredients>} 
   */
  function InlineResponse20023(totalGlycemicLoad, ingredients) {
    _classCallCheck(this, InlineResponse20023);

    InlineResponse20023.initialize(this, totalGlycemicLoad, ingredients);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20023, null, [{
    key: 'initialize',
    value: function initialize(obj, totalGlycemicLoad, ingredients) {
      obj['totalGlycemicLoad'] = totalGlycemicLoad;
      obj['ingredients'] = ingredients;
    }

    /**
     * Constructs a <code>InlineResponse20023</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023} The populated <code>InlineResponse20023</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20023();

        if (data.hasOwnProperty('totalGlycemicLoad')) {
          obj['totalGlycemicLoad'] = _ApiClient2.default.convertToType(data['totalGlycemicLoad'], 'Number');
        }
        if (data.hasOwnProperty('ingredients')) {
          obj['ingredients'] = _ApiClient2.default.convertToType(data['ingredients'], [_InlineResponse20023Ingredients2.default]);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20023;
}();

/**
 * @member {Number} totalGlycemicLoad
 */


InlineResponse20023.prototype['totalGlycemicLoad'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023Ingredients>} ingredients
 */
InlineResponse20023.prototype['ingredients'] = undefined;

exports.default = InlineResponse20023;