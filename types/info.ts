import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Info = {
  title?: string;
  category: MicroCMSListContent | null;
  lead: string;
  content?: string;
};
