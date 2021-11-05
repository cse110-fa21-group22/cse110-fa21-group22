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

var _InlineResponse20029CustomFoods = require('./InlineResponse20029CustomFoods');

var _InlineResponse20029CustomFoods2 = _interopRequireDefault(_InlineResponse20029CustomFoods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20029 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029
 * @version 1.0
 */
var InlineResponse20029 = function () {
  /**
   * Constructs a new <code>InlineResponse20029</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029
   * @param customFoods {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029CustomFoods>} 
   * @param type {String} 
   * @param offset {Number} 
   * @param _number {Number} 
   */
  function InlineResponse20029(customFoods, type, offset, _number) {
    _classCallCheck(this, InlineResponse20029);

    InlineResponse20029.initialize(this, customFoods, type, offset, _number);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20029, null, [{
    key: 'initialize',
    value: function initialize(obj, customFoods, type, offset, _number) {
      obj['customFoods'] = customFoods;
      obj['type'] = type;
      obj['offset'] = offset;
      obj['number'] = _number;
    }

    /**
     * Constructs a <code>InlineResponse20029</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029} The populated <code>InlineResponse20029</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20029();

        if (data.hasOwnProperty('customFoods')) {
          obj['customFoods'] = _ApiClient2.default.convertToType(data['customFoods'], [_InlineResponse20029CustomFoods2.default]);
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient2.default.convertToType(data['offset'], 'Number');
        }
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient2.default.convertToType(data['number'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20029;
}();

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029CustomFoods>} customFoods
 */


InlineResponse20029.prototype['customFoods'] = undefined;

/**
 * @member {String} type
 */
InlineResponse20029.prototype['type'] = undefined;

/**
 * @member {Number} offset
 */
InlineResponse20029.prototype['offset'] = undefined;

/**
 * @member {Number} number
 */
InlineResponse20029.prototype['number'] = undefined;

exports.default = InlineResponse20029;