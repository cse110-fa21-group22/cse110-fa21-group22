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

var _RecipesParseIngredientsNutritionCaloricBreakdown = require('./RecipesParseIngredientsNutritionCaloricBreakdown');

var _RecipesParseIngredientsNutritionCaloricBreakdown2 = _interopRequireDefault(_RecipesParseIngredientsNutritionCaloricBreakdown);

var _RecipesParseIngredientsNutritionNutrients = require('./RecipesParseIngredientsNutritionNutrients');

var _RecipesParseIngredientsNutritionNutrients2 = _interopRequireDefault(_RecipesParseIngredientsNutritionNutrients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20028Nutrition model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition
 * @version 1.0
 */
var InlineResponse20028Nutrition = function () {
  /**
   * Constructs a new <code>InlineResponse20028Nutrition</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition
   * @param nutrients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients>} 
   * @param caloricBreakdown {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown} 
   */
  function InlineResponse20028Nutrition(nutrients, caloricBreakdown) {
    _classCallCheck(this, InlineResponse20028Nutrition);

    InlineResponse20028Nutrition.initialize(this, nutrients, caloricBreakdown);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20028Nutrition, null, [{
    key: 'initialize',
    value: function initialize(obj, nutrients, caloricBreakdown) {
      obj['nutrients'] = nutrients;
      obj['caloricBreakdown'] = caloricBreakdown;
    }

    /**
     * Constructs a <code>InlineResponse20028Nutrition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition} The populated <code>InlineResponse20028Nutrition</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20028Nutrition();

        if (data.hasOwnProperty('nutrients')) {
          obj['nutrients'] = _ApiClient2.default.convertToType(data['nutrients'], [_RecipesParseIngredientsNutritionNutrients2.default]);
        }
        if (data.hasOwnProperty('caloricBreakdown')) {
          obj['caloricBreakdown'] = _RecipesParseIngredientsNutritionCaloricBreakdown2.default.constructFromObject(data['caloricBreakdown']);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20028Nutrition;
}();

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients>} nutrients
 */


InlineResponse20028Nutrition.prototype['nutrients'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown} caloricBreakdown
 */
InlineResponse20028Nutrition.prototype['caloricBreakdown'] = undefined;

exports.default = InlineResponse20028Nutrition;