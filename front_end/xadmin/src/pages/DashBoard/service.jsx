import request from 'umi-request';

export async function fakeChartData() {
  return request('/api/v1/fake_chart_data');
}
