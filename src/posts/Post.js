import React from 'react';


class Post extends React.Component {
    render() {
        return (
            <div className="Post__item">
                <div className="Post__item-title">
                    {this.props.item.title}
                </div>
                <div className="Post__item-text">
                    {this.props.item.text}
                </div>
                <div className="Post__item-buttons">
                    <button 
                        className={this.props.item.liked ? 'liked' : ''}
                        onClick={() => this.props
                            .onLikedClicked(this.props.item.id)}>
                        {this.props.item.liked ? 'Liked' : 'Like!'}    
                    </button>
                </div>
            </div>
        );
    }
}

export default Post;