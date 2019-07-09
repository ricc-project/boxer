import { SoilTemperatureCardComponent } from '../graphics/soil/temperature-card/temperature-card.component';
import { SoilHumidityCardComponent } from '../graphics/soil/humidity-card/humidity-card.component';
import { AirTemperatureCardComponent } from '../graphics/air/temperature-card/temperature-card.component';
import { AirHumidityCardComponent } from '../graphics/air/humidity-card/humidity-card.component';
import { PressureCardComponent } from '../graphics/air/pressure-card/pressure-card.component';
import { RadiationCardComponent } from '../graphics/solar/radiation-card/radiation-card.component';
import { SpeedDirectionCardComponent } from '../graphics/wind/speed-direction-card/speed-direction-card.component';
import { RainfallCardComponent } from '../graphics/rain/rainfall-card/rainfall-card.component';
import { GraphicComponent } from '../graphics/graphic/graphic.component';

import { Card } from './card';

export const components = [
    new Card(null, {category:"soil_datas", measure:"temperature"}, "Temperatura do solo - Última coleta", 'last-soil-temperature', SoilTemperatureCardComponent, "last" ),

    new Card(null, {category:"soil_datas", measure:"moisture1"}, "Umidade do solo - Última coleta", 'last-soil-humidity-last', SoilHumidityCardComponent, "last"),

    new Card(null, {category:"air_datas", measure:"temperature"}, "Temperatura do ar - Última coleta", 'last-air-temperature', AirTemperatureCardComponent, "last"),

    new Card(null, {category:"air_datas", measure:"humidity"}, "Umidade do ar - Última coleta", 'last-air-humidity', AirHumidityCardComponent, "last"),

    new Card(null, {category:"air_datas", measure:"pressure"}, "Pressão atmosférica - Última coleta", 'last-air-pressure', PressureCardComponent, "last"),

    new Card(null, {category:"solar_datas", measure:"radiation"}, "Radiação solar - Última coleta", 'last-solar-radiation', RadiationCardComponent, "last"),
    
    new Card(null, {category:"rain_datas", measure:"rainfall"}, "Pluviosidade - Última coleta", 'last-rain-rainfall', RainfallCardComponent, "last"),

    new Card(null, {category:"wind_datas", measure:"speed"}, "Velocidade e direção do vento- Última coleta", 'last-wind-speed-dir', SpeedDirectionCardComponent, "last"),

    //GRAPHS
    new Card(null, {category:"soil_datas", measure:"temperature", amount: 3}, "Temperatura do solo - Gráfico de linha", 'graph-soil-temperature', GraphicComponent, "graph"),

    new Card(null, {category:"soil_datas", measure:"moisture1", amount: 3}, "Umidade do solo - Gráfico de linha", 'graph-soil-humidity', GraphicComponent, "graph"),

    new Card(null, {category:"air_datas", measure:"temperature", amount: 3}, "Temperatura do ar - Gráfico de linha", 'graph-air-temperature', GraphicComponent, "graph"),

    new Card(null, {category:"air_datas", measure:"humidity", amount: 3}, "Umidade do ar - Gráfico de linha", 'graph-air-humidity', GraphicComponent, "graph"),
    
    new Card(null, {category:"air_datas", measure:"pressure", amount: 3}, "Pressão Atmosférica - Gráfico de linha", 'graph-air-pressure', GraphicComponent, "graph"),

    new Card(null, {category:"solar_datas", measure:"radiation", amount: 3}, "Radiação solar - Gráfico de linha", 'graph-solar-radiation', GraphicComponent, "graph"),
    
    new Card(null, {category:"rain_datas", measure:"rainfall", amount: 3}, "Pluviosidade - Gráfico de linha", 'graph-rain-rainfall', GraphicComponent, "graph"),

    new Card(null, {category:"wind_datas", measure:"speed", amount: 3}, "Velocidade do vento- Gráfico de linha", 'graph-wind-speed-dir', GraphicComponent, "graph"),

    new Card(null, {category:"wind_datas", measure:"direction", amount: 3}, "Direção do vento- Gráfico de linha", 'graph-wind-direction-dir', GraphicComponent, "graph"),

]