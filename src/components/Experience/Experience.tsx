
import { useState } from "react";
import styled from "styled-components";

import Heading from "../shared/Heading";
import Home from "../Home";

import { mapLocations } from "../../utils/common";
import { locationDetails } from "../../services/mapServices";

import { Coordinate } from "../../types/map";

const Container = styled.div`
    // height: 500px;
    width: 100%;
    height: 100%;
    display: flex;

    border: 1px solid pink;

`

const LocationContainer = styled.div`
    border: 1px solid green;
    width: 50%;
`

interface Props {
    viewRef: any;
}

const Experience: React.FC<Props> = ({viewRef}) => {
    const [selectedLocation, setSelectedLocation] = useState<Coordinate>()

    console.log('SELECTED LOCATION: ', selectedLocation)

    return(
        <>
        <Heading headingText="About me" />
        <Container ref={viewRef} >
            {/* <div style={{width: '50%'}}> */}
            <Home 
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
            />
            {/* </div> */}

            {/* {
                mapLocations.map((loc: any ) => (
                    <div key={loc.id}>{loc.location}</div>
                ))
            } */}

            {/* <LocationContainer>
                {
                    selectedLocation
                    ?
                    <>
                    <h2>{ selectedLocation?.place}</h2>
                    <div>
                        { locationDetails( selectedLocation?.id)}
                    </div>
                    </>
                    : null
                }
                
            </LocationContainer> */}
            

        </Container>
        </>
    )
}

export default Experience;