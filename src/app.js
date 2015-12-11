import autobahn from 'autobahn';
import "bootstrap-switch";
//import "bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css!";

export class Wamp {
  URL= "ws://localhost:8080/ws"
  sw2count = 0;
  result = 0;
  accelX =0;
  accelY = 0;
  accelZ = 0;
  colors = ["Blue","Green","Red"];
  selectedColor = 'Blue';
  session;
  switchState= false;

  onChangeColor() {
    if (this.switchState)
      this.session.call("com.freedom.switchon",[this.colors.indexOf(this.selectedColor)]);
  }

  onTest(state) {
    console.log("Changed:"+ state);
    if (state)
      this.session.call("com.freedom.switchon",[this.colors.indexOf(this.selectedColor)]);
    else
      this.session.call("com.freedom.switchoff");
  }

  onevent(args) {
    console.log("Event:", args[0]);
    //$("[name='my-checkbox']").bootstrapSwitch('state',true,true);
    $("[name='my-checkbox']").bootstrapSwitch("toggleState");
  }

  changedLedStatus(res) {
    console.log("Changed Led Status");
    if (res==-1)   {
      this.switchState = false;
    }
    else {
      this.switchState = true;
      this.selectedColor = this.colors[res];
    }
  }

  activate() {
    this.connection = new autobahn.Connection({url: this.URL,realm: "realm1"});

    this.connection.onopen = session => {
      console.log ("Session estabilished");
      this.session = session;
      session.subscribe("button", (args)=> {
        this.sw2count=args[0];
      });

      session.subscribe("acceleremoter", (args)=> {
        this.accelX=args[0];
        this.accelY=args[1];
        this.accelZ=args[2];
      });

      session.subscribe("com.freedom.switched", (args) => {
        this.changedLedStatus(args[0]);
      });

      session.call('com.freedom.getCounter').then(
        res => {
          console.log("Result:", res);
          this.sw2count = res;
        });

      session.call('com.freedom.getLedStatus').then(
        res => {
          console.log("Led Status:", res);
          this.changedLedStatus(res);
        });
    };

    this.connection.open();
  }
}
