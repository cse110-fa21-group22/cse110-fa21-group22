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
 * The InlineResponse20033 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033
 * @version 1.0
 */
var InlineResponse20033 = function () {
  /**
   * Constructs a new <code>InlineResponse20033</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033
   * @param cleanTitle {String} 
   * @param image {String} 
   * @param category {String} 
   * @param breadcrumbs {Array.<String>} 
   * @param usdaCode {Number} 
   */
  function InlineResponse20033(cleanTitle, image, category, breadcrumbs, usdaCode) {
    _classCallCheck(this, InlineResponse20033);

    InlineResponse20033.initialize(this, cleanTitle, image, category, breadcrumbs, usdaCode);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20033, null, [{
    key: 'initialize',
    value: function initialize(obj, cleanTitle, image, category, breadcrumbs, usdaCode) {
      obj['cleanTitle'] = cleanTitle;
      obj['image'] = image;
      obj['category'] = category;
      obj['breadcrumbs'] = breadcrumbs;
      obj['usdaCode'] = usdaCode;
    }

    /**
     * Constructs a <code>InlineResponse20033</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033} The populated <code>InlineResponse20033</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20033();

        if (data.hasOwnProperty('cleanTitle')) {
          obj['cleanTitle'] = _ApiClient2.default.convertToType(data['cleanTitle'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient2.default.convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient2.default.convertToType(data['category'], 'String');
        }
        if (data.hasOwnProperty('breadcrumbs')) {
          obj['breadcrumbs'] = _ApiClient2.default.convertToType(data['breadcrumbs'], ['String']);
        }
        if (data.hasOwnProperty('usdaCode')) {
          obj['usdaCode'] = _ApiClient2.default.convertToType(data['usdaCode'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20033;
}();

/**
 * @member {String} cleanTitle
 */


InlineResponse20033.prototype['cleanTitle'] = undefined;

/**
 * @member {String} image
 */
InlineResponse20033.prototype['image'] = undefined;

/**
 * @member {String} category
 */
InlineResponse20033.prototype['category'] = undefined;

/**
 * @member {Array.<String>} breadcrumbs
 */
InlineResponse20033.prototype['breadcrumbs'] = undefined;

/**
 * @member {Number} usdaCode
 */
InlineResponse20033.prototype['usdaCode'] = undefined;

exports.default = InlineResponse20033;