import { Directive, AfterViewChecked } from '@angular/core';
declare var componentHandler: any;

@Directive({
  selector: '[mdlUpgrade]'
})
export class MDLUpgrateElementDirective implements AfterViewChecked {
  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }
}
