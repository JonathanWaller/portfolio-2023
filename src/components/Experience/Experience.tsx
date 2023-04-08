
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
            <div style={{width: '60%'}}>
            <Home 
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
            />
            </div>

            {/* {
                mapLocations.map((loc: any ) => (
                    <div key={loc.id}>{loc.location}</div>
                ))
            } */}

            <LocationContainer>
                {
                    selectedLocation
                    ?
                    <>
                    <h2>{ selectedLocation?.place}</h2>
                    <div>
                        {/* { locationDetails( selectedLocation?.id)} */}
                        {
                            selectedLocation.place === 'New York City'
                            ?
                            <>
                                <div>My current location</div>
                                <div>
                                    I'm currently based out of NYC (Brooklyn), where I work for a Web3 tech startup, 
                                    providing architectural direction on a variety of products. 
                                </div>
                            </>
                            : selectedLocation.place === 'Hometown'
                            ?
                            <>
                                <div>My hometown</div>
                                <div>
                                    I'm born and raised in southern Illinois, about an hour southeast of St. Louis, MO. Go Cardinals!
                                </div>
                            </>
                            :
                            <>
                                <div>Previous Location</div>
                                <div>
                                    Prior to moving to NYC, I lived in Dallas, TX for about 5 years. While in Dallas, I began my software 
                                    development career before evolving int a Team Lead. 
                                </div>
                            </>
                        }

                    </div>
                    </>
                    : null
                }
                
            </LocationContainer>
            

        </Container>
        </>
    )
}

export default Experience;