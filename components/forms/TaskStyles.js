import styled from 'styled-components';
import { Form } from 'formik';


export const StyledTask = styled(Form)`
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        min-width: 100%;

     
     a{
            cursor: pointer;
            font-family: ${props => props.theme.MPBold};
            color: ${props => props.theme.primary};
        }
     .MuiInput-underline:before {
                    border-bottom: none;
                }   

    .MuiInput-underline:after {
        color: ${props => props.theme.primary};
    }

    .MuiFormHelperText-root {
        font-size: 1.5rem;
    }

    .MuiInputBase-root {
        font-family: ${props => props.theme.MPBoldIt};
            font-size: 2rem;
            color: ${props => props.theme.primary};
    }
   
        .task{
             color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPLight};
        font-size: 2rem;

        
         
         &-radio{
            /* text-align: end; */
            align-self: flex-start;
           
        }

        &-notes{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        min-width: 100%;

        &-label{
            min-width: 100%;
            font-family: ${props => props.theme.MPLight};
            font-size: 2.6rem;
            color: ${props => props.theme.primary};
        
        
        
        }
        &-input{
            margin: 2rem 0;
            min-width: 100%;
            min-height: 15rem;
            font-family: ${props => props.theme.MPBoldIt};
            font-size: 2rem;
            color: ${props => props.theme.primary};

        }
        }
            
        &-field{
            margin: 2rem 0;
            width: 100%;
            display: flex;
            justify-content: space-between;

            &-radio{
                width: 100%;
               display: flex;
               flex-flow: column;
            }

            &-copy{
                width: 100%;
                display: flex;
                flex-flow: column;
            }  
            &_action{
                align-self: flex-end;
                 display: flex;
                justify-content: flex-end;
                align-items: flex-end;
            }
        }

      

        &-checkboxField{
            min-width: 100%;
            font-family: ${props => props.theme.MPLight};
            font-size: 2.6rem;
            color: ${props => props.theme.primary};
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 2rem 0;


            .MuiIconButton-colorSecondary:hover {
                background-color: transparent;
            }
           

            .MuiSvgIcon-root {
            font-size: 4rem;
            }
            &-label{
            }
            &-box{
                align-self: flex-end;
            }
        }
        &-label{
            align-self: flex-start;
            min-width: 33.3%;
            font-family: ${props => props.theme.MPLight};
            font-size: 2.6rem;
            color: ${props => props.theme.primary};
        }
        &-input{
            min-width: 66.6%;
            font-family: ${props => props.theme.MPBoldIt};
            font-size: 2rem;
            color: ${props => props.theme.primary};
        }

        &-link{
            cursor: pointer;
            font-family: ${props => props.theme.MPBoldIt};
            font-size: 1.7rem;
            color: ${props => props.theme.primary};
        }

         &-link_bold{
            cursor: pointer;
            font-family: ${props => props.theme.MPBold};
            color: ${props => props.theme.primary};
        }
         &_bold{
            font-family: ${props => props.theme.MPBold};
            color: ${props => props.theme.primary};
        }
      
       
        &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 3rem;
        align-self: flex-start;
        margin: 2rem 0;
        }
        }
    `;