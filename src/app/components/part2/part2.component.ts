import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
@Component({
  selector: 'app-part2',
  standalone: true,
  imports: [],
  templateUrl: './part2.component.html',
  styleUrl: './part2.component.css'
})
export class Part2Component implements OnInit {  
  constructor() { }

  ngOnInit() {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: [20,25,30,35,40,45,50,55,60,65],
          datasets: [{
              label: 'Employer',
              data: [10,20,30,40,50,60,70,80,90,100],
              backgroundColor: ['indigo',],
              borderColor: ['blue', ],
              borderWidth: 1
          },{
            label: 'Employee',
            data: [50,60,70,80,100,120,140,200,220,240],
            backgroundColor: ['blue', ],
            borderColor: [ 'blue',],
            borderWidth: 1
          },{
            label: 'Total Interest',
            data: [80,100,120,140,160,180,190,240,280,300],
            backgroundColor: ['cyan',],
            borderColor: [
                'blue',],
            borderWidth: 1}]
      },
      options: {
          scales: {
              y: {beginAtZero: true,stacked:true},
              x:{stacked:true}
            
          }
      }
  });
  }

}
