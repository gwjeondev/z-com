import Link from "next/link"
import { NextPage } from "next"

/**
 * `NextPage` type, use it as a guide to create `pages`.
 */
const NotFound: NextPage = () => {
  return (
    <div>
      <div>이 페이지는 존재하지 않아요. 다른 페이지를 검색해 보세요.</div>
      <Link href="/search">검색</Link>
    </div>
  )
}

export default NotFound
