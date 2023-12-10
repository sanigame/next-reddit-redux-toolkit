import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchRedditList } from '../../store/slices/redditListSlice'

const SUBREDDIT_LIST = ['all', 'pokemon', 'reactjs', 'apple']

const RedditList = () => {
  const initialized = useRef(false)
  const dispatch = useAppDispatch()
  const { list, isFetching, error } = useAppSelector((state) => state.redditList)
  const [subredditSelected, setSubredditSelected] = useState('all')

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      dispatch(fetchRedditList({ subreddit: subredditSelected }))
    }
    return () => {}
  }, [dispatch, subredditSelected])

  const onSelectSubReddit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    initialized.current = false
    setSubredditSelected(event.target.value)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Reddit list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <select id="subreddit" value={subredditSelected} onChange={onSelectSubReddit}>
            {SUBREDDIT_LIST.map((subreddit, i) => (
              <option key={i} value={subreddit}>
                {subreddit}
              </option>
            ))}
          </select>
        </div>
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

export default RedditList
