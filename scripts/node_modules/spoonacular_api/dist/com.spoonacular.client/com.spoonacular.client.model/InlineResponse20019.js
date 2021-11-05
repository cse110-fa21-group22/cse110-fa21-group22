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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20019 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20019
 * @version 1.0
 */
var InlineResponse20019 = function () {
  /**
   * Constructs a new <code>InlineResponse20019</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20019
   * @param sourceAmount {Number} 
   * @param sourceUnit {String} 
   * @param targetAmount {Number} 
   * @param targetUnit {String} 
   * @param answer {String} 
   */
  function InlineResponse20019(sourceAmount, sourceUnit, targetAmount, targetUnit, answer) {
    _classCallCheck(this, InlineResponse20019);

    InlineResponse20019.initialize(this, sourceAmount, sourceUnit, targetAmount, targetUnit, answer);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20019, null, [{
    key: 'initialize',
    value: function initialize(obj, sourceAmount, sourceUnit, targetAmount, targetUnit, answer) {
      obj['sourceAmount'] = sourceAmount;
      obj['sourceUnit'] = sourceUnit;
      obj['targetAmount'] = targetAmount;
      obj['targetUnit'] = targetUnit;
      obj['answer'] = answer;
    }

    /**
     * Constructs a <code>InlineResponse20019</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20019} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20019} The populated <code>InlineResponse20019</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20019();

        if (data.hasOwnProperty('sourceAmount')) {
          obj['sourceAmount'] = _ApiClient2.default.convertToType(data['sourceAmount'], 'Number');
        }
        if (data.hasOwnProperty('sourceUnit')) {
          obj['sourceUnit'] = _ApiClient2.default.convertToType(data['sourceUnit'], 'String');
        }
        if (data.hasOwnProperty('targetAmount')) {
          obj['targetAmount'] = _ApiClient2.default.convertToType(data['targetAmount'], 'Number');
        }
        if (data.hasOwnProperty('targetUnit')) {
          obj['targetUnit'] = _ApiClient2.default.convertToType(data['targetUnit'], 'String');
        }
        if (data.hasOwnProperty('answer')) {
          obj['answer'] = _ApiClient2.default.convertToType(data['answer'], 'String');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20019;
}();

/**
 * @member {Number} sourceAmount
 */


InlineResponse20019.prototype['sourceAmount'] = undefined;

/**
 * @member {String} sourceUnit
 */
InlineResponse20019.prototype['sourceUnit'] = undefined;

/**
 * @member {Number} targetAmount
 */
InlineResponse20019.prototype['targetAmount'] = undefined;

/**
 * @member {String} targetUnit
 */
InlineResponse20019.prototype['targetUnit'] = undefined;

/**
 * @member {String} answer
 */
InlineResponse20019.prototype['answer'] = undefined;

exports.default = InlineResponse20019;