'use server'

import { redirect } from 'next/navigation'

export default async (prevState: any, formData: FormData) => {
  const id = formData.get('id')
  const name = formData.get('name')
  const password = formData.get('password')
  const image = formData.get('image')

  if (!id || !(id as string)?.trim()) {
    return { message: 'no_id' }
  }

  if (!name || !(name as string)?.trim()) {
    return { message: 'no_name' }
  }

  if (!password || !(password as string)?.trim()) {
    return { message: 'no_password' }
  }

  if (!image) {
    return { message: 'no_image' }
  }

  let shouldRedirect = false

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: 'post',
        body: formData,
        credentials: 'include',
      }
    )

    console.log(response.status)

    if (response.status === 403) {
      return { message: 'user_exists' }
    }

    console.log(await response.json())

    shouldRedirect = true
  } catch (err) {
    console.error(err)

    return { message: '' }
  }

  if (shouldRedirect) {
    redirect('/home') // try/catch문 안에서 X
  }

  return { message: '' }
}
