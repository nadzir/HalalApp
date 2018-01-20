export const getLabel = imageBase64 =>
  new Promise((resolve, reject) => {
    fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCIureBbvR-bux0r-AGLCgFnsJtOvKgygs', {
      method: 'POST',
      body: JSON.stringify({
        requests: [
          {
            image: {
              content: imageBase64,
            },
            features: [
              {
                type: 'LOGO_DETECTION',
                // maxResults: 4,
              },
              {
                type: 'TEXT_DETECTION',
                // maxResults: 4,
              },
            ],
          },
        ],
      }),
    }).then((response) => {
      console.log(response);
      const bodyText = JSON.parse(response._bodyText);
      console.log(bodyText);
      resolve(bodyText);
    });
  });


export default getLabel;

