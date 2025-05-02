import client from "./client";
import { Post } from "~/types/info";

export default defineEventHandler(async (event) => {
  const queries = getQuery(event);
  const data = await client.getList<Post>({
    endpoint: "info",
    queries: queries,
  });
  return data;
});
