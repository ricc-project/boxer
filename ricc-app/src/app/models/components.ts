import { SoilTemperatureCardComponent } from '../graphics/soil/temperature-card/temperature-card.component';
import { SoilHumidityCardComponent } from '../graphics/soil/humidity-card/humidity-card.component';
import { AirTemperatureCardComponent } from '../graphics/air/temperature-card/temperature-card.component';
import { AirHumidityCardComponent } from '../graphics/air/humidity-card/humidity-card.component';
import { PressureCardComponent } from '../graphics/air/pressure-card/pressure-card.component';
import { RadiationCardComponent } from '../graphics/solar/radiation-card/radiation-card.component';
import { SpeedDirectionCardComponent } from '../graphics/wind/speed-direction-card/speed-direction-card.component';
import { RainfallCardComponent } from '../graphics/rain/rainfall-card/rainfall-card.component';
import { Card } from './card';

export const components = [
    new Card(null, {category:"soil_datas", measure:"temperature"}, "Temperatura do solo - Última coleta", 'last-soil-temperature', SoilTemperatureCardComponent ),

    new Card(null, {category:"soil_datas", measure:"moisture1"}, "Umidade do solo - Última coleta", 'last-soil-humidity-last', SoilHumidityCardComponent),

    new Card(null, {category:"air_datas", measure:"temperature"}, "Temperatura do ar - Última coleta", 'last-air-temperature', AirTemperatureCardComponent),

    new Card(null, {category:"air_datas", measure:"humidity"}, "Umidade do ar - Última coleta", 'last-air-humidity', AirHumidityCardComponent),

    new Card(null, {category:"air_datas", measure:"pressure"}, "Pressão atmosférica - Última coleta", 'last-air-pressure', PressureCardComponent),

    new Card(null, {category:"solar_datas", measure:"radiation"}, "Radiação solar - Última coleta", 'last-solar-radiation', RadiationCardComponent),
    
    new Card(null, {category:"rain_datas", measure:"rainfall"}, "Pluviosidade - Última coleta", 'last-rain-rainfall', RainfallCardComponent),

    new Card(null, {category:"wind_datas", measure:"speed"}, "Velocidade e direção do vento- Última coleta", 'last-wind-speed-dir', SpeedDirectionCardComponent)
]