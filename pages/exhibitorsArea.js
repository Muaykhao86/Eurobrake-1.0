import React from 'react'
import FormBuilder from '../components/FormBuilder';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';


const DemoDiv = styled.form`

    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 10rem;
    max-width: ${props => props.theme.maxWidth};

`;


const Demo = styled.h1`
    padding: 10rem;
    margin: 5rem;
    color: orangered;

`;

export default class ExhibitorsArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
        }
    }

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async (e) => {
        e.preventDefault()
        console.log('click');
        const formData = {
            username: this.state.username,
            password: this.state.password,

        }

        // let res = await fetch('https://prelude.eurobrake.net/login', {
        //         method: 'POST',
        //         credentials: 'include',
        //         body: JSON.stringify(formData)
        //     });
        // const data = await res.json().catch(error => console.log(error));
        // console.log(data);
        // return {
        //     loggedIn: data 
        //     }
    }



    render() {
        console.log(this.props)
        const {loggedIn} = this.state;
        const { form } = this.props.form;
        return (
                <DemoDiv>

            { loggedIn ?
                   (<DemoDiv>
                        <h1>You are logged in!!!!</h1>
                    </DemoDiv> 
                    )
                    :
                    (
                    <DemoDiv onSubmit={this.onSubmit}>
                        <div className="">
                            <label htmlFor="label">{form[0].label}</label>
                            <input type="text" name={form[0].name} onChange={this.saveToState} value={this.state.username} />
                        </div>
                        <div className="">
                            <label htmlFor="label">{form[1].label}</label>
                            <input type="password" name={form[1].name} onChange={this.saveToState} value={this.state.password} />
                        </div>
                        <input type="submit" value="Submit" />
                    </DemoDiv>
                    )
            }
                </DemoDiv>
            )
        
    }
}

// action="//2019.eurobrake.net/exhibition/exhibitors/login" SHOULD BE LOGIN FORM FOR EXHIBITORS
ExhibitorsLogin.getInitialProps = async function () {

            let res = await fetch('https://prelude.eurobrake.net/login');
            const data = await res.json().catch(error => console.log(error));;
            return {
                form: data
            };
          
};