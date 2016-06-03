/**
 * Created by RIGHJES on 6/2/2016.
 */
angular.module('createShipment')
  .directive('showErrors', function() {
  return {
    restrict: 'A',
    require:  ['^form','ngModel'],
    link: function (scope, el, attrs, controllers) {
      // find the text box element, which has the 'name' attribute
      var inputEl   = el[0].querySelector("[name]");
      // convert the native text box element to an angular element
      var inputNgEl = angular.element(inputEl);
      // get the name on the text box so we know the property to check
      // on the form controller
      var inputName = inputNgEl.attr('name');

      // only apply the has-error class after the user leaves the text box
      inputNgEl.bind('blur', function() {
        el.toggleClass('has-error', controllers[0][inputName].$invalid);
      })

      scope.$on('show-errors-check-validity', function() {
        el.toggleClass('has-error', controllers[0][inputName].$invalid);
      });

      controllers[1].$validators.leadingSlash = function(modelValue) {
        return _.startsWith(modelValue, '/');
      }
    }
  }
});
