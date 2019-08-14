import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    // state = {
    //     posts: []
    // };

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => {
    //             this.setState({
    //                 posts: response.data.slice(0, 10)
    //             });      
    //         });
    // }

    render() {
        console.log(this.props);
        // const { posts } = this.state;
        const { posts } = this.props;

        const postList = posts.length ? (
           posts.map((post) => {
               return (
                   <Link to={'/' + post.id} key={post.id} className="red-text">
                        <div className="post card" key={post.id}>
                            <img src={Pokeball} alt="A pokeball" />
                            <div className="card-content">
                                <span className="card-title">{ post.title }</span>
                                <p>{ post.body }</p>
                            </div>
                        </div>
                    </Link>
               )
           })
        ) : <div className="center">No posts yet</div>

        return (
            <div className="container">
                <h4 className="center">Home</h4>
                { postList }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);