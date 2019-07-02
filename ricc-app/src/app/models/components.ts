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
    new Card("/", ["last"], "Temperatura do solo - Última coleta", 'last-soil-temperature', SoilTemperatureCardComponent ),

    new Card("/", ["last"], "Umidade do solo - Última coleta", 'last-soil-humidity-last', SoilHumidityCardComponent),

    new Card("/", ["last"], "Temperatura do ar - Última coleta", 'last-air-temperature', AirTemperatureCardComponent),

    new Card( "/", ["last"], "Umidade do ar - Última coleta", 'last-air-humidity', AirHumidityCardComponent),

    new Card("/", ["last"], "Pressão atmosférica - Última coleta", 'last-air-pressure', PressureCardComponent),

    new Card("/", ["last"], "Radiação solar - Última coleta", 'last-solar-radiation', RadiationCardComponent),
    
    new Card("/", ["last"], "Pluviosidade - Última coleta", 'last-rain-rainfall', RainfallCardComponent),

    new Card("/", ["last"], "Velocidade e direção do vento- Última coleta", 'last-wind-speed-dir', SpeedDirectionCardComponent)
]