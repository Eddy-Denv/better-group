const fetchPostData = async (url, { body, Token }) => {
  const data = await (
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify(body),
    })
  ).json();
  return data;
};
export default fetchPostData;
