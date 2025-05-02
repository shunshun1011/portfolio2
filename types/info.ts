import type { MicroCMSListContent } from "microcms-js-sdk";

export type Tag = {
  name: string;
} & MicroCMSListContent;

export type Post = {
  title: string;
  category: string;
  lead: string;
  content: string;
} & MicroCMSListContent;
