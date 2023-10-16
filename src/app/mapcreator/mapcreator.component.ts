import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highmaps";
import Drilldown from "highcharts/modules/drilldown";

Drilldown(Highcharts);

declare var require: any;
const usaMap = require("@highcharts/map-collection/countries/us/us-all.geo.json");
@Component({
  selector: 'app-mapcreator',
  templateUrl: './mapcreator.component.html',
  styleUrls: ['./mapcreator.component.css']
})
export class MAPCreatorComponent  implements OnInit{
  Highcharts: any;
  chartConstructor = "mapChart";
  chartOptions: any;
  constructor(){
    
  }
  ngOnInit(): void{
    this.mapfuncation()
  }
  mapfuncation() {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        map: usaMap,
      },
      title: {
        text: '',
    },
    subtitle: {
        text: '',
  
    },
      series: [
        {
          data: [
            {
              id: "us-ma",
              drilldown: "us-ma",
              color: "#757575",
            },
            {
              id: "us-wa",
              drilldown: "us-wa",
              color: "#757575",
            },
            {
              id: "us-ca",
              drilldown: "us-ca",
              color: "#f230d2",
            },
            {
              id: "us-or",
              drilldown: "us-or",
              color: "#757575",
            },
            {
              id: "us-wi",
              drilldown: "us-wi",
              color: "#757575",
            },
            {
              id: "us-me",
              drilldown: "us-me",
              color: "#757575",
            },
            {
              id: "us-nv",
              drilldown: "us-nv",
              color: "#757575",
            },
            {
              id: "us-nm",
              drilldown: "us-nm",
              color: "#f29a2e",
            },
            {
              id: "us-co",
              drilldown: "us-co",
              color: "#f20505",
            },
            {
              id: "us-wy",
              drilldown: "us-wy",
              color: "#757575",
            },
            {
              id: "us-ks",
              drilldown: "us-ks",
              color: "#757575",
            },
            {
              id: "us-ne",
              drilldown: "us-ne",
              color: "#757575",
            },
            {
              id: "us-ok",
              drilldown: "us-ok",
              color: "#808080",
            },
            {
              id: "us-mo",
              drilldown: "us-mo",
              color: "#757575",
            },
            {
              id: "us-il",
              drilldown: "us-il",
              color: "#757575",
            },
            {
              id: "us-in",
              drilldown: "us-in",
              color: "#757575",
            },
            {
              id: "us-vt",
              drilldown: "us-vt",
              color: "#757575",
            },
            {
              id: "us-ar",
              drilldown: "us-ar",
              color: "#757575",
            },
            {
              id: "us-il",
              drilldown: "us-il",
              color: "#808000",
            },
            {
              id: "us-tx",
              drilldown: "us-tx",
              color: "#d98e04",
            },
            {
              id: "us-il",
              drilldown: "us-il",
              color: "#BCC6CC",
            },
            {
              id: "us-il",
              drilldown: "us-il",
              color: "#757575",
            },
            {
              id: "us-ri",
              drilldown: "us-ri",
              color: "#98AFC7",
            },
            {
              id: "us-al",
              drilldown: "us-al",
              color: "#bf8c6f",
            },
            {
              id: "us-ms",
              drilldown: "us-ms",
              color: "#757575",
            },
            {
              id: "us-nc",
              drilldown: "us-nc",
              color: "#757575",
            },
            {
              id: "us-va",
              drilldown: "us-va",
              color: "#757575",
            },
            {
              id: "us-ia",
              drilldown: "us-ia",
              color: "#757575",
            },
            {
              id: "us-md",
              drilldown: "us-md",
              color: "#616D7E",
            },
            {
              id: "us-de",
              drilldown: "us-de",
              color: "#646D7E",
            },
            {
              id: "us-pa",
              drilldown: "us-pa",
              color: "#757575",
            },
            {
              id: "us-nj",
              drilldown: "us-nj",
              color: "#757575",
            },
            {
              id: "us-ny",
              drilldown: "us-ny",
              color: "#757575",
            },
            {
              id: "us-id",
              drilldown: "us-id",
              color: "#757575",
            },
            {
              id: "us-sd",
              drilldown: "us-sd",
              color: "#012e40",
            },
            {
              id: "us-ct",
              drilldown: "us-ct",
              color: "#757575",
            },
            {
              id: "us-oh",
              drilldown: "us-oh",
              color: "#757575",
            },
            {
              id: "us-tn",
              drilldown: "us-tn",
              color: "#757575",
            },
            {
              id: "us-nh",
              drilldown: "us-nh",
              color: "#757575",
            },
            {
              id: "us-ky",
              drilldown: "us-ky",
              color: "#757575",
            },
            {
              id: "us-wv",
              drilldown: "us-wv",
              color: "#757575",
            },
            {
              id: "us-dc",
              drilldown: "us-dc",
              color: "#151B8D",
            },
            {
              id: "us-la",
              drilldown: "us-la",
              color: "#757575",
            },
            {
              id: "us-fl",
              drilldown: "us-fl",
              color: "#594302",
            },
            {
              id: "us-ga",
              drilldown: "us-ga",
              color: "#73412f",
            },
            {
              id: "us-sc",
              drilldown: "us-sc",
              color: "#757575",
            },
            {
              id: "us-mn",
              drilldown: "us-mn",
              color: "#757575",
            },
            {
              id: "us-mi",
              drilldown: "us-mi",
              color: "#757575",
            },
            {
              id: "us-mt",
              drilldown: "us-mt",
              color: "#757575",
            },
            {
              id: "us-ky",
              drilldown: "us-ky",
              color: "#0000CD",
            },
            {
              id: "us-nd",
              drilldown: "us-nd",
              color: "#024873",
            },
            {
              id: "us-ky",
              drilldown: "us-ky",
              color: "#2916F5",
            },
            {
              id: "us-ky",
              drilldown: "us-ky",
              color: "#0000FF",
            },
            {
              id: "us-ky",
              drilldown: "us-ky",
              color: "#757575",
            },
            {
              id: "us-az",
              drilldown: "us-az",
              color: "#04bfbf",
            },
            {
              id: "us-ak",
              drilldown: "us-ak",
              color: "#757575",
            },
            {
              id: "gu-3605",
              drilldown: "gu-3605",
              color: "#2554C7",
            },
            {
              id: "mp-ti",
              drilldown: "mp-ti",
              color: "#1569C7",
            },
            {
              id: "us-ut",
              drilldown: "us-ut",
              color: "#757575",
            },
            {
              id: "us-hi",
              drilldown: "us-hi",
              color: "#757575",
            },
            {
              id: "us-sa",
              drilldown: "us-sa",
              color: "#4169E1",
            },
            {
              id: "mp-ro",
              drilldown: "mp-ro",
              color: "#2B65EC",
            },
            {
              id: "as-6515",
              drilldown: "as-6515",
              color: "#306EFF",
            },
            {
              id: "as-6514",
              drilldown: "as-6514",
              color: "#B4CFEC",
            },
            {
              id: "'pr-3614",
              drilldown: "'pr-3614",
              color: "#0AFFFF",
            },
            {
              id: "'vi-3617",
              drilldown: "vi-3617",
              color: "#4EE2EC",
            },
            {
              id: "vi-6398",
              drilldown: "vi-6398",
              color: "#50EBEC",
            },
            {
              id: "vi-6399",
              drilldown: "vi-6399",
              color: "#8EEBEC",
            },
          ],
          mapData: usaMap,
          allowPointSelect: true,
          joinBy: ["hc-key", "id"],
        },
      ],
      drilldown: {
        // series: [
        //     {
        //         name: "us-co",
        //         id: "us-co",
        //         data: [
        //             ['us-co', 58]
        //         ],
        //     },{
        //       name: "us-wa",
        //         id: "us-wa",
        //         data: [
        //             ['us-wa', 89]
        //         ]
        //     }
        // ]
      },
    };
  }
}
