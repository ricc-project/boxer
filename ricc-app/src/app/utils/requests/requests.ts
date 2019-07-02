import { BaseURL } from '../../models/baseUrl';
import { HttpClient } from '@angular/common/http';
import { GraphComponent } from '../../models/graph-types';

export class Requests {
    graphComponent : GraphComponent;

    constructor(private http: HttpClient) {
      this.graphComponent = new GraphComponent;
     }

    // Load centrals
    loadCentrals(authToken){
        let centrals = []
        let args = {auth_token: authToken};
    
        this.http.post(BaseURL + 'centrals/', args)
        .subscribe(
          data => {
            for (const central of data['centrals']) {
              centrals.push(central);
            }
          }, 
          err => {
            console.log("Um erro inesperado aconteceu!");

          }
        );
        
        return centrals;
      }


      //Load Stations
      loadStations(authToken, relatedCentral){        
        let stations = [];
        let centrals = [];
    
        let args = {
          auth_token: authToken  
        }
    
        this.http.post(BaseURL + 'stations/', args)
        .subscribe(
          data => {            
            for (const station of data['stations']) {
              // Filter of stations by central
              if (relatedCentral !== null){
                if (relatedCentral == station.related_central){
                  stations.push(station);
                  centrals = this.getCentrals(station, centrals);
                }
              } else{
                stations.push(station);
                centrals = this.getCentrals(station, centrals);
              }
            }
            stations = this.addDataStations(authToken, stations, centrals);      
          }, 
          err => {
            console.log("Not good enough!");
            
          }
        );

        return stations;
      }

      getCentrals(station, centrals){
        // Get centrals 
        if(centrals.indexOf(station.related_central) == -1 ){
          centrals.push(station.related_central);            
        }

        return centrals;
      }


      addDataStations(authToken, stations, centrals){
        let result_stations = []
        for (const central of centrals) {      
    
          let args = {
            auth_token: authToken,
            central: central
          }
    
          this.http.post(BaseURL + 'central/last_datas/', args)
          .subscribe(
            data => {
              let datas = data as Array<any>;
              
              for (const d of datas) {
                let stationName = d['station']['name'];
                let stationData = d['data'];
    
                let station = stations.find(s => s.name === stationName);            
                station.data = stationData;
                result_stations.push(station);            
              }          
            }, 
            err => {
              console.log("Not good enough!");
              
            }
          );        
        }
        
        return result_stations;
      }
    


      // Load actuators
      loadActuators(authToken, relatedCentral){
        let actuators = [];
        let centrals = [];

        let args = {
          auth_token: authToken  
        }
    
        this.http.post(BaseURL + 'actuators/', args)
        .subscribe(
          data => {
            for (const actuator of data['actuators']) {
              if (relatedCentral !== null){
                if (relatedCentral == actuator.related_central){
                  actuators.push(actuator);
                  centrals = this.getCentrals(actuator, centrals);
                }
              } else{
                actuators.push(actuator);
                centrals = this.getCentrals(actuator,centrals);
              }
            }
            actuators = this.addDataActuators(authToken, actuators, centrals);
          }, 
          err => {
            console.log("Not good enough!");
            
          }
        );

        return actuators;
      }


      addDataActuators(authToken, actuators, centrals){
        let result_actuators = [];

        for (const central of centrals) {      
          let args = {
            auth_token: authToken,
            central: central
          }
    
          this.http.post(BaseURL + 'actuator/last_datas/', args)
          .subscribe(
            data => {
              let datas = data as Array<any>;
              
              for (const d of datas) {
                let actuatorName = d['actuator']['name'];
                let actuatorData = d['data'];
    
                let actuator = actuators.find(a => a.name === actuatorName);            
                actuator.data = actuatorData;
                result_actuators.push(actuator);            
              }          
            }, 
            err => {
              console.log("Not good enough!");
              
            }
          );        
        }
    
        return result_actuators;
      }

    // Load centrals
    loadCards(authToken){
      let cards = []
      let args = {auth_token: authToken};
  
      this.http.post(BaseURL + 'card/get/', args)
      .subscribe(
        data => {
          for (const card of data['cards']) {
            let c = this.graphComponent.get(card.card_type);
            c.central = card.central;
            c.station = card.station;
            cards.push(c);
          }
          this.getMeasure(authToken, cards)
        }, 
        err => {
          console.log("Um erro inesperado aconteceu!");
        }
      );
      return cards;
    }

    // Get single last measure
    getMeasure(authToken, cards){
      let result = []
      for (const card of cards) {
        
        let args = {
          auth_token : authToken,
          central : card.central,
          station : card.station,
          filters : card.filter
        };

        this.http.post(BaseURL + 'measure/last/', args)
        .subscribe(
          data => {
            let value = data['value'];
            card.value = value;
            result.push(card);            
          }, 
          err => {
            console.log("Um erro inesperado aconteceu!", err);
          }
        );
      }

      return result;
    }


    // Get single last measure
    addNewCard(authToken, card){
      let result = false;

      let args = {
        auth_token : authToken,
        central : card.central,
        station : card.station,
        card_type : card.name,
        filters : card.filter
      };

        this.http.post(BaseURL + 'card/save/', args)
        .subscribe(
          data => {
            console.log(data);
            if(data['status'] == "beautiful"){
              result = true;
            } 
          }, 
          err => {
            console.log("Um erro inesperado aconteceu!", err);
          }
        );

    }

}
