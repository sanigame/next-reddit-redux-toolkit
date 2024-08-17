import { ParsedUrlQuery } from 'querystring'

import React from 'react'

import RedditDetail from '../../components/redditDetail/RedditDetail'
import { fetchRedditDetail } from '../../store/slices/redditDetailSlice'
import { wrapper } from '../../store/store'

interface Params extends ParsedUrlQuery {
  slug: string
}

function Detail() {
  return <RedditDetail />
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  const { slug } = params as Params
  await store.dispatch(fetchRedditDetail({ name: slug }))
  // console.log('State on server', store.getState())
  return {
    props: {},
  }
})

export default Detail
