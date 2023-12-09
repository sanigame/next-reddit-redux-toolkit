import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { wrapper } from '../../store/store'
import { fetchRedditDetail } from '../../store/slices/redditDetailSlice'
import { useAppSelector } from '../../store/hooks'

interface Params extends ParsedUrlQuery {
  slug: string
}

function Detail() {
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

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  const { slug } = params as Params
  await store.dispatch(fetchRedditDetail({ name: slug }))
  // console.log('State on server', store.getState())
  return {
    props: {
      slug,
    },
  }
})

export default Detail
