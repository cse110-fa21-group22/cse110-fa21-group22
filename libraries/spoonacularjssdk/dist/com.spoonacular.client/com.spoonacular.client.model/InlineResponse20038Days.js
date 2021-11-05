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

var _InlineResponse20038Items = require('./InlineResponse20038Items');

var _InlineResponse20038Items2 = _interopRequireDefault(_InlineResponse20038Items);

var _InlineResponse20038NutritionSummary = require('./InlineResponse20038NutritionSummary');

var _InlineResponse20038NutritionSummary2 = _interopRequireDefault(_InlineResponse20038NutritionSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20038Days model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Days
 * @version 1.0
 */
var InlineResponse20038Days = function () {
  /**
   * Constructs a new <code>InlineResponse20038Days</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Days
   * @param _date {Number} 
   * @param day {String} 
   */
  function InlineResponse20038Days(_date, day) {
    _classCallCheck(this, InlineResponse20038Days);

    InlineResponse20038Days.initialize(this, _date, day);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20038Days, null, [{
    key: 'initialize',
    value: function initialize(obj, _date, day) {
      obj['date'] = _date;
      obj['day'] = day;
    }

    /**
     * Constructs a <code>InlineResponse20038Days</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Days} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Days} The populated <code>InlineResponse20038Days</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20038Days();

        if (data.hasOwnProperty('nutritionSummary')) {
          obj['nutritionSummary'] = _InlineResponse20038NutritionSummary2.default.constructFromObject(data['nutritionSummary']);
        }
        if (data.hasOwnProperty('nutritionSummaryBreakfast')) {
          obj['nutritionSummaryBreakfast'] = _InlineResponse20038NutritionSummary2.default.constructFromObject(data['nutritionSummaryBreakfast']);
        }
        if (data.hasOwnProperty('nutritionSummaryLunch')) {
          obj['nutritionSummaryLunch'] = _InlineResponse20038NutritionSummary2.default.constructFromObject(data['nutritionSummaryLunch']);
        }
        if (data.hasOwnProperty('nutritionSummaryDinner')) {
          obj['nutritionSummaryDinner'] = _InlineResponse20038NutritionSummary2.default.constructFromObject(data['nutritionSummaryDinner']);
        }
        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient2.default.convertToType(data['date'], 'Number');
        }
        if (data.hasOwnProperty('day')) {
          obj['day'] = _ApiClient2.default.convertToType(data['day'], 'String');
        }
        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient2.default.convertToType(data['items'], [_InlineResponse20038Items2.default]);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20038Days;
}();

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038NutritionSummary} nutritionSummary
 */


InlineResponse20038Days.prototype['nutritionSummary'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038NutritionSummary} nutritionSummaryBreakfast
 */
InlineResponse20038Days.prototype['nutritionSummaryBreakfast'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038NutritionSummary} nutritionSummaryLunch
 */
InlineResponse20038Days.prototype['nutritionSummaryLunch'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038NutritionSummary} nutritionSummaryDinner
 */
InlineResponse20038Days.prototype['nutritionSummaryDinner'] = undefined;

/**
 * @member {Number} date
 */
InlineResponse20038Days.prototype['date'] = undefined;

/**
 * @member {String} day
 */
InlineResponse20038Days.prototype['day'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Items>} items
 */
InlineResponse20038Days.prototype['items'] = undefined;

exports.default = InlineResponse20038Days;