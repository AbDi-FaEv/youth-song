import React, { Component } from 'react';

import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { songs: []}
    }

    componentDidMount() {
        // TODO REDUX
        axios
            .get('/api/songs')
            .then(response => this.setState({ songs : response.data}))
            .catch(error => console.log(error));
    }
    render() {
        let songs = this.state.songs.map( (song) => (
            <div className='song' key={song.id}>
                <h1>{song.title}</h1>
                <p>{song.text}</p>
            </div>
        ));
        return (
            <div>
                { songs }
            </div>
        );
    }
}

export default App;
