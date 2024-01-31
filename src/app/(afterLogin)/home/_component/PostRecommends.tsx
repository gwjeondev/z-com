'use client'

import { useQuery } from '@tanstack/react-query'
import { getPostRecommends } from '../_lib/getPostRecommends'
import Post from '../../_component/Post'
import { Post as IPost } from '@/model/Post'

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, //fresh -> stale
    gcTime: 60 * 5000, //inactive 상태인 경우 설정된 시간 후 메모리를 정리함. 다시 사용하는 컴포넌트로 이동하면 fresh 상태가 된다.
  })

  return data?.map((post: IPost) => <Post key={post.postId} post={post}></Post>)
}
