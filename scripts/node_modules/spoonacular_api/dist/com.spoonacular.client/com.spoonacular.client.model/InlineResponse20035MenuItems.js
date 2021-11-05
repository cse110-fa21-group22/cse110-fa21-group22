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

var _InlineResponse20028Servings = require('./InlineResponse20028Servings');

var _InlineResponse20028Servings2 = _interopRequireDefault(_InlineResponse20028Servings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20035MenuItems model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035MenuItems
 * @version 1.0
 */
var InlineResponse20035MenuItems = function () {
  /**
   * Constructs a new <code>InlineResponse20035MenuItems</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035MenuItems
   * @param id {Number} 
   * @param title {String} 
   * @param restaurantChain {String} 
   * @param image {String} 
   * @param imageType {String} 
   */
  function InlineResponse20035MenuItems(id, title, restaurantChain, image, imageType) {
    _classCallCheck(this, InlineResponse20035MenuItems);

    InlineResponse20035MenuItems.initialize(this, id, title, restaurantChain, image, imageType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20035MenuItems, null, [{
    key: 'initialize',
    value: function initialize(obj, id, title, restaurantChain, image, imageType) {
      obj['id'] = id;
      obj['title'] = title;
      obj['restaurantChain'] = restaurantChain;
      obj['image'] = image;
      obj['imageType'] = imageType;
    }

    /**
     * Constructs a <code>InlineResponse20035MenuItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035MenuItems} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035MenuItems} The populated <code>InlineResponse20035MenuItems</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20035MenuItems();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('restaurantChain')) {
          obj['restaurantChain'] = _ApiClient2.default.convertToType(data['restaurantChain'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient2.default.convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient2.default.convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _InlineResponse20028Servings2.default.constructFromObject(data['servings']);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20035MenuItems;
}();

/**
 * @member {Number} id
 */


InlineResponse20035MenuItems.prototype['id'] = undefined;

/**
 * @member {String} title
 */
InlineResponse20035MenuItems.prototype['title'] = undefined;

/**
 * @member {String} restaurantChain
 */
InlineResponse20035MenuItems.prototype['restaurantChain'] = undefined;

/**
 * @member {String} image
 */
InlineResponse20035MenuItems.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
InlineResponse20035MenuItems.prototype['imageType'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Servings} servings
 */
InlineResponse20035MenuItems.prototype['servings'] = undefined;

exports.default = InlineResponse20035MenuItems;