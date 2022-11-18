import axios from "axios";

const data = axios.create({
  baseURL:
    "https://api.airtable.com/v0/app4NIZthoTlA3i05/%E6%B3%95%E5%BE%8B%E4%B8%BB%E6%8F%90%E6%A1%88",
  headers: {
    Authorization: "Bearer keyZZohwE7qoW0mev",
    Cookie: "brw=brw6vXnpZDnXonY3G",
  },
});

export async function GET(url) {
  try {
    const response = await data.get(url);
    return response;
  } catch (error) {
    console.log("沒有資料");
    return null;
  }
}
