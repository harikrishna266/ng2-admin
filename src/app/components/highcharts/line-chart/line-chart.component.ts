import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {


    public options:any;
    public width:number;
    public height:number;
    @ViewChild('chartda') chartda: ElementRef;

    constructor() {

    }
    draw() {
          this.options = {
            title : { text : 'chart selection ' },
            chart: { zoomType: 'x'},
            series: [{ data: [29.9, 71.5, 106.4, 129.2, 45,13,120], }]
        };
    }

  ngOnInit() {
      this.draw();
  }

}
