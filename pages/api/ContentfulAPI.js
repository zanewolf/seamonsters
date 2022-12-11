import {createClient} from "contentful";
import useShuffle from '../../utils/useShuffle'

export async function fetchMedia(){

    // console.log('fetchMedia', content)

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

    const res = await client.getEntries({content_type:'seaMonsters',order:'sys.createdAt'})

    return{
        props: {
            content: res.items,
        },
        revalidate: 10
    }

}