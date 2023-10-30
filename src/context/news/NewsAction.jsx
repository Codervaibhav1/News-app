export const FetchData = async(topic) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-09-16&sortBy=publishedAt&apiKey=41dd12ff02ac4d118613c53d296e5533`);
  const data = await response.json()
  console.log(data.articles)
  return data.articles
};

