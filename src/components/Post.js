import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

// import axios from 'axios';

class Post extends Component {
    // state = {
    //     post: null
    // };

    // componentDidMount() {
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then((response) => {
    //             this.setState({
    //                 post: response.data
    //             });
    //         });
    // }

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        // const post = this.state.post ? (
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>

                <button className="btn grey" onClick={this.handleClick}>Delete</button>
            </div>
        )
        : <div className="center">Loading&hellip;</div>

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find((post) => {
            return post.id === id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);