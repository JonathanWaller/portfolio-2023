

import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
// import { geoPath, geoOrthographic } from 'd3-geo'
// import * as topojson from 'topojson';

interface Props {
    selectedLocation: number;
}

const Home: React.FC<Props> = ({selectedLocation}) => {
    const chartContainerRef: any = useRef( null )
    const svgRef = useRef( null );
    const [ states, setStates ] = useState<any> ()
    const [ cities, setCities ] = useState<any>( )

    var width = 960,
    height = 500;

    const projection = d3.geoAlbersUsa()
        .translate([width/2, height/2])
        .scale(1070)
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
    if( cities?.features) {
        const { features } = cities;
        console.log('SOOOOO', cities)
        svg.selectAll("circle")
        .data(features)
        .enter()
        .append('circle')
        .attr("cx", function(d:any) {
            console.log('LONGITUDE: ', d)
            // @ts-ignore
            return projection([d.lon, d.lat])[0];
        })
        .attr("cy", function(d:any) {
            // @ts-ignore
            return projection([d.lon, d.lat])[1];
        })
        .attr("r", (d:any) => d.place === "Home" ? 12 : 4 )	
        // .style("fill", ( d: any ) => d.place === 'Home' ? "red" : "blue")
        .style("fill", ( d: any ) => d.place === 'Home' ? "red" : d.id === selectedLocation ? 'green' : 'blue')
        .style("opacity", (d:any) => d.place === "Home" ? .4 : 0.85)
        

        // .on("mouseover", function(d) {      
        //     console.log('PLACE: ', d) 
        // })   
        .on("click", function(d) {      
            console.log('PLACE: ', d.target.__data__
            ) 
        })   
        
    }
    
    


    useEffect( () => {
        fetch('/data/usStates.json').then( ( response ) => {
            response.json().then((usData) => {
                console.log('US DATA: ', usData)
                setStates(usData)
            })
        })
    }, [])

    useEffect( () => {
        fetch('/data/cities.json').then( ( response ) => {
            response.json().then( ( citiesData) => {
                setCities( citiesData)
            })
        } )
    }, [])

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

        <div 
            ref={chartContainerRef}
            style={{ width: '100%', height: 550}}
        >

            <div>
                <svg ref={svgRef}
                    style={{width: '100%', height: 1000}}
                >
                    
                </svg>
            </div>

        </div>
    )
}

export default Home;