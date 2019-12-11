import React from 'react'
import cookie from 'js-cookie';


export async function GetForm(url) {
        const { logintoken } = cookie.get();
        console.log({logintoken})
        try {
            const apiUrl = url;
            const response = await fetch(apiUrl, {
                credentials: 'include',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                }
            });
            const data = await response.json();
            if (data.status === 'success') {
                console.log('getForm', data);
                console.log('tkn', data.__csrf_token)
            return data.__csrf_token ;
            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to get form, please try again', error
            )
            // return error.message
        }

        return
    }

export async function SendFile({csrf, file}) {
        const formData = new FormData();
        const { logintoken } = cookie.get();
        formData.append('__csrf_token', {csrf});
        formData.append('filename', {file});
        console.log({logintoken, csrf, file})
        if(logintoken && csrf && file){
        try {
            const apiUrl = 'https://prelude.eurobrake.net/upload';
            const response = await fetch(apiUrl, {
                method: 'PUT', 
                body: formData,
                credentials: 'include',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                }
            });
            const data = await response.json();
         
            if (data.status === 'success') {
                console.log('getForm', data);
                
            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to get form, please try again', error
            )
            // this.setState({ error: error.message });
        }}

        return
    }


export async function SendForm({csrf, formData, url}) {
        const formData = JSON.stringify(formData);
        const { logintoken } = cookie.get();
        if(logintoken && csrf && formData){
        try {
            const apiUrl = url;
            const response = await fetch(apiUrl, {
                body: formData,
                credentials: 'include',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                }
            });
            const data = await response.json();
           
            if (data.status === 'success') {
                console.log('getForm', data);
            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to get form, please try again', error
            )
            // this.setState({ error: error.message });
        }}

        return
    }

