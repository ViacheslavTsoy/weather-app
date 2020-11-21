export const theme = {
    colors: {
        white: '#fff',
        blue: '#00C3FF',
        red: '#FF001A',
        gray: '#9f9f9f',
        curiousBlue: '#2E9CDB',
        bunting: '#131C44',
    },
    breakPoints: {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '968px',
        laptopL: '1440px',
        desktop: '2560px',
    },
    up: (breakpoint: string, vertical = false) =>
        `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpoint} + 0.02px))`,
    down: (breakpoint: string, vertical = false) =>
        `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,

    between: (breakpointMin: string, breakpointMax: string, vertical = false) =>
        `@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}) and (min-${
            vertical ? 'height' : 'width'
            }: calc(${breakpointMin} + 0.02px))`,
};
