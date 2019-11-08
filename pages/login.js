import React, { Component } from 'react'
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { login } from '../utils/auth';



const DemoDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-self: center; 
    max-width: ${props => props.theme.maxWidth};
`;


const Demo = styled.h1`
    padding: 10rem;
    margin: 5rem;
    color: orangered;

`;



export default class Login extends Component {
    static getInitialProps = async function () {
        const res = await fetch('https://prelude.eurobrake.net/login');
        const data = await res.json().catch(error => console.log(error));;
        return {
            form: data
        };
    };

   
constructor(props) {
    super(props);
    this.state={
        username: '',
        password: '',
        authorLogin: true,
        error: ''
    }
}

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
   

    onSubmit = async (e) =>{
    e.preventDefault()
    console.log('click');
        
    const {authorLogin, username, password, error} = this.state;
    // const apiUrl = authorLogin ? 'https://prelude.eurobrake.net/login' : '' ;
// action="//2019.eurobrake.net/exhibition/exhibitors/login" SHOULD BE LOGIN FORM FOR EXHIBITORS
        const formData = {
            username: username,
            password: password,
        }

    
    try{
        const response = await fetch('https://prelude.eurobrake.net/login', {
                method: 'POST',
                body: JSON.stringify(formData)
            });
        const data = await response.json();

       console.log({data})
        
        if(data.status === 'success') {           
        const {logintoken} = await data;
        console.log({logintoken})
        await login({logintoken})
    }else{
        console.log('login failed')
        let error = new Error(data.statusText)
        error.response = response
       throw error
        }
    }catch (error){
        console.error(
            'Failed to login, please try again', error
            )
       this.setState({error: error.message});
    }

}


render(){
  console.log(this.props)
    const {form} = this.props.form;
        return (
         <DemoDiv onSubmit={this.onSubmit}>
            <Demo>

            <div className="">
                <label htmlFor="label">{form[0].label}</label>
                <input type="text" name={form[0].name} onChange={this.saveToState} value={this.state.username}/>
            </div>
            <div className="">    
                <label htmlFor="label">{form[1].label}</label>
                <input type="password" name={form[1].name} onChange={this.saveToState} value={this.state.password}/>
            </div>
            </Demo>
            <input type="submit" value="Submit"/>
        </DemoDiv>
        )
    }
}



// !!! NOTE IF I GO TO '/' IT GETS RID OF THE LOGGED IN COOKIE !!!