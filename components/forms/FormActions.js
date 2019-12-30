import cookie from 'js-cookie';
import fetch from 'isomorphic-unfetch';
import { login} from '../../utils/auth';



export async function GetForm(url) {
    const { logintoken } = cookie.get();
    console.log({ logintoken })
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
            return data;
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

export async function SendFile({ csrf, file }) {
    const formData = new FormData();
    const { logintoken } = cookie.get();
    formData.append('__csrf_token', csrf);
    formData.append('filename', file);
    console.log({ logintoken, csrf, file })
    if (logintoken && csrf && file) {
        try {
            const apiUrl = 'https://prelude.eurobrake.net/upload';
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formData,
                credentials: 'include',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                }
            });
            const data = await response.json();
            await console.log({ data })
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
        }
    }

    return
}


export async function SendForm({ csrf, values, url }) {
    const form = JSON.stringify(values);
    const { logintoken } = cookie.get();
        console.log({url, form});
    if (logintoken && csrf && form) {
        try {
            const apiUrl = url;
            const response = await fetch(apiUrl, {
                body: form,
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
        }
    }
    if(url === 'https://prelude.eurobrake.net/login' ){
        console.log({url, form});
        try {
            const response = await fetch(url, {
                method: 'POST', 
                credentials: 'include',
                body: form,
                headers: {
                    'Content-Type': 'application/json'
                },
            });
         
            const data = await response.json()

            if (data.status === 'success') {
                const { logintoken } = data;
                await login({ logintoken })
                return {}

            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to login, please try again', error
            )
            this.setState({ error: error.message });
         }
        }
    return
    }

