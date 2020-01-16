import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .email()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});
        
export const AbstractSchema = Yup.object().shape({
    author_firstname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_lastname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_email: Yup.string()
        .email()
        .required('Required'),
    author_jobtitle: Yup.string()
        .required('Required'),
    author_company: Yup.string()
        .required('Required'),
    author_address1: Yup.string()
        .required('Required'),
    author_address2: Yup.string(),
        
    author_address3: Yup.string(),
        
    author_city: Yup.string()
        .required('Required'),
    author_scp: Yup.string()
        .required('Required'),
    author_postal: Yup.string()
        .required('Required'),
    author_country: Yup.string()
        .required('Required'),
    author_phone: Yup.string()
        .required('Required'),
    is_presenting_author: Yup.string()
        .required('Required'),
    // submission_type: Yup.string()
    //     .required('Required'),
    // presentationtype_full: Yup.string(),
    papertitle: Yup.string()
        .required('Required'),
    // theme: Yup.string()
    //     .required('Required'),
    // subtheme: Yup.array().max(3, 'Please select max of three subthemes!')
    //     .required('Required'),
    abstract: Yup.string()
        .required('Required')
        .max(750, 'Too Long!'),
    keywords: Yup.string()
        .required('Required'),
    previouspapers: Yup.string()
        .required('Required'),
    consider_for_journal: Yup.string()
        .required('Required'),
    secondary_authors: Yup.array()
        .of(Yup.object().shape({
            title: Yup.string()
                .nullable()
                .required('Required'),
            firstname: Yup.string()
                .required('Required'),
            lastname: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email()
                .required('Required'),
            company: Yup.string()
                .required('Required'),
            country: Yup.string()
                .required('Required'),
            is_presenting_author: Yup.string()
                .required('Required'),
        }))
        // abstract 750 words!
});

export const EsopSchema = Yup.object().shape({
    author_firstname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_lastname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_email: Yup.string()
        .email()
        .required('Required'),
    author_jobtitle: Yup.string()
        .required('Required'),
    author_company: Yup.string()
        .required('Required'),
    author_address1: Yup.string()
        .required('Required'),
    author_address2: Yup.string(),
        
    author_address3: Yup.string(),
        
    author_city: Yup.string()
        .required('Required'),
    author_scp: Yup.string()
        .required('Required'),
    author_postal: Yup.string()
        .required('Required'),
    author_country: Yup.string()
        .required('Required'),
    author_phone: Yup.string()
        .required('Required'),
    is_presenting_author: Yup.string()
        .required('Required'),
    submission_type: Yup.string()
        .required('Required'),
    presentationtype_full: Yup.string(),
    papertitle: Yup.string()
        .required('Required'),
    theme: Yup.string()
        .required('Required'),
    subtheme: Yup.array().max(3, 'Please select max of three subthemes!')
        .required('Required'),
    abstract: Yup.string()
        .required('Required'),
    keywords: Yup.string()
        .required('Required'),
    previouspapers: Yup.string()
        .required('Required'),
    consider_for_journal: Yup.string()
        .required('Required'),
    secondary_authors: Yup.array()
        .of(Yup.object().shape({
            title: Yup.string()
                .nullable()
                .required('Required'),
            firstname: Yup.string()
                .required('Required'),
            lastname: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email()
                .required('Required'),
            company: Yup.string()
                .required('Required'),
            country: Yup.string()
                .required('Required'),
            is_presenting_author: Yup.string()
                .required('Required'),
        }))
});

export const ProfileSchema = Yup.object().shape({
    author_firstname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_lastname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    author_email: Yup.string()
        .email()
        .required('Required'),
    author_jobtitle: Yup.string()
        .required('Required'),
    author_company: Yup.string()
        .required('Required'),
    author_address1: Yup.string()
        .required('Required'),
    author_address2: Yup.string(),
        
    author_address3: Yup.string(),
        
    author_city: Yup.string()
        .required('Required'),
    author_scp: Yup.string()
        .required('Required'),
    author_postal: Yup.string()
        .required('Required'),
    author_country: Yup.string()
        .required('Required'),
    author_phone: Yup.string()
        .required('Required'),
    is_presenting_author: Yup.string()
        .required('Required'),
    submission_type: Yup.string()
        .required('Required'),
    presentationtype_full: Yup.string(),
    papertitle: Yup.string()
        .required('Required'),
    theme: Yup.string()
        .required('Required'),
    subtheme: Yup.array().max(3, 'Please select max of three subthemes!')
        .required('Required'),
    abstract: Yup.string()
        .required('Required'),
    keywords: Yup.string()
        .required('Required'),
    previouspapers: Yup.string()
        .required('Required'),
    consider_for_journal: Yup.string()
        .required('Required'),
    secondary_authors: Yup.array()
        .of(Yup.object().shape({
            title: Yup.string()
                .nullable()
                .required('Required'),
            firstname: Yup.string()
                .required('Required'),
            lastname: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email()
                .required('Required'),
            company: Yup.string()
                .required('Required'),
            country: Yup.string()
                .required('Required'),
            is_presenting_author: Yup.string()
                .required('Required'),
        }))
});