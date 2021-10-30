import React from 'react'
import Sidebar from './Sidebar';
import Content from './Content';
import Widgets from './Widgets';

const Container = () => {
    return (
        
        <div className="min-h-screen max-w-7xl mx-auto flex ">
            <Sidebar/>
            <Content/>
            <Widgets/>
        </div>
    )
}

export default Container
