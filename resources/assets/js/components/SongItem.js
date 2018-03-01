import React, { Component } from 'react';

class SongItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, title, text } = this.props;
        return(
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        )
    }
}

export default SongItem