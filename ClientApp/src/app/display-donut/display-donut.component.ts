import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutService, DonutInfo } from '../donut.service';

@Component({
  selector: 'app-display-donut',
  templateUrl: './display-donut.component.html',
  styleUrls: ['./display-donut.component.css']
})
export class DisplayDonutComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute, private thisDonutService: DonutService) { }

  public donutDetails = new DonutDetails();

  public id: number = 0;
  ngOnInit(): void {
    let id_string: string | null = "";
    id_string = this._Activatedroute.snapshot.paramMap.get("id");
    this.id = Number.parseInt(id_string!);

    this.displayDetails();
  }

  private isDetailsAvailable: boolean = false;
  public displayDetails() {
    if (!this.isDetailsAvailable) {
      this.thisDonutService.newDetailsAvailableEvent.subscribe((gotData) => {
        if (this.donutDetails.id = this.id) {
          this.donutDetails = gotData;
        }
      })
      this.isDetailsAvailable = true;
      this.thisDonutService.GetDetailsFromServer(this.id);
    }
  }
}

export class DonutDetails {
  public id: number = 0;
  public ref: string = "";
  public name: string = "";
  public calories: number = 0;
  public extras: string[] = [];
  public photo: string = "";
  public photo_attribution: string = "";
}
