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

var _InlineResponse200Results = require('./InlineResponse200Results');

var _InlineResponse200Results2 = _interopRequireDefault(_InlineResponse200Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse200 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse200
 * @version 1.0
 */
var InlineResponse200 = function () {
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200
   * @param offset {Number} 
   * @param _number {Number} 
   * @param results {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results>} 
   * @param totalResults {Number} 
   */
  function InlineResponse200(offset, _number, results, totalResults) {
    _classCallCheck(this, InlineResponse200);

    InlineResponse200.initialize(this, offset, _number, results, totalResults);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200, null, [{
    key: 'initialize',
    value: function initialize(obj, offset, _number, results, totalResults) {
      obj['offset'] = offset;
      obj['number'] = _number;
      obj['results'] = results;
      obj['totalResults'] = totalResults;
    }

    /**
     * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200();

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient2.default.convertToType(data['offset'], 'Number');
        }
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient2.default.convertToType(data['number'], 'Number');
        }
        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient2.default.convertToType(data['results'], [_InlineResponse200Results2.default]);
        }
        if (data.hasOwnProperty('totalResults')) {
          obj['totalResults'] = _ApiClient2.default.convertToType(data['totalResults'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse200;
}();

/**
 * @member {Number} offset
 */


InlineResponse200.prototype['offset'] = undefined;

/**
 * @member {Number} number
 */
InlineResponse200.prototype['number'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results>} results
 */
InlineResponse200.prototype['results'] = undefined;

/**
 * @member {Number} totalResults
 */
InlineResponse200.prototype['totalResults'] = undefined;

exports.default = InlineResponse200;