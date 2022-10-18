import React from 'react';
import { Accordion } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Blog = () => {
    return (
        <div className='container mt-5 border border-info p-3 rounded'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><span className='fw-bold text-info'>What is the purpose of react router?</span></Accordion.Header>
                    <Accordion.Body>
                        React Router is a standard library for routing in React. It enables the navigation
                        among views of various components in a React Application, allows changing the browser
                        URL, and keeps the UI in sync with the URL.Let us create a simple application to
                        React to understand how the React Router works. The application will contain three
                        components: home component, about a component, and contact component. We will use
                        React Router to navigate between these components.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><span className='fw-bold text-info'>How does Context API works?</span></Accordion.Header>
                    <Accordion.Body>
                        The React Context API is a way for a React app to effectively produce global
                        variables that can be passed around. This is the alternative to "prop drilling"
                        or moving props from grandparent to child to parent, and so on. Context is also
                        touted as an easier, lighter approach to state management using Redux.
                        <br></br>
                        <br></br>
                        React.createContext() is all you need. It returns a consumer and a provider.
                        Provider is a component that as it's names suggests provides the state to its
                        children. It will hold the "store" and be the parent of all the components that
                        might need that store. Consumer as it so happens is a component that consumes and
                        uses the state.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><span className='fw-bold text-info'>What is useRef?</span></Accordion.Header>
                    <Accordion.Body>
                        useRef is like a “box” that can hold a mutable value in its .current property.
                        You might be familiar with refs primarily as a way to access the DOM. If you pass
                        a ref object to React with  , React will set its .current
                        property to the corresponding DOM node whenever that node changes.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;