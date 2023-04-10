// types
import { Image, Project, ProjectImage } from '../types/projects';
import { MapLocation } from '../types/map';

// ** Nav
export const navSections: {[key: string]: string}[] = [
    { display: 'About', section: 'about'},
    // { display: 'Experience', section: 'experience' },
    // { display: ''}
    { display: 'Projects', section: 'projects'},
    {display: 'Contact', section: 'contact'}
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
// const gwLoans = require('../assets/images/greenwood/greenwood-loans.png');
// const gwChart = require('../assets/images/greenwood/greenwood-chart.png');
// const gwBorrow = require('../assets/images/greenwood/greenwood-borrow.png');

const gwFeature1 = require('../assets/images/greenwood/gw-feature-1.png')
const gwFeature2 = require('../assets/images/greenwood/gw-feature-2.png')
const gwFeature3 = require('../assets/images/greenwood/gw-feature-3.png')

// beaker
const beak1 = require('../assets/images/greenwood/beak-1.png')
const beak2 = require('../assets/images/greenwood/beak-2.png')
const beak3 = require('../assets/images/greenwood/beak-3.png')
const beak4 = require('../assets/images/greenwood/beak-4.png')
const beak5 = require('../assets/images/greenwood/beak-5.png')

//restay
const restaySplash = require('../assets/images/restay/splash.png');
const restayProperties = require('../assets/images/restay/properties.png');
const restayLoft = require('../assets/images/restay/property.png');
const restayDetails = require('../assets/images/restay/property2.png');

// running 
const runningAll = require('../assets/images/running/running-all.png');
const runningYear = require('../assets/images/running/running-year.png');
const runningViz = require('../assets/images/running/running-viz.gif');

// export const greenwoodImages: Image[] = [
//     { id: 1, src: gwLoans},
//     // { id: 1, src: '../../'},
//     { id: 2, src: gwChart},
//     {id: 3, src: gwBorrow}
// ]

export const greenwoodImages: Image[] = [
    { id: 1, src: gwFeature2},
    { id: 2, src: gwFeature3},
    {id: 3, src: gwFeature1}
]

export const restayImages: Image[] = [
    {id: 1, src: restaySplash},
    {id: 2, src: restayProperties},
    {id: 3, src: restayLoft},
    {id: 4, src: restayDetails}
]

export const beakImages: Image[] = [
    {id: 1, src: beak1},
    {id: 2, src: beak2},
    {id: 3, src: beak3},
    {id: 4, src: beak4},
    {id: 5, src: beak5}
]

export const runningImages: any[] = [
    {id: 1, src: runningViz},
    {id: 2, src: runningAll},
    {id: 3, src: runningYear},
    
]

export const projects: Project[] = [
    {
        textId: "feature-1",
        url: "https://github.com/greenwood-labs/kovan-greenwood-v2-interface",
        name: 'Greenwood',
        header: 'Web3 Support Tool',
        description: 'Customer support plaform helping Web3 teams automate and resolve support requests at scale'
    },
    {
        textId: "feature-2",
        url: "https://github.com/JonathanWaller/Personal_Project-Rentals",
        name: 'Restay',
        header: 'Welcome home',
        description: 'airbnb-like resource to book short-term rentals'
    },
    {
        textId: "feature-3",
        url: "https://observablehq.com/d/2aaf47675945b9c2",
        name: 'Running',
        header: 'Visualizing my runs',
        description: 'D3.js visualization displaying my run data over the past several years'
    },
    // {
    //     textId: "feature-4",
    //     url: "https://observablehq.com/d/2aaf47675945b9c2",
    //     name: 'Have peace of mind',
    //     header: 'If you have a problem, we find a solution',
    //     description: 'Greenwood works directly with DeFi protocol teams to quickly and effectively resolve any technical problems you experience.'
    // }
]

export const projectImagesDesktop: ProjectImage[] = [
    {
        id: '1',
        name: 'greenwood',
        imgSrc: greenwoodImages,
        altName: 'Greenwood Labs',
    },
    {
        id: '2',
        name: 'restay',
        imgSrc: restayImages,
        altName: 'restay img',
    },
    {
        id: '3',
        name: 'running',
        imgSrc: runningImages,
        altName: 'running img',
    }
]

export const projectImagesMobile = [
    {
        id: '1',
        imgSrc: greenwoodImages[0].src,
        altName: 'Greenwood Labs'
    },
    {
        id: '2',
        imgSrc: restayImages[0].src,
        altName: 'restay img'
    },
    {
        id: '3',
        imgSrc: runningImages[0].src,
        altName: 'running img'
    }
]

export const projectMobile = projects.reduce( (acc:any,curr: Project,ind: number) => [...acc, {...curr, ...projectImagesMobile[ind]}] , [])