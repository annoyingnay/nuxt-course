export default defineEventHandler(async (event) => {
    //handle query params
    //const { name } = getQuery(event) //не работает 'useQuery is not defined'

    //handle post data
    //const { age } = await readBody(event) //не работает 'useBody is not defined'

    // return {
    //     message: `Hey, ${name}! Ur ${age} y.o.`
    // }

    /*Одной из причин по которой мы хотим использовать server routes заключается в том,
    что мы используем какой-то сторонний api, которому требуется private key.
    И мф не хотим раскрывать этот ключ фронтэнду.
     */

    //api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_7Yuh0kbcR5iArw2v1yTYG1j1aKBD5XhJgAkCTjxl')

    return data;

})