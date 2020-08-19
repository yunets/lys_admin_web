import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

// export async function queryCurrent(): Promise<any> {
//   debugger;
//   return request('/api/currentUser');
//
// }

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}

export async function login(params) {
  return request('/api/login', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function queryCurrent1(params): Promise<any> {

  return request('/api/currentUser', {
    method: 'GET',
    params,
  });
}

export async function queryCurrent(params): Promise<any> {

  return request('/sys/user/selectAll', {
    method: 'POST',
    params,
  });
}
