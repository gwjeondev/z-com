'use client'

import style from './signup.module.css'
import onSubmit from '../_lib/signup'
import BackButton from '@/app/(beforeLogin)/_component/BackButton'
import { useFormState, useFormStatus } from 'react-dom'

const messageMap: {
  [key: string]: string
} = {
  no_id: '아이디를 입력하세요',
  no_name: '닉네임을 입력하세요',
  no_password: '비밀번호를 입력하세요.',
  no_image: '이미지를 업로드하세요.',
  user_exists: '이미 사용 중인 아이디입니다.',
}

export default function SignupModal() {
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState<{ message: string }, any>(onSubmit, {
    message: '',
  })
  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          <form action={formAction}>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor='id'>
                  아이디
                </label>
                <input
                  id='id'
                  name='id'
                  className={style.input}
                  type='text'
                  placeholder=''
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor='name'>
                  닉네임
                </label>
                <input
                  id='name'
                  name='name'
                  className={style.input}
                  type='text'
                  placeholder=''
                  required
                />
              </div>

              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor='password'>
                  비밀번호
                </label>
                <input
                  id='password'
                  name='password'
                  className={style.input}
                  type='password'
                  placeholder=''
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor='image'>
                  프로필
                </label>
                <input
                  id='image'
                  name='image'
                  className={style.input}
                  type='file'
                  accept='image/*'
                />
              </div>
            </div>
            <div className={style.modalFooter}>
              <button
                type='submit'
                className={style.actionButton}
                disabled={pending}
              >
                가입하기
              </button>
              <div className={style.error}>{messageMap[state?.message]}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
