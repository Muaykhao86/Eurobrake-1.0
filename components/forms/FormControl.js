import * as yup from 'yup';

export const ContactSchema = yup.object().shape({
    name: yup.string().nullable(),
    firstname: yup.string().required('Required'),
    lastname:yup.string().required('Required'),
    jobtitle:yup.string().nullable(),
    company: yup.string().required('Required'),
    address: yup.string().nullable(),
    email: yup.string().required('Required')
    .email(),
    enquiry: yup.string().required('Required')
     .test(
        'wordCount',
        'Max 750 words',
        value => value && 
          value.match(/[\w\d\’\'-]+/gi)
          .length <= 750
      ),
})



export const AuthorSchema = yup.object().shape({
    title: yup.string().nullable(),
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
    username: yup.string().required('Required')
        .email('Please enter a valid email'),
    password: yup.string().required('Required'),
});
        
export const AbstractSchema = yup.object().shape({
    author_title: yup.string().nullable(),
    author_firstname: yup.string().test(
                'Titlecase',
                'name must be in title case!',
               value =>  value[0] != value[0].toLowerCase()
            ).required('Required'),
    author_lastname: yup.string().test(
                'Titlecase',
                'name must be in title case!',
               value =>  value[0] != value[0].toLowerCase()
            ).required('Required'),
    author_email: yup.string().required('Required')
        .email(),
    author_jobtitle: yup.string().required('Required'),
    author_company: yup.string().required('Required'),
    author_address1: yup.string().required('Required'),
    author_address2: yup.string().nullable(),
    author_address3: yup.string().nullable(),
    author_city: yup.string().required('Required'),
    author_scp: yup.string().required('Required'),
    author_postal: yup.string().required('Required'),
    author_country: yup.string().required('Required'),
    author_phone: yup.string().required('Required'),
    is_presenting_author: yup.string().required('Required'),
    papertitle: yup.string().required('Required'),   
    abstract: yup.string().test(
        'wordCount',
        'Max 750 words',
        value => value && 
          value.match(/[\w\d\’\'-]+/gi)
          .length <= 750
      ).required('Required'),
    keywords: yup.string().required('Required'),
    consider_for_journal: yup.string().nullable(),
    secondary_authors: yup.array()
        .of(yup.object().shape({
            title: yup.string().nullable(),
            firstname: yup.string().test(
                'Titlecase',
                'name must be in title case!',
               value =>  value[0] != value[0].toLowerCase() 
            )
                .required('Required'),
            lastname: yup.string().test(
                'Titlecase',
                'name must be in title case!',
               value =>  value[0] != value[0].toLowerCase() 
            )
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

 const CV_SUPPORTED_FORMATS = [
     '.pdf', 
     '.doc', 
     '.docx',
     'pdf', 
     'doc', 
     'docx',
     'application/pdf', 
     'application/msword', 
     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

 const PROOF_SUPPORTED_FORMATS = [
     '.jpg', 
     '.jpeg', 
     '.png', 
     '.pdf', 
     '.doc', 
     '.docx', 
     'jpg', 
     'jpeg', 
     'png', 
     'pdf', 
     'doc', 
     'docx', 
     'image/jpeg', 
     "image/png",
    'application/pdf', 
     'application/msword', 
     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

  const FILE_SIZE = 5033164800 ;


export const EsopSchema = yup.object().shape({
    student_title: yup.string().nullable(),
    student_firstname: yup.string().required('Required'),
    student_lastname: yup.string().required('Required'),
    student_email: yup.string().required('Required'),
    student_address1: yup.string().required('Required'),
    student_address2: yup.string().nullable(),
    student_address3: yup.string().nullable(),
    student_city: yup.string().required('Required'),
    student_scp: yup.string().nullable(),
    student_postal: yup.string().nullable(),
    student_country: yup.string().required('Required'),
    student_membersociety: yup.string().nullable(),
    birth_city: yup.string().nullable(),
    birth_country: yup.string().nullable(),
    student_level_current: yup.string().required('Required'),
    student_level_seeking: yup.string().required('Required'),
    university_course: yup.string().required('Required'),
    university_name: yup.string().required('Required'),
    university_address1: yup.string().nullable(),
    university_address2: yup.string().nullable(),
    university_address3: yup.string().nullable(),
    university_city: yup.string().required('Required'),
    university_scp: yup.string().nullable(),
    university_postal: yup.string().nullable(),
    university_country: yup.string().required('Required'),
    cv_filename_uploader: yup.mixed().required('Required')
    .test("fileFormat",
          "Unsupported Format",
          value => value && CV_SUPPORTED_FORMATS.includes(value.type)),
    personal_statement: yup.string().required('Required')
      .test(
        'wordCount',
        'Max 250 words',
        value => value && 
          value.match(/[\w\d\’\'-]+/gi)
          .length <= 250
      )
      .test(
        'wordCount',
        'Min 150 words',
        value => value && 
          value.match(/[\w\d\’\'-]+/gi)
          .length >= 150
      ),
    student_status_filename_uploader: yup.mixed().required('Required')
    .test("fileFormat",
          "Unsupported Format",
          value => value && PROOF_SUPPORTED_FORMATS.includes(value.type))
    .test(
          "fileSize",
          "File too large",
          value => value && value.size <= FILE_SIZE
        ),
    question_1_answer: yup.string().required('Required'),
    question_2_answer: yup.string().required('Required'),
    question_3_answer: yup.string().required('Required'),
    question_4_answer: yup.array().required('Required').max(3, 'Please select only three').min(3, 'Please select three'),
    youtube_url: yup.string().nullable(),
    roundtable: yup.array().nullable(),
    roundtable_other: yup.string().nullable(),
    marketing: yup.string().required('Required'),
    marketing_other: yup.string().nullable(),
    previous_participant: yup.string().required('Required'),
    initiatives: yup.array().nullable(),
    initiatives_other: yup.string().nullable(),
    consent_sponsors: yup.string().nullable(),
    consent_fiec: yup.string().nullable(),
    consent_wep: yup.string().nullable(),
    consent_bursary: yup.string().nullable(),
    consent_events: yup.string().nullable(),
    consent_yfia: yup.string().nullable(),
    __csrf_token: yup.string()
});
