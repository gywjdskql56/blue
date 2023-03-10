import React, { Component } from 'react';
import am4geodata_lang_ES from "@amcharts/amcharts4-geodata/lang/KO";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
//import cities from './mock';
import am4geodata_usaHigh from "@amcharts/amcharts4-geodata/southKoreaHigh";

import AnimateNumber from 'react-animated-number';
import s from './am4chartMap.module.scss';
  
  class Am4chartMap extends Component {
  
  componentDidMount() {
    let map = am4core.create("map", am4maps.MapChart);
    map.geodata = am4geodata_usaHigh;
    map.geodataNames = am4geodata_lang_ES;
    map.percentHeight = 90;
    map.dy = 10;
    map.projection = new am4maps.projections.Projection();
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.data = [{
          "id": "KR-49",
          "name": "제주특별자치도",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-48",
          "name": "경상남도",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-47",
          "name": "경상북도",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-46",
          "name": "전라남도",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-45",
          "name": "전라북도",
          "color": am4core.color("#474D84"),
          "description": ""
          },
          {
          "id": "KR-44",
          "name": "충청남도",
          "color": am4core.color("#474D84"),
          "description": ""
          },
          {
          "id": "KR-43",
          "name": "충청북도",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-42",
          "name": "강원도",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-41",
          "name": "경기도",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-31",
          "name": "울산광역시",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-30",
          "name": "대전광역시",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-29",
          "name": "광주광역시",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-28",
          "name": "인천광역시",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-27",
          "name": "대구광역시",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-26",
          "name": "부산광역시",
          "color": am4core.color("#474D84"),
          "description": ""
          }, {
          "id": "KR-11",
          "name": "서울특별시",
          "color": am4core.color("#474D84"),
          "description": ""
          }
 ]
    map.homeZoomLevel = 1.2;
    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.layout = 'horizontal';
    map.zoomControl.align = 'left';
    map.zoomControl.valign = 'bottom';
    map.zoomControl.dy = -10;
    map.zoomControl.contentHeight = 20;
    map.zoomControl.minusButton.background.fill = am4core.color("#C7D0FF");
    map.zoomControl.minusButton.background.stroke = am4core.color("#6979C9");
    map.zoomControl.minusButton.label.fontWeight = 600;
    map.zoomControl.minusButton.label.fontSize = 22;
    map.zoomControl.minusButton.scale = .75;
    map.zoomControl.minusButton.label.scale = .75;
    map.zoomControl.plusButton.background.fill = am4core.color("#C7D0FF");
    map.zoomControl.plusButton.background.stroke = am4core.color("#6979C9");
    map.zoomControl.plusButton.label.fontWeight = 600;
    map.zoomControl.plusButton.label.fontSize = 22;
    map.zoomControl.plusButton.label.align = "center";
    map.zoomControl.plusButton.scale = .75;
    map.zoomControl.plusButton.label.scale = .75;
    map.zoomControl.plusButton.dx = 5;
    let plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover");
    plusButtonHoverState.properties.fill = am4core.color("#354D84");
    let minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover");
    minusButtonHoverState.properties.fill = am4core.color("#354D84");
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#474D84");
    polygonTemplate.stroke = am4core.color("#6979C9")
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#354D84");
    polygonTemplate.propertyFields.fill = "color";
    polygonTemplate.events.on("hit", function(ev) {
      var data = ev.target.dataItem.dataContext;
      console.log(data);
      var info = document.getElementById("info");
      console.log(info);
      info.innerHTML = "<h3>" + data.name + " (" + data.id  + ")</h3>";
      if (data.description) {
        info.innerHTML += data.description;
      }
      else {
        info.innerHTML += "<i>No description provided.</i>"
      }
    });
    {/*let citySeries = map.series.push(new am4maps.MapImageSeries());
    citySeries.data = cities;
    citySeries.dataFields.value = "size";
    let city = citySeries.mapImages.template;
    city.nonScaling = true;
    city.propertyFields.latitude = "latitude";
    city.propertyFields.longitude = "longitude";
    let circle = city.createChild(am4core.Circle);
    circle.fill = am4core.color("#C7D0FF");
    circle.strokeWidth = 0;
    let circleHoverState = circle.states.create("hover");
    circleHoverState.properties.strokeWidth = 1;
    circle.tooltipText = '{tooltip}';
    circle.propertyFields.radius = 'size';*/}
  }

  componentWillUnmount() {
    if(this.map) {
      this.map.dispose();
    }
  }

  render() {
    return (
      <div className={s.mapChart}>
        <div className={s.stats}>
          <h6 className="mt-1">전체 매물수</h6>
          <p className="h3 m-0">
            <span className="me-1 fw-normal">
              <AnimateNumber
                value={1656843}
                initialValue={0}
                duration={1000} 
                stepPrecision={0}
                formatValue={n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              /></span>
            <i className="fa fa-map-marker" />
          </p>
        </div>
        <div className={s.map} id="map">
          <span>Alternative content for the map</span>
        </div>
        <div id="info"></div>
      </div>
    );
  }
}

export default Am4chartMap;
