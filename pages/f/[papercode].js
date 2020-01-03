
import React, { Component } from 'react'
import { LoginForm } from '../../components/forms/LoginForm';
import { AbstractForm } from '../../components/forms/Abstract';
import { Authorprofile } from '../../components/forms/Authorprofile';
import { Exhibitorprofile } from '../../components/forms/Exhibitorprofile';
// import { Esop } from './Esop';
import { GetForm } from '../../components/forms/FormActions';



OneForm.getInitialProps = async function (context) {
    const { papercode } = context.query;
    const res = await GetForm(`https://prelude.eurobrake.net/edit/${papercode}`)
    const presets = await res;

    console.log({presets});

    return { presets};
};





const OneForm = props => {
    const { form } = props;

    switch (form) {
        case 'abstract-edit':
            return <AbstractForm editPaper="true"  presets={presets} />;
        case 'abstract':
            return <AbstractForm />;
        case 'exhibitor-edit':
            return <Exhibitorprofile editPaper="true" />;
        case 'exhibitor':
            return <Exhibitorprofile />;
        case 'author-edit':
            return <Authorprofile editPaper="true" />;
        case 'author':
            return <Authorprofile />;
        case 'esop-edit':
        // return <Esop editPaper="true" />;
        case 'esop':
        // return <Esop />;
        case 'login':
            return <LoginForm />;
        default:
            return null;

    }
}

// export default withAuthSync(Edit)
export default OneForm