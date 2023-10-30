export const TeachApi = async(value)=>{
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${value}&category=science&apiKey=08c1053120c14a8f8652a4e9c22d6ab5`)
    const data = await response.json()
    return data.articles
    // console.log(data.articles)
}