import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../hooks/store'

const RedditDetail = () => {
  const router = useRouter()
  const { detail, isFetching, error } = useAppSelector((state) => state.redditDetail)
  return (
    <>
      <Head>
        <title>{detail.title}</title>
        <meta name="description" content={detail.title} />
      </Head>
      <div>
        {isFetching ? <p>loading</p> : null}
        <p>slug: {router.query.slug}</p>
        <p>title: {detail.title}</p>
        <p>subreddit: {detail.subreddit}</p>
        {error ? <p>Error</p> : null}
      </div>
    </>
  )
}

export default RedditDetail
