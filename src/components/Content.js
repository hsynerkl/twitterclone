import React,{useState} from 'react'
import { StarIcon } from '../icons/icons'
import Twitterl from '../images/twitter.svg'
import Divider from './Divider'
import FeedItems from './FeedItems'
import TweetBox from './TweetBox'


const Content = () => {

   

    return (
        <div className="bg-white flex-1 flex-col border-r border-l border-gray-extraLight">
            <header className="flex z-10 justify-between items-center p-4 border-b border-gray-extraLight sticky top-0 bg-white">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <StarIcon className="w-6 h-6"/>
            </header>
            <div className="flex px-4 py-3 space-x-4 ">
                <img src={Twitterl} alt="pp" className="w-11 h-11 rounded-full"></img>
                <TweetBox />
                </div>
                <Divider/>
                <FeedItems />
                </div>
    )
}

export default Content
