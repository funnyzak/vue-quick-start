export function rangeArray(size: number) {
  const _array: Array<number> = [];
  for (let i = 0; i < size; i++) {
    _array[i] = i;
  }
  return _array;
}

export const queryString = (params?: Record<string, string>): string => {
  if (!params || params === null) {
    return '';
  }
  return '?'.concat(
    Object.keys(params)
      .map((k) => encodeURIComponent(k).concat('=').concat(encodeURIComponent(params[k])))
      .join('&')
  );
};

/**
 * 将http转为https
 * @param url 链接
 */
export const parse2Https = (url: string) => {
  if (!url) return undefined;
  return url.startsWith('https') ? url : url.replace('http', 'https');
};

export const parseDate = function (date: string) {
  const t = Date.parse(date);
  if (typeof t === 'number') {
    return new Date(Date.parse(date.replace(/-/g, '/')));
  }
  return new Date();
};

export function parseWeekday(sDate: string | Date) {
  const dt = typeof sDate === 'string' ? new Date(sDate.replace(/-/g, '/')) : sDate;
  const a = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return a[dt.getDay()];
}
