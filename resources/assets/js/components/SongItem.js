import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class SongItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { id, title, text } = this.props;

        text = text.split('\n').map(function(item, key) {
            return (
                <span key={key}>
                    {item}
                    <br/>
                </span>
            )
        })

        return(
            <Card>
                <CardHeader
                    title={title}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {text}
                </CardText>
            </Card>
        )
    }
}

export default SongItem