import React, { Component } from 'react'
import cookies from 'next-cookies';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import OneForm from '../../../components/forms/OneForm';
import { LoginForm } from '../../../components/forms/LoginForm';
import { Button } from '../../../components/Button';
import { AbstractForm } from '../../../components/forms/Abstract';
import { Authorprofile } from '../../../components/forms/Authorprofile';
import { Exhibitorprofile } from '../../../components/forms/Exhibitorprofile';
import { StyledPage } from '../../../components/styles/PageStyles';
import HeroSection from '../../../components/HeroSection';
import {FixedDates, FixedBox} from '../../../components/Dates';
// import { Esop } from './Esop';
// import { GetFormSSR } from '../../components/forms/FormActions';
const Form = props => {
    const { presets, __csrf_token, } = props.data || {};
    const {apiUrl, id, formType, taskType} = props;// ? GETTIN FROM GET INITIAL PROPS
    const FT = formType || '';
    const TT = taskType || '';
    console.log('uniform',{apiUrl, id, FT, TT, __csrf_token, presets})

    let contact = 'Get in touch to find out more or ask a question' 
    return (
        <>
        <HeroSection
                t="35%"
                tt="35%"
                scolor="#F9B721"
                sfs="8rem"
                tsfs="5rem"
                tst="60%"
                mst="65%"
                secondary='' >
            Eurobrake 2020
            </HeroSection>
        <StyledPage>
            <FixedDates/>
                    <FixedBox />
            {formType == 'abstract' || formType == 'author' &&

            <Link href="/authors/dashboard">
                          <Button
                        background="#134381"
                        br="100rem"
                        bcolor="#134381"
                        style={{ marginLeft: 'auto', color:"#FFF" }}
                    >Back to Dashboard</Button>
            </Link>
            }
            <OneForm form={FT} type={TT} presets={presets} csrf={__csrf_token} apiUrl={apiUrl} paperId={id}/>
    </StyledPage>
        </>
    )
}
export default Form

Form.getInitialProps = async context => {
    const { id, taskUrl, formType, taskType } = context.query ;
    const { logintoken } = cookies(context) || {};
    let apiUrl = '';
   if(formType == 'contact') apiUrl = `https://prelude.eurobrake.net/contact` 
   if(formType == 'author') apiUrl = `https://prelude.eurobrake.net/authors/profile` 
   if(formType == 'reset') apiUrl = `https://prelude.eurobrake.net/authors/profile` 
   if(formType != 'reset' && formType != 'author' && formType != 'contact') apiUrl = `https://prelude.eurobrake.net/authors/edit/${id}`
   
    console.log('1st GIP', { id, logintoken, apiUrl, taskUrl, formType, taskType })
    console.log('props', { id, logintoken, apiUrl, taskUrl, formType, taskType })
    const redirectOnError = () =>
        process.browser
            ? Router.push('/authors')
            : context.res.writeHead(301, { Location: '/authors' })

    if(formType === 'reset') return { apiUrl, id, formType, taskType}// todo sort out real call
    if(formType === 'contact') {
        try {
            const response = await fetch(apiUrl, {
                credentials: 'include',
                cache: 'no-cache',
            })
            const data = await response.json()
            if (data.status === 'success') {
                console.log('res.ok uniform GIP', data)
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
   else if (logintoken) {
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
   