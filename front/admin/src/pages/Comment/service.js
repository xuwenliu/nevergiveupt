
import request from '@/utils/request';
import { replacePage } from '@/utils/utils';

export async function queryComment(params) {
  const res = await request('/api/comment', {
    params: replacePage(params),
  });

  return new Promise((resolve, reject) => {
    if (res.code === 0) {
      res.data &&
        resolve({
          data: res.data.list,
          current: res.data.page,
          total: res.data.totalCount,
          success: true,
          pageSize: res.data.pageSize,
        });
    } else {
      resolve({
        data: [],
        current: params.current,
        total: 0,
        success: false,
        pageSize: params.pageSize,
      });
    }
  });
}

export async function removeComment(params) {
  return request('/api/comment', {
    method: 'delete',
    data: {
      ...params,
    },
  });
}

export async function updateCommentStatus(params) {
  return request('/api/comment', {
    method: 'put',
    data: {
      ...params,
    },
  });
}
