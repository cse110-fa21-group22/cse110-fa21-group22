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

var _InlineResponse20021CaloriesConfidenceRange95Percent = require('./InlineResponse20021CaloriesConfidenceRange95Percent');

var _InlineResponse20021CaloriesConfidenceRange95Percent2 = _interopRequireDefault(_InlineResponse20021CaloriesConfidenceRange95Percent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20021Calories model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories
 * @version 1.0
 */
var InlineResponse20021Calories = function () {
  /**
   * Constructs a new <code>InlineResponse20021Calories</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories
   * @param confidenceRange95Percent {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021CaloriesConfidenceRange95Percent} 
   * @param standardDeviation {Number} 
   * @param unit {String} 
   * @param value {Number} 
   */
  function InlineResponse20021Calories(confidenceRange95Percent, standardDeviation, unit, value) {
    _classCallCheck(this, InlineResponse20021Calories);

    InlineResponse20021Calories.initialize(this, confidenceRange95Percent, standardDeviation, unit, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20021Calories, null, [{
    key: 'initialize',
    value: function initialize(obj, confidenceRange95Percent, standardDeviation, unit, value) {
      obj['confidenceRange95Percent'] = confidenceRange95Percent;
      obj['standardDeviation'] = standardDeviation;
      obj['unit'] = unit;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>InlineResponse20021Calories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} The populated <code>InlineResponse20021Calories</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20021Calories();

        if (data.hasOwnProperty('confidenceRange95Percent')) {
          obj['confidenceRange95Percent'] = _InlineResponse20021CaloriesConfidenceRange95Percent2.default.constructFromObject(data['confidenceRange95Percent']);
        }
        if (data.hasOwnProperty('standardDeviation')) {
          obj['standardDeviation'] = _ApiClient2.default.convertToType(data['standardDeviation'], 'Number');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient2.default.convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient2.default.convertToType(data['value'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20021Calories;
}();

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021CaloriesConfidenceRange95Percent} confidenceRange95Percent
 */


InlineResponse20021Calories.prototype['confidenceRange95Percent'] = undefined;

/**
 * @member {Number} standardDeviation
 */
InlineResponse20021Calories.prototype['standardDeviation'] = undefined;

/**
 * @member {String} unit
 */
InlineResponse20021Calories.prototype['unit'] = undefined;

/**
 * @member {Number} value
 */
InlineResponse20021Calories.prototype['value'] = undefined;

exports.default = InlineResponse20021Calories;