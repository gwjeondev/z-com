'use client'

import { useSession } from 'next-auth/react'
import style from './followRecommend.module.css'
import { useRouter } from 'next/navigation'
import { MouseEventHandler } from 'react'

export default function FollowRecommend() {
  const { data } = useSession()
  const user = data?.user

  const session = useSession()
  console.log('data', session)
  const router = useRouter()

  const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (user) {
      router.replace('/')
    }
  }

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={user?.image!} alt={user?.email!} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user?.name}</div>
        <div className={style.count}>@{user?.email}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  )
}
