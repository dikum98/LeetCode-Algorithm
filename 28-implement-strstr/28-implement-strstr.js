// 28. Implement strStr()
function strStr(haystack, needle) {
  // haystack에 needle이 속하는지
  // needle 길이만큼 haystack 첨부터 검사

  // 속하면 일치하는 인덱스 반환, 아니면 -1반환
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
  return -1;
}
