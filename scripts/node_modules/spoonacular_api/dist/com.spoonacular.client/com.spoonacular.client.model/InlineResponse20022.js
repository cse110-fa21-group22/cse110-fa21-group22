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

var _InlineResponse20022Nutrition = require('./InlineResponse20022Nutrition');

var _InlineResponse20022Nutrition2 = _interopRequireDefault(_InlineResponse20022Nutrition);

var _RecipesParseIngredientsEstimatedCost = require('./RecipesParseIngredientsEstimatedCost');

var _RecipesParseIngredientsEstimatedCost2 = _interopRequireDefault(_RecipesParseIngredientsEstimatedCost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20022 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022
 * @version 1.0
 */
var InlineResponse20022 = function () {
  /**
   * Constructs a new <code>InlineResponse20022</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022
   * @param id {Number} 
   * @param original {String} 
   * @param originalName {String} 
   * @param name {String} 
   * @param nameClean {String} 
   * @param amount {Number} 
   * @param unit {String} 
   * @param unitShort {String} 
   * @param unitLong {String} 
   * @param possibleUnits {Array.<String>} 
   * @param estimatedCost {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsEstimatedCost} 
   * @param consistency {String} 
   * @param shoppingListUnits {Array.<String>} 
   * @param aisle {String} 
   * @param image {String} 
   * @param meta {Array.<Object>} 
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition} 
   * @param categoryPath {Array.<String>} 
   */
  function InlineResponse20022(id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, shoppingListUnits, aisle, image, meta, nutrition, categoryPath) {
    _classCallCheck(this, InlineResponse20022);

    InlineResponse20022.initialize(this, id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, shoppingListUnits, aisle, image, meta, nutrition, categoryPath);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20022, null, [{
    key: 'initialize',
    value: function initialize(obj, id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, shoppingListUnits, aisle, image, meta, nutrition, categoryPath) {
      obj['id'] = id;
      obj['original'] = original;
      obj['originalName'] = originalName;
      obj['name'] = name;
      obj['nameClean'] = nameClean;
      obj['amount'] = amount;
      obj['unit'] = unit;
      obj['unitShort'] = unitShort;
      obj['unitLong'] = unitLong;
      obj['possibleUnits'] = possibleUnits;
      obj['estimatedCost'] = estimatedCost;
      obj['consistency'] = consistency;
      obj['shoppingListUnits'] = shoppingListUnits;
      obj['aisle'] = aisle;
      obj['image'] = image;
      obj['meta'] = meta;
      obj['nutrition'] = nutrition;
      obj['categoryPath'] = categoryPath;
    }

    /**
     * Constructs a <code>InlineResponse20022</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022} The populated <code>InlineResponse20022</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20022();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('original')) {
          obj['original'] = _ApiClient2.default.convertToType(data['original'], 'String');
        }
        if (data.hasOwnProperty('originalName')) {
          obj['originalName'] = _ApiClient2.default.convertToType(data['originalName'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('nameClean')) {
          obj['nameClean'] = _ApiClient2.default.convertToType(data['nameClean'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient2.default.convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('unitShort')) {
          obj['unitShort'] = _ApiClient2.default.convertToType(data['unitShort'], 'String');
        }
        if (data.hasOwnProperty('unitLong')) {
          obj['unitLong'] = _ApiClient2.default.convertToType(data['unitLong'], 'String');
        }
        if (data.hasOwnProperty('possibleUnits')) {
          obj['possibleUnits'] = _ApiClient2.default.convertToType(data['possibleUnits'], ['String']);
        }
        if (data.hasOwnProperty('estimatedCost')) {
          obj['estimatedCost'] = _RecipesParseIngredientsEstimatedCost2.default.constructFromObject(data['estimatedCost']);
        }
        if (data.hasOwnProperty('consistency')) {
          obj['consistency'] = _ApiClient2.default.convertToType(data['consistency'], 'String');
        }
        if (data.hasOwnProperty('shoppingListUnits')) {
          obj['shoppingListUnits'] = _ApiClient2.default.convertToType(data['shoppingListUnits'], ['String']);
        }
        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient2.default.convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient2.default.convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient2.default.convertToType(data['meta'], [Object]);
        }
        if (data.hasOwnProperty('nutrition')) {
          obj['nutrition'] = _InlineResponse20022Nutrition2.default.constructFromObject(data['nutrition']);
        }
        if (data.hasOwnProperty('categoryPath')) {
          obj['categoryPath'] = _ApiClient2.default.convertToType(data['categoryPath'], ['String']);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20022;
}();

/**
 * @member {Number} id
 */


InlineResponse20022.prototype['id'] = undefined;

/**
 * @member {String} original
 */
InlineResponse20022.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
InlineResponse20022.prototype['originalName'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20022.prototype['name'] = undefined;

/**
 * @member {String} nameClean
 */
InlineResponse20022.prototype['nameClean'] = undefined;

/**
 * @member {Number} amount
 */
InlineResponse20022.prototype['amount'] = undefined;

/**
 * @member {String} unit
 */
InlineResponse20022.prototype['unit'] = undefined;

/**
 * @member {String} unitShort
 */
InlineResponse20022.prototype['unitShort'] = undefined;

/**
 * @member {String} unitLong
 */
InlineResponse20022.prototype['unitLong'] = undefined;

/**
 * @member {Array.<String>} possibleUnits
 */
InlineResponse20022.prototype['possibleUnits'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsEstimatedCost} estimatedCost
 */
InlineResponse20022.prototype['estimatedCost'] = undefined;

/**
 * @member {String} consistency
 */
InlineResponse20022.prototype['consistency'] = undefined;

/**
 * @member {Array.<String>} shoppingListUnits
 */
InlineResponse20022.prototype['shoppingListUnits'] = undefined;

/**
 * @member {String} aisle
 */
InlineResponse20022.prototype['aisle'] = undefined;

/**
 * @member {String} image
 */
InlineResponse20022.prototype['image'] = undefined;

/**
 * @member {Array.<Object>} meta
 */
InlineResponse20022.prototype['meta'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition} nutrition
 */
InlineResponse20022.prototype['nutrition'] = undefined;

/**
 * @member {Array.<String>} categoryPath
 */
InlineResponse20022.prototype['categoryPath'] = undefined;

exports.default = InlineResponse20022;