export const countFilter = val => {
  let hm = val / 100000000;
  let m = val / 10000;
  if (hm > 1) {
    return hm.toFixed(1) + '亿';
  }
  if (m > 1) {
    return m.toFixed(1) + '万';
  } else {
    return val;
  }
};

export const timeFilter = val => {
  val = ~~val;
  let m = (~~(val % 3600 / 60)).toString().padStart(2, '0');
  let s = (val % 3600 % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};