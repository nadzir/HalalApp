export const halalCheck = query =>
  new Promise((resolve, reject) => {
    fetch(`https://ehsccwagu1.execute-api.ap-southeast-1.amazonaws.com/api/halal-check/${query}`, {
      method: 'GET'
    }).then((response) => {
      resolve(response._bodyText)
    }).catch(console.error)
  })

export default halalCheck
