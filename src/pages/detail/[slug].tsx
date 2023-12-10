import React from 'react'
import { ParsedUrlQuery } from 'querystring'
import { wrapper } from '../../store/store'
import { fetchRedditDetail } from '../../store/slices/redditDetailSlice'
import RedditDetail from '../../components/redditDetail/RedditDetail'

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
