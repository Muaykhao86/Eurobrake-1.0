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

export default class AuthorsLogin extends React.Component {
constructor(props) {
    super(props);
    this.state={
        username: '',
        password: '',
    }
}

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async (e) =>{
        e.preventDefault()
        const formData = {
            username: this.state.username,
            password: this.state.password
        }
        
        const res = await fetch('https://prelude.eurobrake.net/login', {
                method: 'POST',
                body: JSON.stringify(formData)
            });
        const data = await res.json().catch(error => console.log(error));
        return {
            loggedIn: data
            }
    }



render(){
    console.log(this.props)
    const {form} = this.props.form;
    return(
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


  AuthorsLogin.getInitialProps = async function (){
  const res = await fetch('https://prelude.eurobrake.net/login');
  const data = await res.json().catch(error => console.log(error));;
   return {
   form: data
  };
  };