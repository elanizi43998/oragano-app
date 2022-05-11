import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Organo (colored version at: logomagazin.com/organo-font)';
  src:  url('./Fonts/Organo.ttf') format('truetype'),
}
@font-face {
  font-family: 'Fontype Rounded';
  src:  url('./Fonts/fontyperounded-rgjj7.ttf') format('truetype'),
}
:root{
    --blue: #9ADCFF;
    --yellow: #FFF89A;
    --orange: #FFB2A6;
    --pink: #FF8AAE;
    --Organo: 'Organo (colored version at: logomagazin.com/organo-font)';
}
    *{
        margin: 0 ;
        padding:0 ;
    }

    body{
        font-family: 'Fontype Rounded' ;   
    }
    
`;
