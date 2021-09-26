import axios from "axios";

export const fetcher = async (url: string) => {
  const minWait = new Promise((resolve) => setTimeout(resolve, 500)); // I like that spinning wheel too much :-D

  const data = await axios.get(url).then(res => res.data);
  await minWait;

  return data;
};
