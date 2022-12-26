export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

/**
 * When using breakpoints, they should always be used in line with css media queries.
 * 
 * This means that they should only be checked using one of the following:
 *   width > breakpoint
 *   width <= breakpoint
 */
 export const breakpoints = {
    'xs': 0,
    'sm': 576,
    'md': 768,
    'lg': 992,
    'xl': 1200,
    'xxl': 1400
}

export const getActiveBreakpoint = ( width: number ): Breakpoint => {
    if ( width > breakpoints.xxl ) return 'xxl';
    if ( width > breakpoints.xl ) return 'xl';
    if ( width > breakpoints.lg ) return 'lg';
    if ( width > breakpoints.md ) return 'md';
    if ( width > breakpoints.sm ) return 'sm'

    return 'xs'
}

export function isBelowBreakpoint(breakpoint: Breakpoint, windowWidth: number) {
    return windowWidth <= breakpoints[breakpoint]
}

export function isAboveBreakpoint(breakpoint: Breakpoint, windowWidth: number) {
    return windowWidth > breakpoints[breakpoint]
}