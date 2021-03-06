const api = 'https://api.foursquare.com/v2/venues/';
const version = '20180411';
const lang = 'en';

export const getInfo = (id) =>
  fetch(`${api}${id}?client_id=VNPOO11IBNOYAUPJYZ4XMHWT35TWJUJRUPCOBUOW4C1GE31G&client_secret=TTZIT5MOSFT2GB3ITO5Z51MSP3IPNZGT3EKAPAGU0UB1Q5B2&v=20180729&locale=en`)
    .then(res => {
			if(res.ok){
				return res.json();
			} else {
				throw new Error("There was an error while retrieving information from foursquare");
			}})
    .then(data => data.response.venue)
