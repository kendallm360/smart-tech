//async await
// const fetchCategory = (category: string) => {
//   return fetch(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=bEisDAA5LpWenkpnbqEt7RmL&pageSize=50&format=json
// `).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw Error(response.status.toString());
//   });
// };

const fetchCategory = async (category: string) => {
  try {
    const response =
      await fetch(`https://api.bestbuy.com/v1/products((categoryPath.id=${category}))?apiKey=bEisDAA5LpWenkpnbqEt7RmL&pageSize=50&format=json
  `);
    return response.json();
  } catch (error) {
    console.error(error, "apierror");
  }
};

export { fetchCategory };
