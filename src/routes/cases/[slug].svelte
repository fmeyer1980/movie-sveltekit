<script context="module">
    import { browser, dev } from '$app/env';
    export const hydrate = dev;
    export const router = browser;
    export const prerender = true;
    
    import client from '$lib/client'


    export async function load({ page }) {

      const query = `*[_type == "cases" && slug.current == $slug][0]{
          name,
          slug
      }`

      const cases = await client.fetch(query, { slug: page.params.slug })
      return {
        props: { cases }
      }
    }

//     export async function load({ page }) {
   
//    const { slug } = params;
//    const filter = '*[_type == "pages" && slug.current == $slug][0]';
//    const projection = `{
//     name,
//     slug
//    }`;

//    const query = filter + projection;

//    const pages = await client
//      .fetch(query, { slug })
//      .catch((err) => this.error(500, err));
//    return { cases };
//  }


// export async function load({ page, params }) {

//   const query = groq`*[_type == "cases" && slug.current == "${page.slug}"] {
//     ...,
//   }[0]`
//   const cases = await client.fetch(query)
//   return{
//     props: {
//       cases
//     }
//   }
// }

  </script>

<script>
    export let cases
    // $: ({ name, slug } = cases)
</script>

{#if cases.name }
  <h1>{cases.name}</h1>
{/if}