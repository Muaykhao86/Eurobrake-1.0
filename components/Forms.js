import React from 'react'
import cookie from 'js-cookie';


export async function GetForm(url) {
        // e.preventDefault()
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
            return data.__csrf_ 
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
            const data2 = await response;
            if (data.status === 'success') {
                console.log('getForm', data);
                console.log('getForm2', data2);
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

