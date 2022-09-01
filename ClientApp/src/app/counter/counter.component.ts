import { Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { DonutService, listOfDonuts, DonutInfo } from '../donut.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  public loadedDonuts: DonutInfo[] = [];

  constructor(private thisDonutService: DonutService) {
    this.listDonuts();
  }

  private isNewDonutsAvailableEventSubscribed: boolean = false;
  public listDonuts() {
    if (!this.isNewDonutsAvailableEventSubscribed) {
      this.thisDonutService.newDonutsAvailableEvent.subscribe((gotData) => {
        for (let currElementNo = 0; currElementNo < gotData.count; currElementNo++)
          this.loadedDonuts.push(gotData.results[currElementNo]);
      })
      this.isNewDonutsAvailableEventSubscribed = true;
    }
    this.thisDonutService.GetInfoFromServer();
  }
}
