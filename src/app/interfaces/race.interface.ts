import { Circuit } from './circuit.interface';

export interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
}
