import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    username: yup.string()
        .email()
        .required('Required'),
    password: yup.string()
        .required('Required'),
});
        
export const AbstractSchema = yup.object().shape({
    author_firstname: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_lastname: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_email: yup.string()
        .email()
        .required('Required'),
    author_jobtitle: yup.string()
        .required('Required'),
    author_company: yup.string()
        .required('Required'),
    author_address1: yup.string()
        .required('Required'),
    author_address2: yup.string(),
        
    author_address3: yup.string(),
        
    author_city: yup.string()
        .required('Required'),
    author_scp: yup.string()
        .required('Required'),
    author_postal: yup.string()
        .required('Required'),
    author_country: yup.string()
        .required('Required'),
    author_phone: yup.string()
        .required('Required'),
    is_presenting_author: yup.string()
        .required('Required'),
    // submission_type: yup.string()
    //     .required('Required'),
    // presentationtype_full: yup.string(),
    papertitle: yup.string()
        .required('Required'),
    // theme: yup.string()
    //     .required('Required'),
    // subtheme: yup.array().max(3, 'Please select max of three subthemes!')
    //     .required('Required'),
    abstract: yup.string()
        .required('Required')
        .max(750, 'Too Long!'),
    keywords: yup.string()
        .required('Required'),
    previouspapers: yup.string()
        .required('Required'),
    consider_for_journal: yup.string()
        .required('Required'),
    secondary_authors: yup.array()
        .of(yup.object().shape({
            title: yup.string()
                .nullable()
                .required('Required'),
            firstname: yup.string()
                .required('Required'),
            lastname: yup.string()
                .required('Required'),
            email: yup.string()
                .email()
                .required('Required'),
            company: yup.string()
                .required('Required'),
            country: yup.string()
                .required('Required'),
            is_presenting_author: yup.string()
                .required('Required'),
        }))
});

export const EsopSchema = yup.object().shape({
    author_firstname: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_lastname: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_email: yup.string()
        .email()
        .required('Required'),
    author_jobtitle: yup.string()
        .required('Required'),
    author_company: yup.string()
        .required('Required'),
    author_address1: yup.string()
        .required('Required'),
    author_address2: yup.string(),
        
    author_address3: yup.string(),
        
    author_city: yup.string()
        .required('Required'),
    author_scp: yup.string()
        .required('Required'),
    author_postal: yup.string()
        .required('Required'),
    author_country: yup.string()
        .required('Required'),
    author_phone: yup.string()
        .required('Required'),
    is_presenting_author: yup.string()
        .required('Required'),
    submission_type: yup.string()
        .required('Required'),
    presentationtype_full: yup.string(),
    papertitle: yup.string()
        .required('Required'),
    theme: yup.string()
        .required('Required'),
    subtheme: yup.array().max(3, 'Please select max of three subthemes!')
        .required('Required'),
    abstract: yup.string()
        .required('Required'),
    keywords: yup.string()
        .required('Required'),
    previouspapers: yup.string()
        .required('Required'),
    consider_for_journal: yup.string()
        .required('Required'),
    secondary_authors: yup.array()
        .of(yup.object().shape({
            title: yup.string()
                .nullable()
                .required('Required'),
            firstname: yup.string()
                .required('Required'),
            lastname: yup.string()
                .required('Required'),
            email: yup.string()
                .email()
                .required('Required'),
            company: yup.string()
                .required('Required'),
            country: yup.string()
                .required('Required'),
            is_presenting_author: yup.string()
                .required('Required'),
        }))
});

export const ProfileSchema = yup.object().shape({
    author_firstname: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_lastname: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_email: yup.string()
        .email()
        .required('Required'),
    author_jobtitle: yup.string()
        .required('Required'),
    author_company: yup.string()
        .required('Required'),
    author_address1: yup.string()
        .required('Required'),
    author_address2: yup.string(),
        
    author_address3: yup.string(),
        
    author_city: yup.string()
        .required('Required'),
    author_scp: yup.string()
        .required('Required'),
    author_postal: yup.string()
        .required('Required'),
    author_country: yup.string()
        .required('Required'),
    author_phone: yup.string()
        .required('Required'),
    is_presenting_author: yup.string()
        .required('Required'),
    submission_type: yup.string()
        .required('Required'),
    presentationtype_full: yup.string(),
    papertitle: yup.string()
        .required('Required'),
    theme: yup.string()
        .required('Required'),
    subtheme: yup.array().max(3, 'Please select max of three subthemes!')
        .required('Required'),
    abstract: yup.string()
        .required('Required'),
    keywords: yup.string()
        .required('Required'),
    previouspapers: yup.string()
        .required('Required'),
    consider_for_journal: yup.string()
        .required('Required'),
    secondary_authors: yup.array()
        .of(yup.object().shape({
            title: yup.string()
                .nullable()
                .required('Required'),
            firstname: yup.string()
                .required('Required'),
            lastname: yup.string()
                .required('Required'),
            email: yup.string()
                .email()
                .required('Required'),
            company: yup.string()
                .required('Required'),
            country: yup.string()
                .required('Required'),
            is_presenting_author: yup.string()
                .required('Required'),
        }))
});