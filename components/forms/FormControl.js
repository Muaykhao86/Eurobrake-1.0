import * as yup from 'yup';





export const AuthorSchema = yup.object().shape({
    title: yup.string(),
    firstname: yup.string().required('Required'),
    lastname:yup.string().required('Required'),
    email: yup.string().required('Required')
    .email(),
    jobtitle:yup.string().required('Required'),
    company: yup.string().required('Required'),
    address1: yup.string().required('Required'),
    address2: yup.string().nullable(),
    address3: yup.string().nullable(),
    city:yup.string().required('Required'),
    scp:yup.string().nullable(),
    postal: yup.string().nullable(),
    country: yup.string().required('Required'),
    phone: yup.string().required('Required'),
    fax: yup.string().nullable(),
    password:yup.string().nullable(),
    confirmed_password: yup.string().nullable()

})

export const ResetSchema = yup.object().shape({
     new_password:  yup.string().required('Required')
     .min(8, 'Password must be a least 8 characters long'),
    confirm_password: yup.string().required('Required')
    .min(8, 'Password must be a least 8 characters long')
     .oneOf([yup.ref('new_password'), null],'Passwords must match')
    
});
        
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

 const PDF_SUPPORTED_FORMATS = [
     'application/pdf'
    ];

export const EsopSchema = yup.object().shape({
    student_title: yup.string(),
    student_firstname: yup.string().required('Required'),
    student_lastname: yup.string().required('Required'),
    student_email: yup.string().required('Required'),
    student_address1: yup.string().required('Required'),
    student_address2: yup.string(),
    student_address3: yup.string(),
    student_city: yup.string().required('Required'),
    student_scp: yup.string(),
    student_postal: yup.string(),
    student_country: yup.string().required('Required'),
    student_membersociety: yup.string(),
    birth_city: yup.string(),
    birth_country: yup.string(),
    student_level_current: yup.string().required('Required'),
    student_level_seeking: yup.string().required('Required'),
    university_course: yup.string().required('Required'),
    university_name: yup.string().required('Required'),
    university_address1: yup.string(),
    university_address2: yup.string(),
    university_address3: yup.string(),
    university_city: yup.string().required('Required'),
    university_scp: yup.string(),
    university_postal: yup.string(),
    university_country: yup.string().required('Required'),
    cv_filename_uploader: yup.mixed().required('Required')
    .test("fileFormat",
          "Unsupported Format",
          value => value && PDF_SUPPORTED_FORMATS.includes(value.type)),
    personal_statement: yup.string().required('Required')
      .test(
        'wordCount',
        'Max 250 words',
        value => value && 
          value.match(/[\w\d\’\'-]+/gi)
          .length <= 250
          // split(' ').length <= 100 
      )
      .test(
        'wordCount',
        'Min 150 words',
        value => value && 
          value.match(/[\w\d\’\'-]+/gi)
          .length >= 150
          // split(' ').length <= 100 
      ),
    student_status_filename_uploader: yup.string().required('Required'),
    question_1_answer: yup.string().required('Required'),
    question_2_answer: yup.string().required('Required'),
    question_3_answer: yup.string().required('Required'),
    question_4_answer: yup.array().required('Required').max(3, 'Please select only three').min(3, 'Please select three')
    ,
    youtube_url: yup.string(),
    roundtable: yup.array(),
    roundtable_other: yup.string(),
    marketing: yup.string().required('Required'),
    marketing_other: yup.string(),
    previous_participant: yup.string().required('Required'),
    consent_sponsors: yup.string(),
    consent_fiec: yup.string(),
    consent_wep: yup.string(),
    consent_bursary: yup.string(),
    consent_events: yup.string(),
    consent_yfia: yup.string(),
    __csrf_token: yup.string()
});
