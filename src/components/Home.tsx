import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

import { Coordinate } from '../types/map';
import {useContainerDimensions} from '../hooks/useContainerDimensions';

interface Props {
    selectedLocation: any;
    setSelectedLocation: ( location: Coordinate ) => void;
}

const Home: React.FC<Props> = ({selectedLocation, setSelectedLocation }) => {
    const chartContainerRef: any = useRef( null )
    const svgRef = useRef( null );
    const [ states, setStates ] = useState<any> ()
    const [ cities, setCities ] = useState<any>( )

    const { containerWidth
        // , containerHeight 
    } = useContainerDimensions( chartContainerRef )

    // console.log('CONTAINER WIDTH: ' ,containerWidth)

    // const location = selectedLocation ? selectedLocation : cities.find( (c:Coordinate) => c.place === 'Home')

    // var width = 1200,
    var width = containerWidth,
    // var width = 650,
    // var width = 500,
    // const width = containerWidth/2,
    // height = 400;
    height = 500;


    // const handleMouseOver = ( element: any, d: any ) => {
    //     if( selectedLocation.id === d.id ) {
    //         return d3.select( element.currentTarget ).style( 'cursor', 'default' );
    //     } else {
    //         return d3.select( element.currentTarget ).style( 'cursor', 'pointer' )
    //     }
    // }

    const projection = d3.geoAlbersUsa()
        // .translate([width/2, height/2])
        .scale(1070)
        // .scale(800)
        .translate([width / 2, height / 2]);

    const path = d3.geoPath()               // path generator that will convert GeoJSON to SVG paths
        .projection(projection); 

    // Define linear scale for output
    // var color = d3.scaleLinear()
    // .range(["rgb(213,222,217)","rgb(69,173,168)","rgb(84,36,55)","rgb(217,91,67)"]);

    const svg = d3
            // .select("body")
            .select(svgRef.current)
			.append("svg")
			.attr("width", width)
            .style('fill', 'lightgrey')
            .attr('viewbox', "0 0 " + width + " " + height )

            .attr('viewBox', "0 0 700 500")
			.attr("height", height);

    svg.selectAll("path")
            // .data(json.features)
            .data(states?.features)
            .enter()
            .append("path")
            // @ts-ignore
            .attr("d", path)
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            // .style("fill", function(d) {
        
            // // Get data value
            // var value = d.properties.visited;
        
            // if (value) {
            // //If value exists…
            // // return color(value);
            // return "rgb(213,222,217)";
            // } else {
            // //If value is undefined…
            // return "rgb(213,222,217)";
            // }
    // });

    // Map the cities I've lived
    if( cities?.features && selectedLocation) {
        const { features } = cities;
        svg.selectAll("circle")
        .data(features)
        .enter()
        .append('text')
        .text((d:any) => d.place)
        .attr("x", function(d:any) {
            // @ts-ignore
            return projection([d.lon, d.lat])[0];
        })
        .attr("y", function(d:any) {
            // @ts-ignore
            return projection([d.lon, d.lat])[1];
        })
        .style("fill", ( d: any ) => d.id === selectedLocation.id ? "red" : 'black')
        // .style("opacity", (d:any) => d.place === "Home" ? 0 : 0.85)
        .style("opacity", (d:any) => d.place === "Home" ? 0 : 1)
        .style("font-size", '8px')
    }

    if( cities?.features && selectedLocation) {
        const { features } = cities;
        // console.log('SOOOOO', cities)
        svg.selectAll("circle")
        .data(features)
        .enter()
        .append('circle')
        // .append('text')
        // .text('hello')
        .attr("cx", function(d:any) {
            // @ts-ignore
            return projection([d.lon, d.lat])[0];
        })
        .attr("cy", function(d:any) {
            // @ts-ignore
            return projection([d.lon, d.lat])[1];
        })

        // .attr("r", (d:any) => d.place === "Home" ? 12 : 4 )	
        .attr("r", 3.5)	
        // .style("fill", ( d: any ) => d.place === 'Home' ? "red" : "blue")
        .style("fill", 'red')
        // .style("opacity", (d:any) => d.place === "Home" ? .4 : 0)
        .style("opacity", (d:any) => d.place === "Home" ? .8 : 0)
        

        // .on('mouseover', ( element, d ) => handleMouseOver( element, d)) 
        // .on("click", function(d) {      
        //     // console.log('PLACE: ', d.target.__data__)
        //     setSelectedLocation( d.target.__data__)
            
        // })   
        
    }


    // useEffect( () => {
        // fetch('/data/usStates.json').then( ( response ) => {
        //     response.json().then((usData) => {
        //         // console.log('US DATA: ', usData)
        //         setStates(usData)
        //     })
        // })
    // }, [])

    // useEffect( () => {
        // fetch('/data/cities.json').then( ( response ) => {
        //     response.json().then( ( citiesData) => {
        //         setCities( citiesData)
        //         // console.log('CITIES DATA: ', citiesData)
        //         setSelectedLocation( citiesData.features.find( (c:Coordinate) => c.place === 'Home') )
        //     })
        // } )
    // }, [setSelectedLocation])


    const fetchUSData = async () => {
        await fetch('/data/usStates.json').then( ( response ) => {
            response.json().then((usData) => {
                console.log('US DATA: ', usData)
                // setStates(usData)
                return usData;
            })
        })
    }

    const fetchCities = async () => {
        let res;
        await fetch('/data/cities.json').then( ( response ) => {
            response.json().then( ( citiesData) => {
                console.log('OK: ', citiesData)
                // return citiesData;
                res = citiesData;
                // setCities( citiesData)
                // console.log('CITIES DATA: ', citiesData)
                // setSelectedLocation( citiesData.features.find( (c:Coordinate) => c.place === 'Home') )
            })
        } )
        if( res ) {
            console.log('WELLL: ', res)
        return 'res';
        }
        
    }


    useEffect( () => {
        
        const fetchData = async() => {
            await fetch('/data/usStates.json').then( ( response ) => {
                response.json().then((usData) => {
                    // console.log('US DATA: ', usData)
                    setStates(usData)
                })
            })

            await fetch('/data/cities.json').then( ( response ) => {
                response.json().then( ( citiesData) => {
                    setCities( citiesData)
                    // console.log('CITIES DATA: ', citiesData)
                    setSelectedLocation( citiesData.features.find( (c:Coordinate) => c.place === 'Home') )
                })
            } )
        }

        fetchData();

    }, [setSelectedLocation])

    console.log('STATES: ', states)


    return(
        // <g>
        //     <svg width={width} height={height} viewBox="0 0 800 450">
        //         <g className="states">

        //         </g>
        //     </svg>
        // </g>
        // <div>hi</div>

        // <svg width={width} height={height} viewBox="0 0 800 450">
        //     {/* <g className="states">
        //             {
        //                 // @ts-ignore
        //                 states.map((feature: any, index: number) => <path key={index} d={path(feature)} />)
        //             }
        //     </g> */}
        // </svg>

        <>  
        {
            states
            ?

            <div 
                ref={chartContainerRef}
                // style={{ width: '50%', height: 550, border: '1px solid green'}}
                style={{border: '1px solid green', width: '100%'}}
        >
                <svg ref={svgRef}
                    // style={{width: '100%', height: 1000, border: '1px solid blue'}}
                    style={{width: '100%', height: 600, border: '1px solid blue'}}
                    // viewBox="0 0 500 500"
                >
                    
                </svg>

        </div>

            : <div>Pending</div>
        }

        </>

        
    )
}

export default Home;