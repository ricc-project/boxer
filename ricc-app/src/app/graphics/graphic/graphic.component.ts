import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {
  public lineChartType = 'line';
  public lineChartLegend = true;
  
  @Input('value') value: Array<{dataset: {data: Array<number>, label: string}, labels: Array<number>}>;
  @Input('title') title: String; 

  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    }
  };


  lineChartData: ChartDataSets[] =  [];

  lineChartLabels: Label[] = [];


  constructor() { }

  ngOnInit() {
    console.log("O VALOR", this.value);
    let labels = []

    for (let v of this.value){
      console.log(v['dataset']);
      this.lineChartData.push(v['dataset'])
      
      for (let l of v['labels']){
        if(labels.indexOf(l) == -1 ){
          labels.push(l);            
        }
      }

      // labels.push(...v['labels'])
    }
    
    console.log("A", labels);
    
    this.lineChartLabels = labels;
    console.log(this.lineChartLabels);
     
    // this.lineChartData = this.value['dataset'];
    // this.lineChartLabels = this.value['labels']
    
  }

}
