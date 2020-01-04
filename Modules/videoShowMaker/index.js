const videoshow = require('videoshow')

const images = [
  'photo-1543227043-f69c82e95af9-by_Philippe_D_on_Unsplash.jpeg',
  'photo-1543310465-f4d3ca5a2a25-by_Luke_Vodell_on_Unsplash.jpeg',
  'photo-1543411789-ca12d5f935ba-by_Tomas_Malík_on_Unsplash.jpeg',
  'photo-1543739970-9f00688c2285-by_Mohamed_Ahsan_on_Unsplash.jpeg'
]

var videoOptions = {
  fps: 29,
  loop: 10, // seconds
  transition: true,
  transitionDuration: 2, // seconds
  videoBitrate: 1024,
  videoCodec: 'libx264',
  size: '1920x?',
  audioBitrate: '128k',
  audioChannels: 2,
  format: 'mp4',
  pixelFormat: 'yuv420p'
}

videoshow(images, videoOptions)
  .audio('song.mp3')
  .save('video.mp4')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err, stdout, stderr) {
    console.error('Error:', err)
    console.error('ffmpeg stderr:', stderr)
  })
  .on('end', function (output) {
    console.error('Video created in:', output)
  })
  