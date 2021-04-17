import { GraphQLClient } from "graphql-request";

let evalTemplates

const endpoint = "https://api.8base.com/ckb9f8fky000207lb1vuoc6kv";

    const MY_TOKEN = "6d8d2cba-7ee7-4b33-b84d-8a7ea2e4691b";

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${MY_TOKEN}`,
      },
    });

    const query = `
      {
        edshiftsresEvalTemplatesList(filter: { deleted: { equals: false } }) {
          items {
            id
            templateName
          }
        }
      }
    `;


    function resolveAfter2Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
      });
    }
    
    async function asyncCall() {
      console.log('calling');
      //const result = await resolveAfter2Seconds();
      
      // expected output: "resolved"
      const data = await graphQLClient.request(query);
 		  evalTemplates = data.edshiftsresEvalTemplatesList.items;
 		  console.log('evalTemplates: ', evalTemplates);
      //console.log(result);
    }
    
    asyncCall();
    

// async asyncData() {
//     

// }


//const value=123
export default evalTemplates
   