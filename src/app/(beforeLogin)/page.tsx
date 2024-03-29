import Main from '@/app/(beforeLogin)/_component/Main'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function BeforeLoginPage() {
  const session = await auth()

  if (session?.user) {
    redirect('/home')
    return null
  }
  return <Main />
}
