import {SortBy, SortOrder} from '@/types';
export const SortMethods = {
  [SortBy.LIKES]: {
    [SortOrder.ASC]: (a: any, b: any) => a.favorite_count - b.favorite_count,
    [SortOrder.DESC]: (a: any, b: any) => b.favorite_count - a.favorite_count
  },
  [SortBy.COMMENTS]: {
    [SortOrder.ASC]: (a: any, b: any) => a.reply_count - b.reply_count,
    [SortOrder.DESC]: (a: any, b: any) => b.reply_count - a.reply_count
  },
  [SortBy.SHARES]: {
    [SortOrder.ASC]: (a: any, b: any) => a.retweet_count - b.retweet_count,
    [SortOrder.DESC]: (a: any, b: any) => b.retweet_count - a.retweet_count
  },
  [SortBy.DATE]: {
    [SortOrder.ASC]: (a: any, b: any) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    [SortOrder.DESC]: (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  }
};
