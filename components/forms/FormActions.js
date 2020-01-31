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
        return error
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
        return error
    }
    return 
}

export async function SendFile({ values, url, csrf }) {
    const { logintoken } = cookie.get();
    const formData = new FormData();
    // ? Fail safe incase form inputs true/false
        // * Standard
    await values.accept && values.accept === true ? values.accept = 'yes' : null;
    await values.copyright && values.copyright === true ? values.copyright = 'yes' : null;
        // * Fiec
    await values.consent_sponsors && values.consent_sponsors === true ? values.consent_sponsors = 'yes' : null;
    await values.consent_fiec && values.consent_fiec === true ? values.consent_fiec = 'yes' : null;
    await values.consent_wep && values.consent_wep === true ? values.consent_wep = 'yes' : null;
    await values.consent_bursary && values.consent_bursary === true ? values.consent_bursary = 'yes' : null;
    await values.consent_events && values.consent_events === true ? values.consent_events = 'yes' : null;
    await values.consent_yfia && values.consent_yfia === true ? values.consent_yfia = 'yes' : null;
    
    Object.keys(values).forEach(key => {   
      formData.append(key, values[key])});
    
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
            if (data.status === 'success') {
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
            return error
        }
    }
    if (url === 'https://prelude.eurobrake.net/esop') {
        // ! TRIAL FOR ERROR MESSAGE DISPLAY
        //  * LOOKS GOOD
        try {
            const apiUrl = url;
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formData,
            });
            // * trial to display error message to user
            const data = await response.json();
            if (data) {
                return data

            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to send form, please try again', error
            )
            return error
        }
    }

    return
}


export async function SendForm({ csrf, values, url, FT }) {
     values && values.accept && values.accept === true ? values.accept = 'yes' : null;
    values && values.copyright && values.copyright === true ? values.copyright = 'yes' : null;
    // console.log('sendform',values)
    const form = JSON.stringify(values);
    const { logintoken } = cookie.get();
        // console.log({url, form, FT, csrf});
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
                // console.log('getForm', data);
                return data
            } else {
                let error = new Error(data.error)
                error.response = response   
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to send form, please try again', error
            )
            return error
        }
    }
    if(url === 'https://prelude.eurobrake.net/authors/login' ){
        // console.log({url, form});
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
                return data

            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to login, please try again', error
            )
            return error
         }
        }
    if(FT === 'reset' ){
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
            return error
         }
        }
    if(FT === 'newsletter' || FT === 'contact'){
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
            return data

            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to send form, please try again', error
            )
            return error
         }
        }
    if(FT === 'withdraw' ){
        try {
            const response = await fetch(url, {
                method: 'POST', 
                body: JSON.stringify(csrf),
                credentials: 'include',
                headers: {
                    Authorization: 'Bearer ' + logintoken,
                    'Content-Type': 'application/json'
                },
            });
         
            const data = await response.json()

            if (data.status === 'success') {
            return data

            } else {
                let error = new Error(data.error)
                error.response = response
                throw error
            }
        } catch (error) {
            console.error(
                'Failed to withdraw, please try again', error
            )
            return error
         }
        }
    return
    }

