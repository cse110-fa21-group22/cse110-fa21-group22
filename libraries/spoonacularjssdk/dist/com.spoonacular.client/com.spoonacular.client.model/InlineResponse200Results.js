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
 * The InlineResponse200Results model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results
 * @version 1.0
 */
var InlineResponse200Results = function () {
  /**
   * Constructs a new <code>InlineResponse200Results</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results
   * @param id {Number} 
   * @param title {String} 
   * @param calories {Number} 
   * @param carbs {String} 
   * @param fat {String} 
   * @param image {String} 
   * @param imageType {String} 
   * @param protein {String} 
   */
  function InlineResponse200Results(id, title, calories, carbs, fat, image, imageType, protein) {
    _classCallCheck(this, InlineResponse200Results);

    InlineResponse200Results.initialize(this, id, title, calories, carbs, fat, image, imageType, protein);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200Results, null, [{
    key: 'initialize',
    value: function initialize(obj, id, title, calories, carbs, fat, image, imageType, protein) {
      obj['id'] = id;
      obj['title'] = title;
      obj['calories'] = calories;
      obj['carbs'] = carbs;
      obj['fat'] = fat;
      obj['image'] = image;
      obj['imageType'] = imageType;
      obj['protein'] = protein;
    }

    /**
     * Constructs a <code>InlineResponse200Results</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results} The populated <code>InlineResponse200Results</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200Results();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('calories')) {
          obj['calories'] = _ApiClient2.default.convertToType(data['calories'], 'Number');
        }
        if (data.hasOwnProperty('carbs')) {
          obj['carbs'] = _ApiClient2.default.convertToType(data['carbs'], 'String');
        }
        if (data.hasOwnProperty('fat')) {
          obj['fat'] = _ApiClient2.default.convertToType(data['fat'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient2.default.convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient2.default.convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('protein')) {
          obj['protein'] = _ApiClient2.default.convertToType(data['protein'], 'String');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse200Results;
}();

/**
 * @member {Number} id
 */


InlineResponse200Results.prototype['id'] = undefined;

/**
 * @member {String} title
 */
InlineResponse200Results.prototype['title'] = undefined;

/**
 * @member {Number} calories
 */
InlineResponse200Results.prototype['calories'] = undefined;

/**
 * @member {String} carbs
 */
InlineResponse200Results.prototype['carbs'] = undefined;

/**
 * @member {String} fat
 */
InlineResponse200Results.prototype['fat'] = undefined;

/**
 * @member {String} image
 */
InlineResponse200Results.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
InlineResponse200Results.prototype['imageType'] = undefined;

/**
 * @member {String} protein
 */
InlineResponse200Results.prototype['protein'] = undefined;

exports.default = InlineResponse200Results;