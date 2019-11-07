import React, { Component } from 'react'
import styled from 'styled-components';


const DemoDiv = styled.div`
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



export default class login extends Component {
    static getInitialProps = async function (ctx) {
        console.log(ctx)
        const res = await fetch('https://prelude.eurobrake.net/dashboard');
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
        
    const {authorLogin, uesername, password, error} = this.state;
    const apiUrl = authorLogin ? 'https://prelude.eurobrake.net/login' : '' ;
// action="//2019.eurobrake.net/exhibition/exhibitors/login" SHOULD BE LOGIN FORM FOR EXHIBITORS
        
        console.log('click');
        const formData = {
            username: username,
            password: password,
            
        }
    try{

        const response = await fetch(apiUrl, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(formData)
            });

        if(response.ok) {
        const data = await response.json()
        return {
            loggedIn: data
            }
    }else{
        console.log('login failed')
        let error = new Error(response.statusText)
        error.response = response
        return Promise.reject(error)
        }
    }catch (error){
        console.error(
            'Failed to login, please try again', error
            )
        throw new Error(error)
    }

}


render(){
  console.log(this.props)
    const {form} = this.props.form;
        return (
         <DemoDiv onSubmit={this.onSubmit}>
            <div className="">
                <label htmlFor="label">{form[0].label}</label>
                <input type="text" name={form[0].name} onChange={this.saveToState} value={this.state.username}/>
            </div>
            <div className="">    
                <label htmlFor="label">{form[1].label}</label>
                <input type="password" name={form[1].name} onChange={this.saveToState} value={this.state.password}/>
            </div>
            <input type="submit" value="Submit"/>
        </DemoDiv>
        )
    }
}



// !!! NOTE IF I GO TO '/' IT GETS RID OF THE LOGGED IN COOKIE !!!