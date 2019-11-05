import styled from 'styled-components';

export const Button = styled.button`
&,
&:link, 
&:visited{
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 2.1rem;
    color: ${props => 
    props.color || 
    props.theme.white};
    background: ${props => 
    props.background || 
    'transparent'};
    border: 1px solid ${props => props.color 
    ||props.theme.white};
    border-radius: ${props => props.br ||
    '0'};
    font-family: ${props => props.theme.MPBold};
    letter-spacing: 0;
    padding: ${props => props.padding ||
     '1.5rem 4rem' } ;
    transition: all .2s;
    cursor: pointer;
}

&:hover{
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
    color: #FFF;
    background-color: #12377D;
    transform: translateY(-.3rem);
}

&::after{
    transform: scalex(1.4) scaleY(1.6);
     opacity: 0;
        }
    
/* TAKEN OUT FOCUS BECAUSE CHROME DOESNT LIKE IT...SEE IF IT CAUSES AGRO OR NOT */
/* put it back in as was causing outline so just seperated it from translate up! */
&:focus{
        outline: none;
    }

&:active{
        outline: none; 
        transform: translateY(-.1rem);
        box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.5);
    }
    


`;