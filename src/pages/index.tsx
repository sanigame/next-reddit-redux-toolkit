import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchRedditList } from '../store/slices/redditListSlice'

export default function Home() {
  const initialized = useRef(false)
  const dispatch = useAppDispatch()
  const { list, isFetching, error } = useAppSelector((state) => state.redditList)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      dispatch(fetchRedditList())
    }
    return () => {}
  }, [dispatch])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Reddit list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isFetching ? <p>loading</p> : null}
        {list &&
          list.map((topic: any, i: number) => (
            <Link key={i} href={`/detail/${topic.data.name}`}>
              <p>{topic.data.title}</p>
            </Link>
          ))}
        {error ? <p>Error</p> : null}
      </main>
    </>
  )
}
