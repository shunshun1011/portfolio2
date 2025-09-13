import type { MicroCMSListContent } from "microcms-js-sdk";

export type Tag = {
  name: string;
} & MicroCMSListContent;

export type Event = {
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
} & MicroCMSListContent;
