import client from "./client";
import { Post } from "../../types/info";

export default defineEventHandler(async (event) => {
  const params = getQuery(event);
  const slug = params.slug;

  const data = await client.getListDetail<Post>({
    endpoint: "info",
    contentId: String(slug),
  });
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: "slug is required",
    });
  }
  return data;
});
