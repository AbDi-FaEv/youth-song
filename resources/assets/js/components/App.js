import React, { Component } from 'react';
import axios from 'axios';

import Search from './Search';
import SongList from "./SongList";

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
        return (
            <div>
                <Search />
                <SongList songs={this.state.songs}/>
            </div>
        );
    }
}

export default App;
