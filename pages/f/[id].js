
import React, { Component } from 'react'
import cookies from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import { LoginForm } from '../../components/forms/LoginForm';
import { AbstractForm } from '../../components/forms/Abstract';
import { Authorprofile } from '../../components/forms/Authorprofile';
import { Exhibitorprofile } from '../../components/forms/Exhibitorprofile';
// import { Esop } from './Esop';
// import { GetFormSSR } from '../../components/forms/FormActions';


const Form = props => {
    const { presets } = props.data;
    return <AbstractForm editPaper="true" presets={presets} />;
}

export default Form

Form.getInitialProps = async context => {
    const { id } = context.query;
    const { logintoken } = cookies(context) || {};
    const apiUrl = `https://prelude.eurobrake.net/edit/${id}`;
    console.log({id, logintoken, apiUrl})
    const redirectOnError = () =>
        process.browser
            ? Router.push('/authorsArea')
            : context.res.writeHead(301, { Location: '/authorsArea' })
    if (logintoken) {
        try {
            const response = await fetch(apiUrl, {
                credentials: 'include',
                cache: 'no-cache',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                }

            })
            const data = await response.json()
            if (data.status === 'success') {
                console.log('res.ok', data)
                return { data }
            }
            else {
                console.log('not reading success')
                console.log('stringyfied', JSON.stringify(data))
                // https://github.com/developit/unfetch#caveats
                return redirectOnError()
            }
        } catch (error) {
            // Implementation or Network error
            console.log(error)
            return redirectOnError()
        }
    }

}

    // const { form } = props;

    // switch (form) {
    //     case 'abstract-edit':
    //     case 'abstract':
    //         return <AbstractForm />;
    //     case 'exhibitor-edit':
    //         return <Exhibitorprofile editPaper="true" />;
    //     case 'exhibitor':
    //         return <Exhibitorprofile />;
    //     case 'author-edit':
    //         return <Authorprofile editPaper="true" />;
    //     case 'author':
    //         return <Authorprofile />;
    //     case 'esop-edit':
    //     // return <Esop editPaper="true" />;
    //     case 'esop':
    //     // return <Esop />;
    //     case 'login':
    //         return <LoginForm />;
    //     default:
    //         return null;

    // }