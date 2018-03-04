import React, { Component } from 'react';
import axios from 'axios';

import Search from './Search';
import SongList from "./SongList";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            filteredSongs: []
        }
        this.filterList = this.filterList.bind(this)
    }
    filterList(e) {
        let filteredList = this.state.songs.filter(function(item){
            return item.title.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        this.setState({filteredSongs: filteredList});
    }
    componentDidMount() {
        // TODO REDUX
        axios
            .get('/api/songs?search=')
            .then(response => this.setState({ songs : response.data, filteredSongs:response.data}))
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <Search filterList={this.filterList}/>
                <SongList songs={this.state.filteredSongs}/>
            </div>
        );
    }
}

export default App;
