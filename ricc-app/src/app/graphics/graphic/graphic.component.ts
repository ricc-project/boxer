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
    if (this.value !== null) {
      console.log("VALUE", this.value);
      
      let labels = []
      
      for (let value of this.value){
        for (const label of value['labels']) {
          if(labels.indexOf(label) == -1 ){
            labels.push(label);            
          }        
        }
      }
      
      labels.sort()

      for (let value of this.value){
        let responseDataset = value['dataset']
        let dataset = {data: new Array(labels.length).fill(null), label: "Estação " + responseDataset['label']}

        for (const data of responseDataset['data']) {
          let value = data['value'];        
          let time = data['time']
          
          let index = labels.indexOf(time)
          dataset.data[index] = value
        }
        this.lineChartData.push(dataset)

        
      }

      //CONVERT TO LABEL READABLE
      let chartLabels = []
      for (const label of labels) {
        let labelTime = new Date(label)
        
        this.lineChartLabels.push(labelTime.toLocaleString().substr(11, 8));
      }
    }     
  }
}
