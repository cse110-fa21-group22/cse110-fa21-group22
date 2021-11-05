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

var _InlineResponse20042Aisles = require('./InlineResponse20042Aisles');

var _InlineResponse20042Aisles2 = _interopRequireDefault(_InlineResponse20042Aisles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20042 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042
 * @version 1.0
 */
var InlineResponse20042 = function () {
  /**
   * Constructs a new <code>InlineResponse20042</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042
   * @param aisles {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042Aisles>} 
   * @param cost {Number} 
   * @param startDate {Number} 
   * @param endDate {Number} 
   */
  function InlineResponse20042(aisles, cost, startDate, endDate) {
    _classCallCheck(this, InlineResponse20042);

    InlineResponse20042.initialize(this, aisles, cost, startDate, endDate);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20042, null, [{
    key: 'initialize',
    value: function initialize(obj, aisles, cost, startDate, endDate) {
      obj['aisles'] = aisles;
      obj['cost'] = cost;
      obj['startDate'] = startDate;
      obj['endDate'] = endDate;
    }

    /**
     * Constructs a <code>InlineResponse20042</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042} The populated <code>InlineResponse20042</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20042();

        if (data.hasOwnProperty('aisles')) {
          obj['aisles'] = _ApiClient2.default.convertToType(data['aisles'], [_InlineResponse20042Aisles2.default]);
        }
        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient2.default.convertToType(data['cost'], 'Number');
        }
        if (data.hasOwnProperty('startDate')) {
          obj['startDate'] = _ApiClient2.default.convertToType(data['startDate'], 'Number');
        }
        if (data.hasOwnProperty('endDate')) {
          obj['endDate'] = _ApiClient2.default.convertToType(data['endDate'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20042;
}();

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042Aisles>} aisles
 */


InlineResponse20042.prototype['aisles'] = undefined;

/**
 * @member {Number} cost
 */
InlineResponse20042.prototype['cost'] = undefined;

/**
 * @member {Number} startDate
 */
InlineResponse20042.prototype['startDate'] = undefined;

/**
 * @member {Number} endDate
 */
InlineResponse20042.prototype['endDate'] = undefined;

exports.default = InlineResponse20042;