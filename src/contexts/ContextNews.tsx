import { createContext, ReactNode, useState } from "react"

export interface NewsProps{
    id?:string
    author:string
    content:string
    description:string
    title:string
    url:string
    publishedAt:string
    urlToimg:string
}

interface ContextData{
    newsContent:NewsProps[]
    getNews:(content:NewsProps[])=>void
}

export const NewsContext = createContext({} as ContextData)

interface NewsContextProviderProps{
    children:ReactNode
}



export function NewsContextProvider({children}:NewsContextProviderProps){

    const [newsContent, setNewsContent] = useState<NewsProps[]>([])

     function getNews(content:NewsProps[]){
        setNewsContent(state=>[...content])
    }

    return(
        <NewsContext.Provider value={{newsContent,getNews}}>
            {children}
        </NewsContext.Provider>
    )
}