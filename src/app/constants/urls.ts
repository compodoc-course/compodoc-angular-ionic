import { environment } from '../../environments/environment';

export const URL_LOCALHOST = environment.url;

// http://ergast.com/api/f1/drivers/alonso
export const DRIVERS_URLS = {
    ALL_DRIVERS_SELECT: '/drivers.json',
    SELECT_DRIVER_BEFORE_ID: 'drivers/',
    ONE_TIME_WORLD_CHAMPION_F1: 'driverStandings/1/drivers.json?limit=100',
    LAST_GRAND_PRIX_RESULTS: 'current/last/results.json',
    SELECT_DRIVER_ALL_RESULTS: '/results.json?limit=1000'
};

export const SEASONS_URLS = {
    ALL_SEASONS_URL: 'seasons.json?limit=100'
};

export const CIRCUITS_URLS = {
    ALL_HISTORY: 'circuits.json?limit=100',
    SELECT: '/circuits.json'
};

export const CONSTRUCTORS_URLS = {
    ALL_HISTORY: 'constructors.json?limit=1000',
    CURRENT_YEAR: 'current/constructors.json',
    SELECT_YEAR: '/constructors.json'
};

export const STATUS_URLS = {
    ALL_HISTORY: 'status.json?limit=1000',
    SELECT_YEAR: '/status.json'
};
