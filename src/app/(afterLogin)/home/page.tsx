import style from './home.module.css'
import Post from '@/app/(afterLogin)/_component/Post'
import PostForm from './_component/PostForm'
import TabProvider from './_component/TabProvider'
import Tab from './_component/Tab'

export default function HomePage() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  )
}
