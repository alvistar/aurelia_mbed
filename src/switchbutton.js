import {inject, customElement, bindable} from 'aurelia-framework';
import "bootstrap-switch";

@customElement('switchbutton')
@inject(Element)
export class SwitchButton {
  @bindable state= false;
  @bindable onChange;
  element;

  constructor(element) {
    this.element = element;
    console.log(element);
  }

  stateChanged(value) {
    var e = $(this.element).find("input");
    e.bootstrapSwitch('state', value, true);
  }

  attached() {
    var self = this;
    var e = $(this.element).find("input");
    e.bootstrapSwitch();
    e.bootstrapSwitch('state',this.state,true);

    e.on("switchChange.bootstrapSwitch", (event, state) => {
      self.state = state;
      if (self.onChange != null) {
        console.log(state);
        self.onChange(state);
      }
    });
  }
}
