import React, { Component } from 'react'
import cookies from 'next-cookies';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import OneForm from '../../components/forms/OneForm';
import { LoginForm } from '../../components/forms/LoginForm';
import { Button } from '../../../../components/Button';

import { AbstractForm } from '../../components/forms/Abstract';
import { Authorprofile } from '../../components/forms/Authorprofile';
import { Exhibitorprofile } from '../../components/forms/Exhibitorprofile';
import { StyledPage } from '../../components/styles/PageStyles';
import HeroSection from '../../components/HeroSection';
import {FixedDates} from '../../components/Dates';
// import { Esop } from './Esop';
// import { GetFormSSR } from '../../components/forms/FormActions';
const Form = props => {
    const { presets, __csrf_token, taskType, formType } = props.data;
    const {apiUrl, id} = props;// ? GETTIN FROM GET INITIAL PROPS
    const FT = formType || '';
    const TT = taskType || '';
    console.log({apiUrl, id, FT, TT})
    return (
        <>
        <HeroSection>
            Eurobrake 2020
            </HeroSection>
        <StyledPage>
            <FixedDates/>
            <Link href="/authorsAreaDash">
                          <Button
                        background="#134381"
                        br="100rem"
                        bcolor="#134381"
                        style={{ marginLeft: 'auto', color:"#FFF" }}
                    >Back to Dashboard</Button>
            </Link>
            <OneForm form={FT} type={TT} presets={presets} csrf={__csrf_token} apiUrl={apiUrl} paperId={id}/>
    </StyledPage>
        </>
    )
}
export default Form
Form.getInitialProps = async context => {
    const { id, taskUrl, formType, taskType } = context.query;
    const { logintoken } = cookies(context) || {};
    const apiUrl = taskUrl ;
    console.log('1st task folder GIP', { id, logintoken, apiUrl, taskUrl, formType, taskType })
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
                console.log('res.ok 2nd GIP', data)
                return { data, apiUrl, id, formType, taskType }
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
            return await redirectOnError()
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
