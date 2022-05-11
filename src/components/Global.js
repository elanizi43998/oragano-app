import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
