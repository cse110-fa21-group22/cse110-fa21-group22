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

var _InlineResponse2003Measures = require('./InlineResponse2003Measures');

var _InlineResponse2003Measures2 = _interopRequireDefault(_InlineResponse2003Measures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse2003ExtendedIngredients model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003ExtendedIngredients
 * @version 1.0
 */
var InlineResponse2003ExtendedIngredients = function () {
  /**
   * Constructs a new <code>InlineResponse2003ExtendedIngredients</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003ExtendedIngredients
   * @param aisle {String} 
   * @param amount {Number} 
   * @param consitency {String} 
   * @param id {Number} 
   * @param image {String} 
   * @param name {String} 
   * @param original {String} 
   * @param originalName {String} 
   * @param unit {String} 
   */
  function InlineResponse2003ExtendedIngredients(aisle, amount, consitency, id, image, name, original, originalName, unit) {
    _classCallCheck(this, InlineResponse2003ExtendedIngredients);

    InlineResponse2003ExtendedIngredients.initialize(this, aisle, amount, consitency, id, image, name, original, originalName, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2003ExtendedIngredients, null, [{
    key: 'initialize',
    value: function initialize(obj, aisle, amount, consitency, id, image, name, original, originalName, unit) {
      obj['aisle'] = aisle;
      obj['amount'] = amount;
      obj['consitency'] = consitency;
      obj['id'] = id;
      obj['image'] = image;
      obj['name'] = name;
      obj['original'] = original;
      obj['originalName'] = originalName;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>InlineResponse2003ExtendedIngredients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003ExtendedIngredients} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003ExtendedIngredients} The populated <code>InlineResponse2003ExtendedIngredients</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2003ExtendedIngredients();

        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient2.default.convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('consitency')) {
          obj['consitency'] = _ApiClient2.default.convertToType(data['consitency'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient2.default.convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('measures')) {
          obj['measures'] = _InlineResponse2003Measures2.default.constructFromObject(data['measures']);
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient2.default.convertToType(data['meta'], ['String']);
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('original')) {
          obj['original'] = _ApiClient2.default.convertToType(data['original'], 'String');
        }
        if (data.hasOwnProperty('originalName')) {
          obj['originalName'] = _ApiClient2.default.convertToType(data['originalName'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient2.default.convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse2003ExtendedIngredients;
}();

/**
 * @member {String} aisle
 */


InlineResponse2003ExtendedIngredients.prototype['aisle'] = undefined;

/**
 * @member {Number} amount
 */
InlineResponse2003ExtendedIngredients.prototype['amount'] = undefined;

/**
 * @member {String} consitency
 */
InlineResponse2003ExtendedIngredients.prototype['consitency'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse2003ExtendedIngredients.prototype['id'] = undefined;

/**
 * @member {String} image
 */
InlineResponse2003ExtendedIngredients.prototype['image'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003Measures} measures
 */
InlineResponse2003ExtendedIngredients.prototype['measures'] = undefined;

/**
 * @member {Array.<String>} meta
 */
InlineResponse2003ExtendedIngredients.prototype['meta'] = undefined;

/**
 * @member {String} name
 */
InlineResponse2003ExtendedIngredients.prototype['name'] = undefined;

/**
 * @member {String} original
 */
InlineResponse2003ExtendedIngredients.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
InlineResponse2003ExtendedIngredients.prototype['originalName'] = undefined;

/**
 * @member {String} unit
 */
InlineResponse2003ExtendedIngredients.prototype['unit'] = undefined;

exports.default = InlineResponse2003ExtendedIngredients;