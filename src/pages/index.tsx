import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { newsAPI } from '../../lib/newsApi'
import { NewsContext, NewsProps } from '../contexts/ContextNews'
import { CardList, CardNews } from  '../styles/pages/Home'
import {v4 as uuid} from 'uuid'

interface HomeProps{
  contents:NewsProps[]
}

export default function Home({contents}:HomeProps) {
const {newsContent,getNews} = useContext(NewsContext)

  useEffect(()=>{
    getNews(contents)
  },[])

  return (
  <CardList>
      {
        newsContent.map(content =>{
          return(
            <Link href={content.url} key={uuid()} target={'_blank'}>
              
              <CardNews  >
              <header>
                <h1>{content.title}</h1>
              </header>
              
              <div>
              <img src={content.urlToimg}  alt=""/>
              </div>             

            <p>{content.content?content.content:content.description}</p>
          </CardNews> 
           
              
            </Link>

          )
        })
      }
  </CardList>
  )
}

export const getStaticProps:GetStaticProps = async ()=>{
  const response = await newsAPI.getTopHeadlines({
    category: 'technology',
    country: 'br',
    pageSize: 20,
  })

  const contents = response.articles.map(content=>{
    
    return{
     
      author:content.author,
      content:content.content,
      description:content.description,
      title:content.title,
      url:content.url,
      publishedAt:content.publishedAt,
      urlToimg:content.urlToImage
    }
  })


  return{
    props:{
      contents
    },
    revalidate:60*2
  }
}