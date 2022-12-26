import { breakpoints } from "./breakpoints"


export const sectionMargins = `
    padding-left: 150px;
    padding-right: 150px;

    @media (max-width: ${breakpoints.xl}px) {
        padding-left: 100px;
        padding-right: 100px;
    }

    @media (max-width: ${breakpoints.lg}px) {
        padding-left: 75px;
        padding-right: 75px;
    }

    @media (max-width: ${breakpoints.md}px) {
        padding-left: 50px;
        padding-right: 50px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`