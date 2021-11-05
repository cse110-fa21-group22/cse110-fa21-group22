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

var _RecipesFindByIngredientsMissedIngredients = require('./RecipesFindByIngredientsMissedIngredients');

var _RecipesFindByIngredientsMissedIngredients2 = _interopRequireDefault(_RecipesFindByIngredientsMissedIngredients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse2001 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2001
 * @version 1.0
 */
var InlineResponse2001 = function () {
  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2001
   * @param id {Number} 
   * @param image {String} 
   * @param imageType {String} 
   * @param likes {Number} 
   * @param missedIngredientCount {Number} 
   * @param missedIngredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients>} 
   * @param title {String} 
   * @param unusedIngredients {Array.<Object>} 
   * @param usedIngredientCount {Number} 
   * @param usedIngredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients>} 
   */
  function InlineResponse2001(id, image, imageType, likes, missedIngredientCount, missedIngredients, title, unusedIngredients, usedIngredientCount, usedIngredients) {
    _classCallCheck(this, InlineResponse2001);

    InlineResponse2001.initialize(this, id, image, imageType, likes, missedIngredientCount, missedIngredients, title, unusedIngredients, usedIngredientCount, usedIngredients);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2001, null, [{
    key: 'initialize',
    value: function initialize(obj, id, image, imageType, likes, missedIngredientCount, missedIngredients, title, unusedIngredients, usedIngredientCount, usedIngredients) {
      obj['id'] = id;
      obj['image'] = image;
      obj['imageType'] = imageType;
      obj['likes'] = likes;
      obj['missedIngredientCount'] = missedIngredientCount;
      obj['missedIngredients'] = missedIngredients;
      obj['title'] = title;
      obj['unusedIngredients'] = unusedIngredients;
      obj['usedIngredientCount'] = usedIngredientCount;
      obj['usedIngredients'] = usedIngredients;
    }

    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2001();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient2.default.convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient2.default.convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('likes')) {
          obj['likes'] = _ApiClient2.default.convertToType(data['likes'], 'Number');
        }
        if (data.hasOwnProperty('missedIngredientCount')) {
          obj['missedIngredientCount'] = _ApiClient2.default.convertToType(data['missedIngredientCount'], 'Number');
        }
        if (data.hasOwnProperty('missedIngredients')) {
          obj['missedIngredients'] = _ApiClient2.default.convertToType(data['missedIngredients'], [_RecipesFindByIngredientsMissedIngredients2.default]);
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('unusedIngredients')) {
          obj['unusedIngredients'] = _ApiClient2.default.convertToType(data['unusedIngredients'], [Object]);
        }
        if (data.hasOwnProperty('usedIngredientCount')) {
          obj['usedIngredientCount'] = _ApiClient2.default.convertToType(data['usedIngredientCount'], 'Number');
        }
        if (data.hasOwnProperty('usedIngredients')) {
          obj['usedIngredients'] = _ApiClient2.default.convertToType(data['usedIngredients'], [_RecipesFindByIngredientsMissedIngredients2.default]);
        }
        if (data.hasOwnProperty('')) {
          obj[''] = _ApiClient2.default.convertToType(data[''], 'String');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse2001;
}();

/**
 * @member {Number} id
 */


InlineResponse2001.prototype['id'] = undefined;

/**
 * @member {String} image
 */
InlineResponse2001.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
InlineResponse2001.prototype['imageType'] = undefined;

/**
 * @member {Number} likes
 */
InlineResponse2001.prototype['likes'] = undefined;

/**
 * @member {Number} missedIngredientCount
 */
InlineResponse2001.prototype['missedIngredientCount'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients>} missedIngredients
 */
InlineResponse2001.prototype['missedIngredients'] = undefined;

/**
 * @member {String} title
 */
InlineResponse2001.prototype['title'] = undefined;

/**
 * @member {Array.<Object>} unusedIngredients
 */
InlineResponse2001.prototype['unusedIngredients'] = undefined;

/**
 * @member {Number} usedIngredientCount
 */
InlineResponse2001.prototype['usedIngredientCount'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients>} usedIngredients
 */
InlineResponse2001.prototype['usedIngredients'] = undefined;

/**
 * @member {String} 
 */
InlineResponse2001.prototype[''] = undefined;

exports.default = InlineResponse2001;