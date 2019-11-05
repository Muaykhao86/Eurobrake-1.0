import React from 'react'
import fetch from 'isomorphic-unfetch';


const FormBuilder = props => (
    console.log(props)



)

    

    // FormBuilder.getInitialProps = async () => {
    //     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman') ;
    //     const data = await res.json();

    //     console.log({data});
    //     return {form: json}
    // }

    FormBuilder.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default FormBuilder;