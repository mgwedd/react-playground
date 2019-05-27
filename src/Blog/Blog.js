import React, { Component } from 'react';
import './Blog.css';
import { Route } from 'react-router-dom';
import {posts} from './posts';

const BlogContext = React.createContext();

export default class Blog extends Component {

    state = {
        posts: posts
    }
    
    render() {
        const contextValue = {
            posts: this.state.posts
        }

        return (
            <>
                <BlogContext.Provider value={ contextValue }>
                    <Route 
                        path={["/posts/:postId", "/"]}
                        children={ConnectedSidebar}/>
                    <Route 
                        path={["/posts/:postId", "/"]}
                        children={ConnectedMain}/>
                </BlogContext.Provider>
            </>
        );
    }
}

function Sidebar( props ) {
    const { posts, match } = props;
    const activePostId = match.params.postId;
    return (
        <div className="sidebar">
            <ul>
                {posts.map( ( post ) => {
                    return (
                        <>  
                            <li>
                                <a href={`/posts/${ post.id }`}>
                                    <h2>{ post.title }{post.id == activePostId && '*'}</h2>
                                </a>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
}

function Main( props ) {
    const { posts, match } = props;
    const fullPost = posts.find(( post ) => post.id == match.params.postId );
    console.log( match );
    return fullPost ? (
            <div>
                <h2>{ fullPost.title }</h2>
                <p>{ fullPost.content }</p>
            </div>
        ) : null;
}

function ConnectedSidebar( props ) {
    return (
        <BlogContext.Consumer>
        { ( contextValue ) => < Sidebar posts={ contextValue.posts } match={ props.match }/>}
        </BlogContext.Consumer>
    );
}

function ConnectedMain( props ) {
    return (
        <BlogContext.Consumer>
        { ( contextValue ) => < Main posts={ contextValue.posts } match={ props.match } />}
        </BlogContext.Consumer>
    );
}
// const fullPost = posts.find(( post ) => post.id === this.state.selectedPostId );


/*


*/