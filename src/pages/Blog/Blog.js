import React from 'react';
import { Container } from 'react-bootstrap';
import BlogSummery from '../BlogSummery/BlogSummery';
import './Blog.css';
import About from '../Home/About/About';
import Header from '../Shared/Header/Header';

const Blog = () => {
    document.title = 'Blog';
    const blogs = [
        {
            "id": "01",
            "img": "https://i.imgur.com/8byIwOq.jpg",
            "title": "Some Tricky Things of javascript.",
            "description": "Javascript has some tricky things. Sometimes they are confused us. That's an important need to learn every developer. ...",
            "course": "Javascript",
            "date": "Nov 5 2020",
        },
        {
            "id": "02",
            "img": "https://miro.medium.com/max/700/1*yjH3SiDaVWtpBX0g_2q68g.png",
            "title": "React is not Perfect ?",
            "description": "React is the most popular Javascript library. Today I will try to introducing react and something which is relevant to r...",
            "course": "Javascript,React",
            "date": "Nov 4 2020",
        },
        {
            "id": "03",
            "img": "https://i.imgur.com/8byIwOq.jpg",
            "title": "Javascript Es6",
            "description": "Javascript Data types, Object & Function,Expression,try & catch,Cache Storage.Cross Browser Testing and Es6....",
            "course": "Javascript Es6",
            "date": "Nov 3 2020",
        },
        {
            "id": "04",
            "img": "https://miro.medium.com/max/640/1*ZFQubQrMREWiMBB_nCXrBw.jpeg",
            "title": "Javascript String, Number & Array",
            "description": "String, Number, and Array are important things in every programming language....",
            "course": "Javascript",
            "date": "Nov 2 2020",
        },
        {
            "id": "05",
            "img": "https://miro.medium.com/max/700/0*ok51b2bP1XoBNDbs",
            "title": "About the javascript Variable Declaration.",
            "description": "Javascript have 3 different word, which is a reserve for declaring a variable. These 3 types have 3 different meanings....",
            "course": "Javascript es6",
            "date": "August 18 2020",
        },
        {
            "id": "06",
            "img": "https://i.imgur.com/8byIwOq.jpg",
            "title": "About Javascript Starting.",
            "description": "we know js are the most important things for developing software. So we must be needed to know javascript....",
            "course": "Javascript es6",
            "date": "July 29 2020",
        }
    ];
    return (
        <>  
            <Header></Header>
            <Container id="blog">
                <h2 className="text-center" style={{paddingTop: "5rem"}}>WELCOME IN <span style={{color: "#e04641"}}>MY BLOG</span></h2>
                <p className="text-center text-muted pb-5">My blog Sit Amet Consectetur Adipisicing Elit. Adipisci, <br/> Tempore. At Illo Aspernatur Soluta Ullam, Earum Sint Maxime <br/> Tempora Reprehenderit.</p>

                <div className="blog-container">
                    {
                        blogs?.map(blog => <BlogSummery blog={blog} key={blog.id}></BlogSummery>)
                    }
                </div>
            </Container>
            <div className="mt-5">
                <About></About>
            </div>
        </>
    );
};

export default Blog;