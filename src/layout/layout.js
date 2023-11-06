import React from 'react';
import Header from './header';
import Footer from './footer';
import "./layout.css"

const Layout = () => {

    return (
        <div className="layout">
            <Header />
            <main className="main">
            <h2>레이아웃</h2>
            </main>
            <Footer />
        </div>
    )
}

export default Layout