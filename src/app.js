import autobahn from 'autobahn';
import "bootstrap-switch";
//import "bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css!";

export class Wamp {
  sw1count = 0;
  result = 0;
  session;


  onTest(state) {
    console.log("Changed:"+ state);
    if (state)
      this.session.publish("com.example.switchon");
    else
      this.session.publish("com.example.switchoff")
  }

  onevent(args) {
    console.log("Event:", args[0]);
    //$("[name='my-checkbox']").bootstrapSwitch('state',true,true);
    $("[name='my-checkbox']").bootstrapSwitch("toggleState");
  }

  activate() {
    this.connection = new autobahn.Connection({url: "ws://192.168.20.192:8081",realm: "realm1"});

    this.connection.onopen = session => {
      console.log ("Session estabilished");
      this.session = session;
      session.subscribe("button", (args)=> {
        this.sw1count++;
      });

    }

    this.connection.open();
  }
}
