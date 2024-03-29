import React, { Component } from 'react'
import cookies from 'next-cookies';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import OneTask from '../../../components/forms/OneTask';
import { LoginForm } from '../../../components/forms/LoginForm';
import { Button } from '../../../components/Button';
import { AbstractForm } from '../../../components/forms/Abstract';
import { Authorprofile } from '../../../components/forms/Authorprofile';
import { Exhibitorprofile } from '../../../components/forms/Exhibitorprofile';
import { StyledPage } from '../../../components/styles/PageStyles';
import HeroSection from '../../../components/HeroSection';
import {FixedDates} from '../../../components/Dates';

const Form = props => {
    const { presets, __csrf_token } = props.data;
    const {apiUrl, id, taskType} = props;// ? GETTIN FROM GET INITIAL PROPS
    const TT = taskType || '';
    return (
        <>
        <HeroSection>
            Eurobrake 2020
            </HeroSection>
        <StyledPage>
            <FixedDates/>
            <Link href="/authors/dashboard">
                          <Button
                        background="#134381"
                        br="100rem"
                        bcolor="#134381"
                        style={{ marginLeft: 'auto', color:"#FFF" }}
                    >Back to Dashboard</Button>
            </Link>
            <OneTask  type={TT} presets={presets} csrf={__csrf_token} apiUrl={apiUrl} paperId={id}/>
    </StyledPage>
        </>
    )
}
export default Form

Form.getInitialProps = async context => {
    const { id, taskType } = context.query;
    const { logintoken } = cookies(context) || {};
    const apiUrl = `https://prelude.eurobrake.net/authors/tasks/${taskType}/${id}` ;
    const redirectOnError = () =>
        process.browser
            ? Router.push('/authors')
            : context.res.writeHead(301, { Location: '/authors' })
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
                return { data, apiUrl, id, taskType }
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