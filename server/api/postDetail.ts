import client from "./client";
import { Post } from "../../types/info";

export default defineEventHandler(async (event) => {
  const params = getQuery(event);
  const slug = params.slug;
  const data = client.getListDetail<Post>({
    endpoint: "info",
    contentId: String(slug),
  });
  return data;
});
