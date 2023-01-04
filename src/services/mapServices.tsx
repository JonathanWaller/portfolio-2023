export const locationDetails = ( locationId: number ) => {

    switch( locationId ) {
        case 1:
            return "I'm currently based out of NYC (Brooklyn), where I work for a DeFi/crypto startup called Greenwood Labs."
        case 2: 
            return '2'
        case 3: 
            return "Before moving to NYC, I lived in Dallas, TX for ~5 years. While in Dallas, I began my first software development job, which evolved over time to a lead engineer position."
        case 4: 
            return "I'm born and raised in southern Illinois, about an hour southeast of St. Louis, MO. Go Cardinals!"
        default:
            return "I'm currently based out of NYC (Brooklyn), where I work for a DeFi/crypto startup called Greenwood Labs"
    }
}