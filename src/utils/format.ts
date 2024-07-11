/* 只允许输入整数 */
export const inputParseInt = (v: string, intLen = 11) => {
  return (v+'').substring(0, intLen).replace(/[^\d]/g, '');
};
/* 只允许输入数字和字母 */
export const captchaParse = (v: string, intLen = 4) => {
    return v.substring(0, intLen).replace(/[\W]/g, '');
};