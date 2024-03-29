import styled from 'styled-components';
import { Form } from 'formik';


export const StyledForm = styled(Form)`
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        min-width: 100%;

    
 
     .MuiInput-underline:before {
               color: ${props => props.theme.primary};
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
   
   
        .form{
            display: flex;

        &-secondary{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        min-width: 100%;
        }

        &-radio{
            align-self: flex-start;
            
           
        }
      
        &-field{
            position: relative;
            margin: 1rem 0;
            width: 100%;
            display: flex;
            font-family: ${props => props.theme.MPLight};
            justify-content: space-between;
            align-items: flex-end;

            &-news{
                .MuiInputBase-input {
                    padding: 0;
                    margin: 0;
                }
                .MuiInput-underline:before {
                border-bottom: 1px solid rgba(255, 255, 255, 1);
                }
            }

            &_action{
                position: absolute;
                /* border: 3px solid ${props => props.theme.primary}; */
                display: flex;
                align-self: flex-end;
                justify-content: flex-end;
                right: 0rem;
                width: 40rem;
                top: -10rem;
            }

            &_question{
                position: relative;
                width: 100%;
                margin: 1rem 0;
                display: flex;
              
              /* MenuItem{
                  font-size: 1.5rem;
              }
            .MuiPopover-paper {
            max-width: 100%;
            }

                .MuiMenu-paper {
                    max-height: fit-content;
                    -webkit-overflow-scrolling: touch;
                } */

                &-check{
                    position: relative;
                width: 100%;
                margin: 1rem 0;
                display: flex;
                flex-flow: column;
                }
            }

            &_file{
                width: 100%;
                display: flex;
                flex-flow: column; 

            &-box{
                    position: relative;
                width: 100%;
                margin: 4rem 0;
                display: flex;
                justify-content: space-between;
                .MuiInput-underline:before {
                    border-bottom: none;
                    }
                }
            }

        &-radio{
                position: relative;
                width: 100%;
               display: flex;
               margin: 1rem 0;
            }

            &-copy{
                width: 100%;
                display: flex;
                flex-flow: column;
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
            font-size: 2rem;
            color: ${props => props.theme.primary};
            }

            &-input{
            margin-top: 2rem ;
            margin-bottom: 4rem ;
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
            font-size: 2rem;
            color: ${props => props.theme.primary};
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 1rem 0;
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
            
       
        &-label{
            align-self: flex-start;
            min-width: 33.3%;
            font-family: ${props => props.theme.MPLight};
            font-size: 2rem;
            color: ${props => props.theme.primary};

            &-radio{
                max-width: 33.33%;
                align-self: flex-start;
                 font-family: ${props => props.theme.MPLight};
            font-size: 2rem;
            color: ${props => props.theme.primary};
            }
            &_question{
                max-width: 33.33%;
                align-self: flex-start;
                 font-family: ${props => props.theme.MPLight};
            font-size: 2rem;
            color: ${props => props.theme.primary};
            }

            &-news{
            }
        }

        &-input{
            align-self: flex-end;
            width: 66.6%;
            font-family: ${props => props.theme.MPBoldIt};
            font-size: 2rem;
            color: ${props => props.theme.primary};
            
            &_question{
                width: 66.66%;
                align-self: flex-end;
                margin: 4rem 0;
            }

            &-news{
                margin:0 2rem ;
            }

            &_file{
            
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