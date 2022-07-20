interface UrlHashObject {
  [key: string]: string;
}

export default () => {
  let pathQuery = (window.location.hash || '').substring(1).split('&');

  let result: UrlHashObject = {};
  
  pathQuery.forEach((el) => {
    if( el ) {
      let parts : string[] = el.split('=');
      result[parts[0]] = decodeURIComponent(parts[1]);
    }
  });

  return result;
}
