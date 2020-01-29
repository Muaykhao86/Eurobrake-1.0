import * as yup from 'yup';
  
  const PPT_SUPPORTED_FORMATS = [
          '.ppt', 
          '.pptx',
          'ppt', 
          'pptx',
          'application/vnd.ms-powerpoint', 
          'application/vnd.openxmlformats-officedocument.presentationml.presentation',

    ];

  const FILE_SIZE = 5033164800 ;

  const PDF_SUPPORTED_FORMATS = [
    '.pdf', 
    'pdf', 
    'application/pdf',
    ];

// ? BELOW ATTEMPTED FIX AT CANT READ PROPERTY LENGTH OF UNDEFINED

export const countWords = (str) => {
  let matches = str != undefined && str.match(/[\w\d\’\'-]+/gi);
  if(matches != undefined){
  return matches ? matches.length : 0;
  }else return 0

}

export const PaperSchema = yup.object().shape({
    accept: 
     yup.bool()
      .test(
        'accept',
        'Field must be checked',
        value => value === true
      ).required('Required')
    ,
    technicalpaper_filename: yup.mixed().required('Required')
    .test("fileFormat",
          "Unsupported Format",
          value => value && PDF_SUPPORTED_FORMATS.includes(value.type)),
    author_notes: yup.string(),
    copyright: yup.bool()
      .test(
        'copyright',
        'Field must be checked',
        value => value === true
      ).required('Required')
})
 

export const PPTSchema = yup.object().shape({
    accept: 
     yup.bool()
      .test(
        'accept',
        'Field must be checked',
        value => value === true
      ).required('Required')
    ,
    ppt_filename: yup.mixed().required('Required')
    .test(
          "fileSize",
          "File too large",
          value => value && value.size <= FILE_SIZE
        )
    .test("fileFormat",
          "Unsupported Format",
          value => value && PPT_SUPPORTED_FORMATS.includes(value.type)),
    author_notes: yup.string()
})


export const PermissionSchema = yup.object().shape({
    ok_to_publish_ppt: yup.string()
    .required('Required')
})
  
export const PitchVideoSchema = yup.object().shape({
  pitchvideo_filename: yup.mixed().required('Required')
    .test(
          "fileSize",
          "File too large",
          value => value && value.size <= FILE_SIZE
        )
    .test("fileFormat",
          "Unsupported Format",
          value => value && PPT_SUPPORTED_FORMATS.includes(value.type)),
    ok_to_publish_pitchvideo: yup.string()
    .required('Required')
})


export const AcceptPosterSchema = yup.object().shape({
    accept_poster_invitation: yup.string()
    .required('Required')
})

export const PosterSchema = yup.object().shape({
    accept: 
     yup.bool()
      .test(
        'accept',
        'Field must be checked',
        value => value === true
      ).required('Required')
    ,
    poster_filename: yup.mixed().required('Required')
    .test("fileFormat",
          "Unsupported Format",
          value => value && PDF_SUPPORTED_FORMATS.includes(value.type)),
    author_notes: yup.string(),
      ok_to_publish_poster: yup.string()
      .required('Required')
})


export const BioSchema = yup.object().shape({
    biography: yup.string().required('Required')
      .test(
        'wordCount',
        'Max 100 words',
        value => countWords(value) <= 100
      )
      .test(
        'wordCount',
        'Min 20 words',
        value => countWords(value) >= 20
      )
      
})


