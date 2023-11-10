import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import "./layout.css"

const Layout = () => {

let [본문내용, 본문내용변경] = useState('Welcome to LAB29');

function clickAbout() {
    본문내용변경('Welcome to About Page');
}

function clickContact() {
    본문내용변경('Welcome to Contact Page');
}
    return (
        <div className="layout">
            <Header />
            <main className="main">
                <button onClick={ clickAbout }>About</button>
                <button onClick={ clickContact }>Contact</button>
            <h2>{ 본문내용 }</h2>
            </main>
            <Footer />
        </div>
    )
}

export default Layout