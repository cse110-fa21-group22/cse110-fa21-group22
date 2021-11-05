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

var _InlineResponse20047RecommendedWines = require('./InlineResponse20047RecommendedWines');

var _InlineResponse20047RecommendedWines2 = _interopRequireDefault(_InlineResponse20047RecommendedWines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20047 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047
 * @version 1.0
 */
var InlineResponse20047 = function () {
  /**
   * Constructs a new <code>InlineResponse20047</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047
   * @param recommendedWines {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047RecommendedWines>} 
   * @param totalFound {Number} 
   */
  function InlineResponse20047(recommendedWines, totalFound) {
    _classCallCheck(this, InlineResponse20047);

    InlineResponse20047.initialize(this, recommendedWines, totalFound);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20047, null, [{
    key: 'initialize',
    value: function initialize(obj, recommendedWines, totalFound) {
      obj['recommendedWines'] = recommendedWines;
      obj['totalFound'] = totalFound;
    }

    /**
     * Constructs a <code>InlineResponse20047</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047} The populated <code>InlineResponse20047</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20047();

        if (data.hasOwnProperty('recommendedWines')) {
          obj['recommendedWines'] = _ApiClient2.default.convertToType(data['recommendedWines'], [_InlineResponse20047RecommendedWines2.default]);
        }
        if (data.hasOwnProperty('totalFound')) {
          obj['totalFound'] = _ApiClient2.default.convertToType(data['totalFound'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20047;
}();

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047RecommendedWines>} recommendedWines
 */


InlineResponse20047.prototype['recommendedWines'] = undefined;

/**
 * @member {Number} totalFound
 */
InlineResponse20047.prototype['totalFound'] = undefined;

exports.default = InlineResponse20047;