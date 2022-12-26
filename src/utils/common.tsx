// types
import { Image } from '../types/projects';
import { MapLocation } from '../types/map';

// ** Nav
export const navSections: {[key: string]: string}[] = [
    { display: 'About', section: 'about'},
    { display: 'Experience', section: 'experience' },
    { display: 'Projects', section: 'projects'}
]

// ** About - Map ** //
export const mapLocations: MapLocation[] = [
    {
        id: 2,
        location: 'NYC',
        company: 'Greenwood Labs',
        title: 'Sr. Frontend Engineer'
    },
    {
        id: 3,
        location: 'Dallas, TX',
        company: 'Veryable',
        title: 'Lead Frontend Engineer'
    }
]


// ** project images

// greenwood
const gwLoans = require('../assets/images/greenwood/greenwood-loans.png');
const gwChart = require('../assets/images/greenwood/greenwood-chart.png');
const gwBorrow = require('../assets/images/greenwood/greenwood-borrow.png');



//restay
const restaySplash = require('../assets/images/restay/splash.png');
const restayProperties = require('../assets/images/restay/properties.png');
const restayLoft = require('../assets/images/restay/property.png');
const restayDetails = require('../assets/images/restay/property2.png');

export const greenwoodImages: Image[] = [
    { id: 1, src: gwLoans},
    // { id: 1, src: '../../'},
    { id: 2, src: gwChart},
    {id: 3, src: gwBorrow}
]

export const restayImages: Image[] = [
    {id: 1, src: restaySplash},
    {id: 2, src: restayProperties},
    {id: 3, src: restayLoft},
    {id: 4, src: restayDetails}
]