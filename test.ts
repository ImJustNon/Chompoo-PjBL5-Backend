import QRCode from 'qrcode'

// With promises
// QRCode.toDataURL('I am a pony!')
//   .then(url => {
//     console.log(url)
//   })
//   .catch(err => {
//     console.error(err)
//   })

// // With async/await
// const generateQR = async (text: any) => {
//   try {
//     console.log(await QRCode.toDataURL(text))
//   } catch (err) {
//     console.error(err)
//   }
// }

// QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
//     console.log({url})
//   })