'use client'

import { useRouter } from 'next/navigation'
import Main from '@/app/(beforeLogin)/_component/Main'
import { useSession } from 'next-auth/react'

export default function FakeLoginPage() {
  const { data: session } = useSession()

  const router = useRouter()
  if (session?.user) {
    router.replace('/home')
    return null
  }

  router.replace('/i/flow/login')

  return <Main />
}

//router.push
//localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login -> 뒤로가기 -> localhost:3000/login

//router.replace
//localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login -> 뒤로가기 -> localhost:3000
