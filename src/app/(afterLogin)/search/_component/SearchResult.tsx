'use client'

import { useQuery } from '@tanstack/react-query'
import Post from '../../_component/Post'
import { Post as IPost } from '@/model/Post'
import { getSearchResult } from '../_lib/getSearchResult'

type Props = {
  searchParams: { q: string; f?: string; pf?: string }
}

export default function FollowingPosts({ searchParams }: Props) {
  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, Props['searchParams']]
  >({
    queryKey: ['post', 'search', searchParams],
    queryFn: getSearchResult,
    staleTime: 10 * 1000, //fresh -> stale
    gcTime: 60 * 5000, //inactive 상태인 경우 설정된 시간 후 메모리를 정리함. 다시 사용하는 컴포넌트로 이동하면 fresh 상태가 된다.
  })

  return data?.map((post: IPost) => <Post key={post.postId} post={post}></Post>)
}
