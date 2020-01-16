import * as yup from 'yup';

export const PaperSchema = yup.object().shape({
    accept: 
     yup.bool()
      .test(
        'accept',
        'Field must be checked',
        value => value === true
      ).required()
    ,
    technicalpaper_filename: yup.mixed().required('Required')
    .test("fileFormat",
          "Unsupported Format",
          value => value && SUPPORTED_FORMATS.includes(value.type)),
    author_notes: yup.string(),
    copyright: yup.bool()
      .test(
        'copyright',
        'Field must be checked',
        value => value === true
      ).required()
})
 

  const SUPPORTED_FORMATS = [
     'application/pdf'
    ];