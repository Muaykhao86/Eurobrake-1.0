import cookie from 'js-cookie';
import cookies from 'next-cookies';
import fetch from 'isomorphic-unfetch';
import { login} from '../../utils/auth';


export async function GetFormSSR({url, context}) {
    // use `nextCookie` to get the cookie and pass the token to the frontend in the `props`.
    const { logintoken } = cookies(context);
    console.log({logintoken})
    try {
        const apiUrl = url;
        const response = await fetch(apiUrl, {
            credentials: 'include',
            cache: 'no-cache',
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

export async function GetForm(url) {
    const { logintoken } = cookie.get();
    console.log({ logintoken })
    try {
        const apiUrl = url;
        const response = await fetch(apiUrl, {
            credentials: 'include',
             cache: 'no-cache',
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

export async function SendFile({ values, url, csrf }) {
    const { logintoken } = cookie.get();
    const formData = new FormData();
    values.accept && values.accept === true ? values.accept = 'yes' : null;
    values.copyright && values.copyright === true ? values.copyright = 'yes' : null;
    
    Object.keys(values).forEach(key => {   
      formData.append(key, values[key])});
    
  
    console.log({ logintoken,  url})
    if (logintoken && csrf ) {
        try {
            const apiUrl = url;
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
            this.setState({ error: error.message });
        }
    }

    return
}


export async function SendForm({ csrf, values, url, FT }) {
    const form = JSON.stringify(values);
    const { logintoken } = cookie.get();
        console.log({url, form, FT});
    if (logintoken && csrf && form) {
        try {
            const apiUrl = url;
            const response = await fetch(apiUrl, {
                method: 'POST', 
                body: form,
                credentials: 'include',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            if (data.status === 'success') {
                console.log('getForm', data);
                return data
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
    if(url === 'https://prelude.eurobrake.net/authors/login' ){
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
         }
        }
    if(FT === 'reset' ){
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
            console.log('getForm', data);
            return data

            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to reset, please try again', error
            )
         }
        }
    return
    }

