export async function callLambda(formData) {
  const timestamp = new Date().toLocaleString();
  formData.timestamp = timestamp;
  
  return fetch('https://vj6rsweqek.execute-api.us-east-1.amazonaws.com/default/whiskeyClubNYC', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(resp => resp.json())
  .then(data => data);
}
