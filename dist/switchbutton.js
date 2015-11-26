System.register(['aurelia-framework', 'bootstrap-switch'], function (_export) {
  'use strict';

  var inject, customElement, bindable, SwitchButton;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }, function (_bootstrapSwitch) {}],
    execute: function () {
      SwitchButton = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(SwitchButton, [{
          key: 'state',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'onChange',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function SwitchButton(element) {
          _classCallCheck(this, _SwitchButton);

          _defineDecoratedPropertyDescriptor(this, 'state', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'onChange', _instanceInitializers);

          this.element = element;
          console.log(element);
        }

        _createDecoratedClass(SwitchButton, [{
          key: 'stateChanged',
          value: function stateChanged(value) {
            var e = $(this.element).find("input");
            e.bootstrapSwitch('state', value, true);
          }
        }, {
          key: 'attached',
          value: function attached() {
            var self = this;
            var e = $(this.element).find("input");
            e.bootstrapSwitch();
            e.bootstrapSwitch('state', this.state, true);

            e.on("switchChange.bootstrapSwitch", function (event, state) {
              self.state = state;
              if (self.onChange != null) {
                console.log(state);
                self.onChange(state);
              }
            });
          }
        }], null, _instanceInitializers);

        var _SwitchButton = SwitchButton;
        SwitchButton = inject(Element)(SwitchButton) || SwitchButton;
        SwitchButton = customElement('switchbutton')(SwitchButton) || SwitchButton;
        return SwitchButton;
      })();

      _export('SwitchButton', SwitchButton);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaGJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dUNBS2EsWUFBWTs7Ozs7Ozs7OztpQ0FMakIsTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7OztBQUsxQixrQkFBWTs7Ozs4QkFBWixZQUFZOzt1QkFDdEIsUUFBUTs7bUJBQVEsS0FBSzs7Ozs7dUJBQ3JCLFFBQVE7Ozs7O0FBR0UsaUJBTEEsWUFBWSxDQUtYLE9BQU8sRUFBRTs7Ozs7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0Qjs7OEJBUlUsWUFBWTs7aUJBVVgsc0JBQUMsS0FBSyxFQUFFO0FBQ2xCLGdCQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0QyxhQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDekM7OztpQkFFTyxvQkFBRztBQUNULGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsZ0JBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLGFBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNwQixhQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDOztBQUUzQyxhQUFDLENBQUMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLFVBQUMsS0FBSyxFQUFFLEtBQUssRUFBSztBQUNyRCxrQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsa0JBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7QUFDekIsdUJBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsb0JBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7ZUFDdEI7YUFDRixDQUFDLENBQUM7V0FDSjs7OzRCQTVCVSxZQUFZO0FBQVosb0JBQVksR0FEeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FGeEIsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUVqQixZQUFZLEtBQVosWUFBWTtlQUFaLFlBQVkiLCJmaWxlIjoic3dpdGNoYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgXCJib290c3RyYXAtc3dpdGNoXCI7XG5cbkBjdXN0b21FbGVtZW50KCdzd2l0Y2hidXR0b24nKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIFN3aXRjaEJ1dHRvbiB7XG4gIEBiaW5kYWJsZSBzdGF0ZT0gZmFsc2U7XG4gIEBiaW5kYWJsZSBvbkNoYW5nZTtcbiAgZWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHZhciBlID0gJCh0aGlzLmVsZW1lbnQpLmZpbmQoXCJpbnB1dFwiKTtcbiAgICBlLmJvb3RzdHJhcFN3aXRjaCgnc3RhdGUnLCB2YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGUgPSAkKHRoaXMuZWxlbWVudCkuZmluZChcImlucHV0XCIpO1xuICAgIGUuYm9vdHN0cmFwU3dpdGNoKCk7XG4gICAgZS5ib290c3RyYXBTd2l0Y2goJ3N0YXRlJyx0aGlzLnN0YXRlLHRydWUpO1xuXG4gICAgZS5vbihcInN3aXRjaENoYW5nZS5ib290c3RyYXBTd2l0Y2hcIiwgKGV2ZW50LCBzdGF0ZSkgPT4ge1xuICAgICAgc2VsZi5zdGF0ZSA9IHN0YXRlO1xuICAgICAgaWYgKHNlbGYub25DaGFuZ2UgIT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgICAgIHNlbGYub25DaGFuZ2Uoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
