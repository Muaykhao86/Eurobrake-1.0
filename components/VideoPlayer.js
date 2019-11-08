import Head from 'next/head'
import React from 'react'
import Player from '../components/Player'
import styled from 'styled-components';

import '../node_modules/video.js/dist/video-js.css';

const VideoContainer = styled.div`
    padding: 0;
    position: relative;
    /* z-index: -1000; */
    top: 0;
    left: 0;
    min-width: 100%;
    `;

// const Poster = styled.img.attrs(props => ({
//   src: '/images/video-poster.jpg'
// }))`
//     min-width: 100%;
//     min-height: 100%;
// `;

export default class VideoPlayer extends React.Component {
  render () {
    const videoJsOptions = {
      loop: true,
      autoplay: 'any',
      fluid: true,
      controls: false,
      // poster: {Poster},
      sources: [
        {
          src: '/videos/temp2.mp4',
          type: 'video/mp4'
        }
      ]
    }

    return (
      <VideoContainer>
        <Player {...videoJsOptions} /> 
      </VideoContainer>
    )
  }
}