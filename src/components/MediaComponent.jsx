// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import Hls from 'hls.js'
// // Import stylesheet and shims
// import 'mediaelement/build/mediaelementplayer.min.css'

// export const MediaComponent = () => {
//   const videoRef = useRef(null)
//   const hlsRef = useRef(null) // Ссылка на HLS
//   const videoUrl =
//     // 'https://intersputnik-live.cdnvideo.ru/intersputnik/fara_world.smil/playlist.m3u8'
//     'https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8'
//   const [audioTracks, setAudioTracks] = useState([])
//   const [currentAudioTrack, setCurrentAudioTrack] = useState(0)

//   useEffect(() => {
//     if (Hls.isSupported()) {
//       const hls = new Hls()
//       hls.loadSource(videoUrl)
//       hls.attachMedia(videoRef.current)
//       hlsRef.current = hls // Сохраняем ссылку на HLS

//       hls.on(Hls.Events.MANIFEST_PARSED, () => {
//         console.log(hls.audioTrackController);
//         console.log(hls);
//         const tracks = hls.audioTrackController.tracks;
//         setAudioTracks(tracks);
//       })
//       return () => {
//         hls.destroy() // Очистка при размонтировании
//       }
//     }
//   }, [videoUrl])

//   //   const selectAudioTrack = (trackIndex) => {
//   //     if (Hls.isSupported()) {
//   //       const hls = new Hls()

//   //       const audioTracks = hls.audioTracks
//   //       if (audioTracks && audioTracks.length > 0) {
//   //         for (let i = 0; i < audioTracks.length; i++) {
//   //           audioTracks[i].enabled = i === trackIndex
//   //         }
//   //       }
//   //     }
//   //   }
//   const switchAudioTrack = (track) => {
//     if (hlsRef.current && audioTracks.length > 0) {
//         console.log(track);
        
//       hlsRef.current.audioTrack = track
//       console.log(hlsRef.current);
      
//       setCurrentAudioTrack(track)
//     }
//   }

//   return (
//     <div>
//       <video
//         ref={videoRef}
//         controls
//         style={{ width: '100%' }}
//       >
//         Ваш браузер не поддерживает видео.
//       </video>
//       <div>
//         <h3>Выберите аудиодорожку:</h3>
//         {audioTracks.map((track, index) => (
//           <button
//             key={Math.floor(Math.random() * 1000)}
//             onClick={() => switchAudioTrack(index)}
//             disabled={currentAudioTrack === index}
//           >
//             {track.name || `Дорожка ${index + 1}`}
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

// // export default class MediaElement extends Component {
// //   state = {}

// //   success(media, node, instance) {
// //     // Your action when media was successfully loaded
// //   }

// //   error(media) {
// //     // Your action when media had an error loading
// //   }

// //   render() {
// //     const props = this.props,
// //       sources = JSON.parse(props.sources),
// //       tracks = JSON.parse(props.tracks),
// //       sourceTags = [],
// //       tracksTags = []
// //     for (let i = 0, total = sources.length; i < total; i++) {
// //       const source = sources[i]
// //       sourceTags.push(`<source src="${source.src}" type="${source.type}">`)
// //     }

// //     for (let i = 0, total = tracks.length; i < total; i++) {
// //       const track = tracks[i]
// //       tracksTags.push(
// //         `<track src="${track.src}" kind="${track.kind}" srclang="${
// //           track.lang
// //         }"${track.label ? ` label=${track.label}` : ''}>`
// //       )
// //     }

// //     const mediaBody = `${sourceTags.join('\n')}
// // 				${tracksTags.join('\n')}`,
// //       mediaHtml =
// //         props.mediaType === 'video'
// //           ? `<video id="${props.id}" width="${props.width}" height="${
// //               props.height
// //             }"${props.poster ? ` poster=${props.poster}` : ''}
// // 					${props.controls ? ' controls' : ''}${
// //               props.preload ? ` preload="${props.preload}"` : ''
// //             }>
// // 					${mediaBody}
// // 				</video>`
// //           : `<audio id="${props.id}" width="${props.width}" controls>
// // 					${mediaBody}
// // 				</audio>`
// //     return <div dangerouslySetInnerHTML={{ __html: mediaHtml }}></div>
// //   }

// //   componentDidMount() {
// //     const { MediaElementPlayer } = global

// //     if (!MediaElementPlayer) {
// //       return
// //     }

// //     const options = Object.assign({}, JSON.parse(this.props.options), {
// //       success: (media, node, instance) => this.success(media, node, instance),
// //       error: (media, node) => this.error(media, node),
// //     })

// //     window.Hls = hlsjs
// //     this.setState({ player: new MediaElementPlayer(this.props.id, options) })
// //   }

// //   componentWillUnmount() {
// //     if (this.state.player) {
// //       this.state.player.remove()
// //       this.setState({ player: null })
// //     }
// //   }
// // }
