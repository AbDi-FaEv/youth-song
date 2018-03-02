import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Search extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TextField
                hintText="Введите текст"
                floatingLabelText="Поиск по заглавию"
                onChange={this.props.filterList}
            />
        )
    }
}

export default Search