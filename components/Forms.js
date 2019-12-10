GetForm = async (e, url) => {
        e.preventDefault()
        console.log('click');
        const { logintoken } = cookie.get();
        console.log(logintoken)
        try {
            const apiUrl = url;
            const response = await fetch(apiUrl, {
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${logintoken}`,
                }
            });
            const data = await response.json();
            if (data.status === 'success') {
                // this.setState(prev => (
                //     {
                //         hasForm: !prev,
                //         formData: data.form
                //     }));
                // console.log(data.form);
                // console.log('stringify',JSON.stringify(data.form));
                console.log('getForm', stringyfy(data));


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

    export default GetForm();