import {SortBy, SortOrder} from '@/types';
export const SortMethods = {
  [SortBy.LIKES]: {
    [SortOrder.ASC]: (a: any, b: any) => a.likes - b.likes,
    [SortOrder.DESC]: (a: any, b: any) => b.likes - a.likes
  },
  [SortBy.COMMENTS]: {
    [SortOrder.ASC]: (a: any, b: any) => a.comments - b.comments,
    [SortOrder.DESC]: (a: any, b: any) => b.comments - a.comments
  },
  [SortBy.SHARES]: {
    [SortOrder.ASC]: (a: any, b: any) => a.shares - b.shares,
    [SortOrder.DESC]: (a: any, b: any) => b.shares - a.shares
  },
  [SortBy.DATE]: {
    [SortOrder.ASC]: (a: any, b: any) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    [SortOrder.DESC]: (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  }
};
