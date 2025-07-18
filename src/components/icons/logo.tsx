import type { ComponentProps } from 'react';

const Logo: React.FC<ComponentProps<'svg'>> = (props) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            fill='none'
            viewBox='0 0 512 512'
            {...props}
        >
            <rect
                id='r4'
                width='512'
                height='512'
                x='0'
                y='0'
                fill='url(#r5)'
                stroke='#FFF'
                strokeOpacity='100%'
                strokeWidth='0'
                paintOrder='stroke'
                rx='128'
            ></rect>
            <clipPath>
                <use xlinkHref='#r4'></use>
            </clipPath>
            <defs>
                <linearGradient
                    id='r5'
                    gradientTransform='rotate(45)'
                    gradientUnits='userSpaceOnUse'
                    style={{
                        WebkitTransformOrigin: 'center center',
                        transformOrigin: 'center center'
                    }}
                >
                    <stop stopColor='#1F1F1F'></stop>
                    <stop offset='1'></stop>
                </linearGradient>
                <radialGradient
                    cx='0'
                    cy='0'
                    r='1'
                    gradientTransform='matrix(0 512 -512 0 256 0)'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#fff'></stop>
                    <stop offset='1' stopColor='#fff' stopOpacity='0'></stop>
                </radialGradient>
            </defs>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='320'
                height='320'
                x='96'
                y='96'
                viewBox='0 0 512 512'
                fill='none'
                className='text-white'
            >
                <g>
                    <path
                        style={{
                            display: 'inline',
                            fillRule: 'evenodd',
                            clipRule: 'evenodd'
                        }}
                        d='M309.215,304.749 c30.414,57.874,62.227,114.961,94.801,173.782c4.402,7.997,11.826,19.137,8.67,26.073c-4.242,9.332-25.275,5.539-41.855,5.539 c-19.523,0-36.902,3.53-49.764-0.799c-13.125-4.416-25.002-36.989-31.6-48.979c-27.934-50.773-57.736-105.254-85.319-154.831 c47.294-86.353,103.108-180.979,152.448-270.165c7.572-13.661,13.748-33.771,31.613-34.769C396.68,0.14,413.596,1.4,430.875,1.4 c14.32,0,36.428-2.108,40.295,3.941c6.6,10.367-10.842,30.466-15.807,39.51C407.158,132.44,356.971,217.997,309.215,304.749z M125.953,357.67c15.657-1.908,23.653-23.777,30.789-36.341c22.631-39.746,45.697-80.715,66.369-117.705 c-12.774-23.728-29.766-51.385-44.249-76.624c-6.25-10.891-10.979-25.087-25.263-25.275c-25.275,0-50.575,0-75.85,0 c-4.129,0.586-7.846,1.635-8.682,5.527c-2.046,12.438,5.625,19.486,9.48,26.073c8.97,15.407,17.978,29.866,27.646,46.608 c3.094,5.327,12.874,18.938,12.625,24.489c-0.15,3.718-7.598,12.638-10.254,17.378c-21.607,38.586-39.334,70.735-60.83,109.009 c-3.194,5.689-10.267,12.301-7.896,20.534c1.023,3.605,6.749,6.637,9.469,6.325C74.853,357.67,100.403,357.67,125.953,357.67z'
                        fill='currentColor'
                    />
                </g>
            </svg>
        </svg>
    );
};

export default Logo;
