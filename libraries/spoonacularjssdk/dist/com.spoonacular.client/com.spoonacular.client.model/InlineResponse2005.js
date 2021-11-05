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
 * The InlineResponse2005 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2005
 * @version 1.0
 */
var InlineResponse2005 = function () {
  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2005
   * @param id {Number} 
   * @param title {String} 
   * @param imageType {String} 
   * @param readyInMinutes {Number} 
   * @param servings {Number} 
   * @param sourceUrl {String} 
   */
  function InlineResponse2005(id, title, imageType, readyInMinutes, servings, sourceUrl) {
    _classCallCheck(this, InlineResponse2005);

    InlineResponse2005.initialize(this, id, title, imageType, readyInMinutes, servings, sourceUrl);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2005, null, [{
    key: 'initialize',
    value: function initialize(obj, id, title, imageType, readyInMinutes, servings, sourceUrl) {
      obj['id'] = id;
      obj['title'] = title;
      obj['imageType'] = imageType;
      obj['readyInMinutes'] = readyInMinutes;
      obj['servings'] = servings;
      obj['sourceUrl'] = sourceUrl;
    }

    /**
     * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2005} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2005();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient2.default.convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('readyInMinutes')) {
          obj['readyInMinutes'] = _ApiClient2.default.convertToType(data['readyInMinutes'], 'Number');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _ApiClient2.default.convertToType(data['servings'], 'Number');
        }
        if (data.hasOwnProperty('sourceUrl')) {
          obj['sourceUrl'] = _ApiClient2.default.convertToType(data['sourceUrl'], 'String');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse2005;
}();

/**
 * @member {Number} id
 */


InlineResponse2005.prototype['id'] = undefined;

/**
 * @member {String} title
 */
InlineResponse2005.prototype['title'] = undefined;

/**
 * @member {String} imageType
 */
InlineResponse2005.prototype['imageType'] = undefined;

/**
 * @member {Number} readyInMinutes
 */
InlineResponse2005.prototype['readyInMinutes'] = undefined;

/**
 * @member {Number} servings
 */
InlineResponse2005.prototype['servings'] = undefined;

/**
 * @member {String} sourceUrl
 */
InlineResponse2005.prototype['sourceUrl'] = undefined;

exports.default = InlineResponse2005;