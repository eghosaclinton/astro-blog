import rss, {pagesGlobToRssItems} from "@astrojs/rss"

export async function GET (context){
    return rss({
        title: "a1s0sa astro learning | blog",
        description: "my journey learning Astro",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("../**/*.md")),
        customData: `<language>en-us</language>`
    })
}