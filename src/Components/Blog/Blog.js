import React from 'react'; import "./Blog.css"

const Blog = () => {
    return (
        <div className='answer'><div>
            <h1>1. What is The purpose React Router?</h1>

            <h3> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</h3></div>
            <div>
                <h1>2. How does context Api works?</h1>

                <h3>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h3>

            </div>

            <div>
                <h1>3. What is useRef?</h1>

                <h3>useRef returns a mutable ref object whose current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.  This means you can assign any value to current property of useRef hook and update it without causing a re-render.</h3>
            </div>


        </div>
    );
};

export default Blog;