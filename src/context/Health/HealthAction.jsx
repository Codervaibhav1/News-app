export const healthApi = async (value) =>{
    const reasponse = await fetch(`https://newsapi.org/v2/top-headlines?country=${value}&category=health&apiKey=08c1053120c14a8f8652a4e9c22d6ab5`)
    const data = await reasponse.json()
    return data.articles
}