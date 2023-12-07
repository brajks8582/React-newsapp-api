import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>News Monkey Top Headlines</h2>
        <div className='row'>
            <div className='col-md-3'>
                <NewsItem></NewsItem>
            </div>
            <div className='col-md-3'>
                <NewsItem></NewsItem>
            </div>
            <div className='col-md-3'>
                <NewsItem></NewsItem>
            </div>
        </div>
      </div>
    )
  }
}