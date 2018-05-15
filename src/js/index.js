import 'common/index.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import news from 'mock/news'

function Title (props) {
  return <div className='title'>{props.title}</div>
}

function Content (props) {
  return <div className='content'>{props.content}</div>
}

Title.propTypes = {
  title: PropTypes.string
}

Content.propTypes = {
  content: PropTypes.string
}

function App () {
  return <div className='app'>
    {news.map((data, index) => {
      return <div className='list' key={index + ''}>
        <Title title={data.title} />
        <Content content={data.content} />
      </div>
    })}
  </div>
}

setInterval(() => {
  render(<App />, document.getElementById('root'))
}, 1000 * 2)
