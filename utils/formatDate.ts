export default (date: Date, format:string) => {

  let res = format + '';
  res = res.replace('DD', ('' + date.getDate()).padStart(2, '0'));
  res = res.replace('MM', ('' + (date.getMonth() + 1)).padStart(2, '0'));
  res = res.replace('hh', ('' + date.getHours()).padStart(2, '0'));
  res = res.replace('HH', ('' + date.getHours()).padStart(2, '0'));
  res = res.replace('mm', ('' + date.getMinutes()).padStart(2, '0'));
  res = res.replace('ss', ('' + date.getSeconds()).padStart(2, '0'));
  res = res.replace('YYYY', (''+date.getFullYear()));
  return res;
};
