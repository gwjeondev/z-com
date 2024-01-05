/**
 * Parallel Router의 기본 값
 *
 * (beforeLogin) Router의 Layout에 Modal이 참조되므로, '/'로 접속했을 경우는 @Modal에 대한 Page.tsx가 없어 Error 발생
 * 이를 방지 하기 위하여 default.tsx라는 파일로 대체함
 * page.tsx로도 할 수 있지만 page.tsx에는 넣을 content가 없음
 */
export default function () {
  return null
}
