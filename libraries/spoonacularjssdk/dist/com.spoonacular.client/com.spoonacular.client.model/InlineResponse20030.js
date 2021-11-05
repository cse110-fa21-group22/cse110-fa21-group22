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

var _InlineResponse20028Nutrition = require('./InlineResponse20028Nutrition');

var _InlineResponse20028Nutrition2 = _interopRequireDefault(_InlineResponse20028Nutrition);

var _InlineResponse20028Servings = require('./InlineResponse20028Servings');

var _InlineResponse20028Servings2 = _interopRequireDefault(_InlineResponse20028Servings);

var _InlineResponse20030Ingredients = require('./InlineResponse20030Ingredients');

var _InlineResponse20030Ingredients2 = _interopRequireDefault(_InlineResponse20030Ingredients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20030 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030
 * @version 1.0
 */
var InlineResponse20030 = function () {
  /**
   * Constructs a new <code>InlineResponse20030</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030
   * @param id {Number} 
   * @param title {String} 
   * @param breadcrumbs {Array.<String>} 
   * @param imageType {String} 
   * @param badges {Array.<String>} 
   * @param importantBadges {Array.<String>} 
   * @param ingredientCount {Number} 
   * @param ingredientList {String} 
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030Ingredients>} 
   * @param likes {Number} 
   * @param aisle {String} 
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition} 
   * @param price {Number} 
   * @param servings {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Servings} 
   * @param spoonacularScore {Number} 
   */
  function InlineResponse20030(id, title, breadcrumbs, imageType, badges, importantBadges, ingredientCount, ingredientList, ingredients, likes, aisle, nutrition, price, servings, spoonacularScore) {
    _classCallCheck(this, InlineResponse20030);

    InlineResponse20030.initialize(this, id, title, breadcrumbs, imageType, badges, importantBadges, ingredientCount, ingredientList, ingredients, likes, aisle, nutrition, price, servings, spoonacularScore);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20030, null, [{
    key: 'initialize',
    value: function initialize(obj, id, title, breadcrumbs, imageType, badges, importantBadges, ingredientCount, ingredientList, ingredients, likes, aisle, nutrition, price, servings, spoonacularScore) {
      obj['id'] = id;
      obj['title'] = title;
      obj['breadcrumbs'] = breadcrumbs;
      obj['imageType'] = imageType;
      obj['badges'] = badges;
      obj['importantBadges'] = importantBadges;
      obj['ingredientCount'] = ingredientCount;
      obj['ingredientList'] = ingredientList;
      obj['ingredients'] = ingredients;
      obj['likes'] = likes;
      obj['aisle'] = aisle;
      obj['nutrition'] = nutrition;
      obj['price'] = price;
      obj['servings'] = servings;
      obj['spoonacularScore'] = spoonacularScore;
    }

    /**
     * Constructs a <code>InlineResponse20030</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030} The populated <code>InlineResponse20030</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20030();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('breadcrumbs')) {
          obj['breadcrumbs'] = _ApiClient2.default.convertToType(data['breadcrumbs'], ['String']);
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient2.default.convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('badges')) {
          obj['badges'] = _ApiClient2.default.convertToType(data['badges'], ['String']);
        }
        if (data.hasOwnProperty('importantBadges')) {
          obj['importantBadges'] = _ApiClient2.default.convertToType(data['importantBadges'], ['String']);
        }
        if (data.hasOwnProperty('ingredientCount')) {
          obj['ingredientCount'] = _ApiClient2.default.convertToType(data['ingredientCount'], 'Number');
        }
        if (data.hasOwnProperty('generatedText')) {
          obj['generatedText'] = _ApiClient2.default.convertToType(data['generatedText'], Object);
        }
        if (data.hasOwnProperty('ingredientList')) {
          obj['ingredientList'] = _ApiClient2.default.convertToType(data['ingredientList'], 'String');
        }
        if (data.hasOwnProperty('ingredients')) {
          obj['ingredients'] = _ApiClient2.default.convertToType(data['ingredients'], [_InlineResponse20030Ingredients2.default]);
        }
        if (data.hasOwnProperty('likes')) {
          obj['likes'] = _ApiClient2.default.convertToType(data['likes'], 'Number');
        }
        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient2.default.convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('nutrition')) {
          obj['nutrition'] = _InlineResponse20028Nutrition2.default.constructFromObject(data['nutrition']);
        }
        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient2.default.convertToType(data['price'], 'Number');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _InlineResponse20028Servings2.default.constructFromObject(data['servings']);
        }
        if (data.hasOwnProperty('spoonacularScore')) {
          obj['spoonacularScore'] = _ApiClient2.default.convertToType(data['spoonacularScore'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20030;
}();

/**
 * @member {Number} id
 */


InlineResponse20030.prototype['id'] = undefined;

/**
 * @member {String} title
 */
InlineResponse20030.prototype['title'] = undefined;

/**
 * @member {Array.<String>} breadcrumbs
 */
InlineResponse20030.prototype['breadcrumbs'] = undefined;

/**
 * @member {String} imageType
 */
InlineResponse20030.prototype['imageType'] = undefined;

/**
 * @member {Array.<String>} badges
 */
InlineResponse20030.prototype['badges'] = undefined;

/**
 * @member {Array.<String>} importantBadges
 */
InlineResponse20030.prototype['importantBadges'] = undefined;

/**
 * @member {Number} ingredientCount
 */
InlineResponse20030.prototype['ingredientCount'] = undefined;

/**
 * @member {Object} generatedText
 */
InlineResponse20030.prototype['generatedText'] = undefined;

/**
 * @member {String} ingredientList
 */
InlineResponse20030.prototype['ingredientList'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030Ingredients>} ingredients
 */
InlineResponse20030.prototype['ingredients'] = undefined;

/**
 * @member {Number} likes
 */
InlineResponse20030.prototype['likes'] = undefined;

/**
 * @member {String} aisle
 */
InlineResponse20030.prototype['aisle'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition} nutrition
 */
InlineResponse20030.prototype['nutrition'] = undefined;

/**
 * @member {Number} price
 */
InlineResponse20030.prototype['price'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Servings} servings
 */
InlineResponse20030.prototype['servings'] = undefined;

/**
 * @member {Number} spoonacularScore
 */
InlineResponse20030.prototype['spoonacularScore'] = undefined;

exports.default = InlineResponse20030;