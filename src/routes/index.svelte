<script>
  // import { GraphQLClient } from "graphql-request";

  import { onMount } from "svelte";

  let GraphQLClient;

  // onMount Lifecycle
  onMount(async () => {
    //import evalTemplates from "$lib/GraphQL.js";

    const module = await import("graphql-request");
    GraphQLClient = module.GraphQLClient;

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
    const data = await graphQLClient.request(query);
    console.log(JSON.stringify(data, undefined, 2));
  });
</script>

<svelte:head>
  <title>Hello world!</title>
</svelte:head>

<main>
  <h1>Hello world!</h1>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 2rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
