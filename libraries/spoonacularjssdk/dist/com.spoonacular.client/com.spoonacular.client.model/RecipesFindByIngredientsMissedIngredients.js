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
 * The RecipesFindByIngredientsMissedIngredients model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients
 * @version 1.0
 */
var RecipesFindByIngredientsMissedIngredients = function () {
  /**
   * Constructs a new <code>RecipesFindByIngredientsMissedIngredients</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients
   * @param aisle {String} 
   * @param amount {Number} 
   * @param id {Number} 
   * @param image {String} 
   * @param name {String} 
   * @param original {String} 
   * @param originalName {String} 
   * @param unit {String} 
   * @param unitLong {String} 
   * @param unitShort {String} 
   */
  function RecipesFindByIngredientsMissedIngredients(aisle, amount, id, image, name, original, originalName, unit, unitLong, unitShort) {
    _classCallCheck(this, RecipesFindByIngredientsMissedIngredients);

    RecipesFindByIngredientsMissedIngredients.initialize(this, aisle, amount, id, image, name, original, originalName, unit, unitLong, unitShort);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RecipesFindByIngredientsMissedIngredients, null, [{
    key: 'initialize',
    value: function initialize(obj, aisle, amount, id, image, name, original, originalName, unit, unitLong, unitShort) {
      obj['aisle'] = aisle;
      obj['amount'] = amount;
      obj['id'] = id;
      obj['image'] = image;
      obj['name'] = name;
      obj['original'] = original;
      obj['originalName'] = originalName;
      obj['unit'] = unit;
      obj['unitLong'] = unitLong;
      obj['unitShort'] = unitShort;
    }

    /**
     * Constructs a <code>RecipesFindByIngredientsMissedIngredients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients} The populated <code>RecipesFindByIngredientsMissedIngredients</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RecipesFindByIngredientsMissedIngredients();

        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient2.default.convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient2.default.convertToType(data['image'], 'String');
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
        if (data.hasOwnProperty('unitLong')) {
          obj['unitLong'] = _ApiClient2.default.convertToType(data['unitLong'], 'String');
        }
        if (data.hasOwnProperty('unitShort')) {
          obj['unitShort'] = _ApiClient2.default.convertToType(data['unitShort'], 'String');
        }
      }
      return obj;
    }
  }]);

  return RecipesFindByIngredientsMissedIngredients;
}();

/**
 * @member {String} aisle
 */


RecipesFindByIngredientsMissedIngredients.prototype['aisle'] = undefined;

/**
 * @member {Number} amount
 */
RecipesFindByIngredientsMissedIngredients.prototype['amount'] = undefined;

/**
 * @member {Number} id
 */
RecipesFindByIngredientsMissedIngredients.prototype['id'] = undefined;

/**
 * @member {String} image
 */
RecipesFindByIngredientsMissedIngredients.prototype['image'] = undefined;

/**
 * @member {Array.<String>} meta
 */
RecipesFindByIngredientsMissedIngredients.prototype['meta'] = undefined;

/**
 * @member {String} name
 */
RecipesFindByIngredientsMissedIngredients.prototype['name'] = undefined;

/**
 * @member {String} original
 */
RecipesFindByIngredientsMissedIngredients.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
RecipesFindByIngredientsMissedIngredients.prototype['originalName'] = undefined;

/**
 * @member {String} unit
 */
RecipesFindByIngredientsMissedIngredients.prototype['unit'] = undefined;

/**
 * @member {String} unitLong
 */
RecipesFindByIngredientsMissedIngredients.prototype['unitLong'] = undefined;

/**
 * @member {String} unitShort
 */
RecipesFindByIngredientsMissedIngredients.prototype['unitShort'] = undefined;

exports.default = RecipesFindByIngredientsMissedIngredients;