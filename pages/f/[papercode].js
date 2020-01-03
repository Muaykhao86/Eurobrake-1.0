
import React, { Component } from 'react'

import { LoginForm } from '../../components/forms/LoginForm';
import { AbstractForm } from '../../components/forms/Abstract';
import { Authorprofile } from '../../components/forms/Authorprofile';
import { Exhibitorprofile } from '../../components/forms/Exhibitorprofile';
// import { Esop } from './Esop';
import { GetFormSSR } from '../../components/forms/FormActions';


const OneForm = props => {
            return <AbstractForm editPaper="true"  presets={props.presets} />;
}

// export default withAuthSync(Edit)
export default OneForm

OneForm.getInitialProps = async ctx => {
    const { papercode } = ctx.query;
    console.log('GIP', papercode)
    const res = await GetFormSSR(`https://prelude.eurobrake.net/edit/${papercode}`, ctx)
    const presets = await res;

    console.log({presets});

    return { presets};
};


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