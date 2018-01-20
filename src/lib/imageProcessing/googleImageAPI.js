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
                type: 'LABEL_DETECTION',
              },
            ],
          },
        ],
      }),
    }).then((response) => {
      resolve(response);
    });
  });

export default getLabel;

