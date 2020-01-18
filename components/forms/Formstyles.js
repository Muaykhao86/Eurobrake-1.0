import styled from 'styled-components';
import { Form } from 'formik';


export const StyledForm = styled(Form)`
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
 
     /* .MuiInput-underline:before {
                    border-bottom: none;
                }    */

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
   
   
        .form{

        &-secondary{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        min-width: 100%;
        }

          &-radio{
            margin: 2rem 0;
            align-self: flex-end;
            text-align: end;
           
        }
        

              
        &-field{
            position: relative;
            margin: 2rem 0;
            width: 100%;
            display: flex;
            font-family: ${props => props.theme.MPLight};
            justify-content: space-between;

            &-radio{
                position: relative;
                width: 100%;
               display: flex;
               flex-flow: column;
               margin: 1rem 0;
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

       &-notes{
            font-family: ${props => props.theme.MPLight};
        position: relative;
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

        &-checkboxField{
            position: relative;
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
            
            &-box{
                align-self: flex-end;
            }
        }
            
        &-field{
            margin: 1rem 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            &_question{
                margin: 1rem 0;
                display: flex;
                flex-flow: column;
            }

            &_file{
                display: flex;
                flex-flow: column; 

            &-box{
                width: 100%;
                margin: 2rem;
                display: flex;
                justify-content: space-between;
                .MuiInput-underline:before {
                    border-bottom: none;
                }
            }
            }

            &_action{
                align-self: flex-end;
                 display: flex;
                justify-content: flex-end;
                align-items: flex-end;
            }
        }
        &-label{
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
            
            &_question{
                width: 66.66%;
                align-self: flex-end;
                margin: 1rem 0;
            }

            &&_file{
                width: 100%;
                 font-family: ${props => props.theme.MPBoldIt};
                 font-size: 2rem;
                color: ${props => props.theme.primary};

                .MuiInput-underline:before {
                    border-bottom: none;
                }
            }
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
       
        &-title{
        color: ${props => props.theme.primary};
        font-family: ${props => props.theme.MPSemibold};
        font-size: 3rem;
        align-self: flex-start;
        margin: 2rem 0;
    }
        }
    `;