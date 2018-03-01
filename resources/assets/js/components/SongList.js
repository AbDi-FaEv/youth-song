import React, { Component } from 'react';

import SongItem from './SongItem';

class SongList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let songs = this.props.songs.map( (song) => (
            <SongItem key={song.id}
                      id={song.id}
                      title={song.title}
                      text={song.text}
            />
        ));
        return (
            <div>
                <h1>Songs List</h1>
                { songs }
            </div>
        )
    }
}

export default SongList