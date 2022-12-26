
import { useState } from "react";
import styled from "styled-components";

import Home from "../Home";

import { mapLocations } from "../../utils/common";

const Container = styled.div`
    // height: 500px;
    height: 100%;
`

interface Props {
    viewRef: any;
}

const Experience: React.FC<Props> = ({viewRef}) => {
    const [selectedLocation, setSelectedLocation] = useState<number>(2)

    return(
        <Container ref={viewRef} >
            <Home 
                selectedLocation={selectedLocation}
            />

            {
                mapLocations.map((loc: any ) => (
                    <div key={loc.id}>{loc.location}</div>
                ))
            }

        </Container>
    )
}

export default Experience;