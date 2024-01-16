import Home from '@/app/(afterLogin)/home/page'

type Props = {
  params: { username: string; id: string; photoId: string }
}

export default function PhotoPage({ params }: Props) {
  //params: slug 정보
  params.username // elonmusk
  params.id // 1
  params.photoId // 1

  return <Home />
}
