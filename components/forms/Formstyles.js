import styled from 'styled-components';
import { Form, } from 'formik';


export const StyledForm = styled(Form)`
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        min-width: 100%;

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
    input:-internal-autofill-selected {

    }
        .form{

        &-secondary{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        min-width: 100%;
        }
            
        &-field{
            margin: 1rem 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        &-label{
            font-family: ${props => props.theme.MPLight};
            font-size: 2.6rem;
            color: ${props => props.theme.primary};
        }
        &-input{
            min-width: 40rem;
            font-family: ${props => props.theme.MPBoldIt};
            font-size: 2rem;
            color: ${props => props.theme.primary};
        }
        &-link{
            font-family: ${props => props.theme.MPBoldIt};
            font-size: 1.7rem;
            color: ${props => props.theme.primary};
        }
        &-radio{
            text-align: end;
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