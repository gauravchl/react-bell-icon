import React from 'react';

function ReactBellIcon(props) {

  let { width, height } = props;


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <svg width='140' height='140' viewBox='0 0 20 20' >
          <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='bell' transform='translate(-2.000000, -2.000000)'>
                <path d='M19.97,10.5 L21.97,10.5 C21.82,7.3 20.24,4.48 17.85,2.65 L16.43,4.08 C18.45,5.53 19.82,7.85 19.97,10.5 Z' id='Path' fill='#000000'></path>
                <path d='M7.58,4.08 L6.15,2.65 C3.75,4.48 2.17,7.3 2.03,10.5 L4.03,10.5 C4.18,7.85 5.54,5.53 7.58,4.08 L7.58,4.08 Z' id='Path' fill='#000000'></path>
                <path d='M12,22 C12.14,22 12.27,21.99 12.4,21.96 C13.05,21.82 13.58,21.38 13.84,20.78 C13.94,20.54 13.99,20.28 13.99,20 L9.99,20 C10,21.1 10.89,22 12,22 Z' id='Path' fill='#000000'></path>
                <path d='M18,11 C18,7.93 16.36,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C7.63,5.36 6,7.92 6,11 L6,16 L4,18 L4,19 L20,19 L20,18 L18,16 L18,11 Z' id='Shape' fill='#000000' fillRule='nonzero'></path>
                <polygon id='Shape' points='0 0 24 0 24 24 0 24'></polygon>
              </g>
          </g>
      </svg>
    </div>
  )
}


export default ReactBellIcon;
