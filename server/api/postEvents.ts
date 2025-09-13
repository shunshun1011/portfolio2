import client from "./client";
import { Event } from "~/types/event";

export default defineEventHandler(async (event) => {
  const queries = getQuery(event);
  const data = await client.getList<Event>({
    endpoint: "events",
    queries: queries,
  });
  return data;
});
