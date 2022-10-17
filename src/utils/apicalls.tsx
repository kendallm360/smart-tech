const fetchCategory = (category: string) => {
  return fetch(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=bEisDAA5LpWenkpnbqEt7RmL&format=json
`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(response.status.toString());
  });
};
// pcmcat209400050001

export { fetchCategory };
