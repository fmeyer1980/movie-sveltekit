<script context="module">
    
    import client from '$lib/client'
    export async function load() {
      const query = `*[_type == "home"]{
	meta{
      title,
      description
    },
    intro{
      headline,
      text,
      linkText,
      linkUrl,
      featuredPages[]->{
        slug,
        name
      },
    },
    featuredCases[]->{
        slug,
        mainImage,
        name,
        headline,
        summary
    }
      }[0]`
      const home = await client.fetch(query)
      return {
        props: { home }
      }
    }
  </script>

<script>
    import { urlFor } from '$lib/image-url'
    export let home
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="wrapper [ flow ] [ text-700 color-light-glare pt-900 pb-900 space-400 ] ">
  <h1>{home.intro.headline}</h1>
  <p>{home.intro.text}</p>
</div>
{#each home.intro.featuredPages as item }

   <li><a  href="/{item.slug.current}/">{ item.name }</a></li>
{/each}

{#each home.featuredCases as item }

   <li>
      <a sveltekit:prefetch href="/cases/{item.slug.current}/">{ item.name }</a>
       <img width="500" height="500" src={urlFor(item.mainImage).width(500).height(500).auto('format').quality('70')} alt="{item.mainImage.alt}" />
    </li>
{/each}


<style lang="scss">
@import '../../src/assets/scss/config';

$outputTokenCSS: false;
@import '../../node_modules/gorko/gorko.scss';

  .wrapper{
      background-color: get-color('primary');
      @include apply-utility('leading','loose');

      p{
        font-size: 1em;
      }
  }


</style>
