import * as Yup from 'yup';

export const PaperSchema = Yup.object().shape({
    accept: Yup.string()
        .required('Required'),
    technicalpaper_filename: Yup.mixed()
        .required('Required'),
    author_notes: Yup.string()
    .max(750, 'too many words'),
    copyright: Yup.string()
        .required('Required'),
});
 