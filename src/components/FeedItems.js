import React from 'react'
import Twitterl from '../images/twitter.svg'

export default function FeedItems() {
    return (
        <div>
            <article className="flex space-x-3 border-b border-gray-extralight px-4 gap-y-3 cursor-pointer">
                <img src={Twitterl} className="w-11 h-11 rounded-full"></img>
               <div className="flex flex-1">
                <div className="flex items-center text-sm space-x-3 ">
                    <h4 className="font-bold">Hüseyin Erkal</h4>
                    <span className="text-grey-dark">@hsynerkal</span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full"/>
                    <span className="text-gray-dark">17:53</span>
                   </div>
                </div>
            </article>
        </div>
    )
}
