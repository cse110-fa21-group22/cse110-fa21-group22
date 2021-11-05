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

var _InlineResponse = require('./InlineResponse2007');

var _InlineResponse2 = _interopRequireDefault(_InlineResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20027 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027
 * @version 1.0
 */
var InlineResponse20027 = function () {
  /**
   * Constructs a new <code>InlineResponse20027</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027
   * @param products {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2007>} 
   * @param totalProducts {Number} 
   * @param type {String} 
   * @param offset {Number} 
   * @param _number {Number} 
   */
  function InlineResponse20027(products, totalProducts, type, offset, _number) {
    _classCallCheck(this, InlineResponse20027);

    InlineResponse20027.initialize(this, products, totalProducts, type, offset, _number);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20027, null, [{
    key: 'initialize',
    value: function initialize(obj, products, totalProducts, type, offset, _number) {
      obj['products'] = products;
      obj['totalProducts'] = totalProducts;
      obj['type'] = type;
      obj['offset'] = offset;
      obj['number'] = _number;
    }

    /**
     * Constructs a <code>InlineResponse20027</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027} The populated <code>InlineResponse20027</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20027();

        if (data.hasOwnProperty('products')) {
          obj['products'] = _ApiClient2.default.convertToType(data['products'], [_InlineResponse2.default]);
        }
        if (data.hasOwnProperty('totalProducts')) {
          obj['totalProducts'] = _ApiClient2.default.convertToType(data['totalProducts'], 'Number');
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

  return InlineResponse20027;
}();

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2007>} products
 */


InlineResponse20027.prototype['products'] = undefined;

/**
 * @member {Number} totalProducts
 */
InlineResponse20027.prototype['totalProducts'] = undefined;

/**
 * @member {String} type
 */
InlineResponse20027.prototype['type'] = undefined;

/**
 * @member {Number} offset
 */
InlineResponse20027.prototype['offset'] = undefined;

/**
 * @member {Number} number
 */
InlineResponse20027.prototype['number'] = undefined;

exports.default = InlineResponse20027;