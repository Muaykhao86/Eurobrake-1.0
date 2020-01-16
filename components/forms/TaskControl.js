import * as Yup from 'yup';

export const PaperSchema = Yup.object().shape({
    accept: Yup.bool().oneOf([true], 'Required').required('Required'),
    technicalpaper_filename: Yup.mixed()
        .required('Required'),
    author_notes: Yup.string()
    .max(100, 'too many words'),
    copyright: Yup.bool().oneOf([true], 'Required').required('Required'),
});
 