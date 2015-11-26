System.register(["autobahn", "bootstrap-switch"], function (_export) {
  "use strict";

  var autobahn, Wamp;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_autobahn) {
      autobahn = _autobahn["default"];
    }, function (_bootstrapSwitch) {}],
    execute: function () {
      Wamp = (function () {
        function Wamp() {
          _classCallCheck(this, Wamp);

          this.sw1count = 0;
          this.result = 0;
        }

        _createClass(Wamp, [{
          key: "onTest",
          value: function onTest(state) {
            console.log("Changed:" + state);
            if (state) this.session.publish("com.example.switchon");else this.session.publish("com.example.switchoff");
          }
        }, {
          key: "onevent",
          value: function onevent(args) {
            console.log("Event:", args[0]);

            $("[name='my-checkbox']").bootstrapSwitch("toggleState");
          }
        }, {
          key: "activate",
          value: function activate() {
            var _this = this;

            this.connection = new autobahn.Connection({ url: "ws://192.168.20.192:8081", realm: "realm1" });

            this.connection.onopen = function (session) {
              console.log("Session estabilished");
              _this.session = session;
              session.subscribe("button", function (args) {
                _this.sw1count++;
              });
            };

            this.connection.open();
          }
        }]);

        return Wamp;
      })();

      _export("Wamp", Wamp);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBSWEsSUFBSTs7Ozs7Ozs7Ozs7QUFBSixVQUFJO2lCQUFKLElBQUk7Z0NBQUosSUFBSTs7ZUFDZixRQUFRLEdBQUcsQ0FBQztlQUNaLE1BQU0sR0FBRyxDQUFDOzs7cUJBRkMsSUFBSTs7aUJBTVQsZ0JBQUMsS0FBSyxFQUFFO0FBQ1osbUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLGdCQUFJLEtBQUssRUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEtBRTdDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUE7V0FDaEQ7OztpQkFFTSxpQkFBQyxJQUFJLEVBQUU7QUFDWixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9CLGFBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztXQUMxRDs7O2lCQUVPLG9CQUFHOzs7QUFDVCxnQkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQyxHQUFHLEVBQUUsMEJBQTBCLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7O0FBRTdGLGdCQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFBLE9BQU8sRUFBSTtBQUNsQyxxQkFBTyxDQUFDLEdBQUcsQ0FBRSxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3JDLG9CQUFLLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIscUJBQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFVBQUMsSUFBSSxFQUFJO0FBQ25DLHNCQUFLLFFBQVEsRUFBRSxDQUFDO2VBQ2pCLENBQUMsQ0FBQzthQUVKLENBQUE7O0FBRUQsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7V0FDeEI7OztlQWpDVSxJQUFJIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRvYmFobiBmcm9tICdhdXRvYmFobic7XG5pbXBvcnQgXCJib290c3RyYXAtc3dpdGNoXCI7XG4vL2ltcG9ydCBcImJvb3RzdHJhcC1zd2l0Y2gvZGlzdC9jc3MvYm9vdHN0cmFwMy9ib290c3RyYXAtc3dpdGNoLmNzcyFcIjtcblxuZXhwb3J0IGNsYXNzIFdhbXAge1xuICBzdzFjb3VudCA9IDA7XG4gIHJlc3VsdCA9IDA7XG4gIHNlc3Npb247XG5cblxuICBvblRlc3Qoc3RhdGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNoYW5nZWQ6XCIrIHN0YXRlKTtcbiAgICBpZiAoc3RhdGUpXG4gICAgICB0aGlzLnNlc3Npb24ucHVibGlzaChcImNvbS5leGFtcGxlLnN3aXRjaG9uXCIpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuc2Vzc2lvbi5wdWJsaXNoKFwiY29tLmV4YW1wbGUuc3dpdGNob2ZmXCIpXG4gIH1cblxuICBvbmV2ZW50KGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkV2ZW50OlwiLCBhcmdzWzBdKTtcbiAgICAvLyQoXCJbbmFtZT0nbXktY2hlY2tib3gnXVwiKS5ib290c3RyYXBTd2l0Y2goJ3N0YXRlJyx0cnVlLHRydWUpO1xuICAgICQoXCJbbmFtZT0nbXktY2hlY2tib3gnXVwiKS5ib290c3RyYXBTd2l0Y2goXCJ0b2dnbGVTdGF0ZVwiKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBhdXRvYmFobi5Db25uZWN0aW9uKHt1cmw6IFwid3M6Ly8xOTIuMTY4LjIwLjE5Mjo4MDgxXCIscmVhbG06IFwicmVhbG0xXCJ9KTtcblxuICAgIHRoaXMuY29ubmVjdGlvbi5vbm9wZW4gPSBzZXNzaW9uID0+IHtcbiAgICAgIGNvbnNvbGUubG9nIChcIlNlc3Npb24gZXN0YWJpbGlzaGVkXCIpO1xuICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgIHNlc3Npb24uc3Vic2NyaWJlKFwiYnV0dG9uXCIsIChhcmdzKT0+IHtcbiAgICAgICAgdGhpcy5zdzFjb3VudCsrO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICB0aGlzLmNvbm5lY3Rpb24ub3BlbigpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
