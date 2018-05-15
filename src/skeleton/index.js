import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import style from './index.css'

function Title () {
  return <div className='title' />
}

function Content () {
  return <div className='content' />
}

function Skeleton () {
  const list = new Array(4).fill()

  return <div className='skeleton'>
    {list.map((data, index) => {
      return <div className='list' key={index + ''}>
        <Title />
        <Content />
      </div>
    })}
  </div>
}

export const html = `<style>${style}</style>${renderToStaticMarkup(<Skeleton />)}`
