
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const CHARS_LENGTH = CHARS.length;

export default (length: number) => {
  let result = '';
  for ( let i = 0; i < length; i++ ) {
     result += CHARS.charAt(Math.floor(Math.random() * CHARS_LENGTH));
  }
  return result;
}
