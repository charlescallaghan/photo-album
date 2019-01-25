import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { helloWorld } from '../actions/test'


class AlbumsListContainer extends React.Component {
    state = {}

    componentDidMount() {
        request('https://jsonplaceholder.typicode.com/albums')
        .then(response => this.setState({ albums: response.body }))
        this.props.helloWorld('Alice', 'Seriously Alice')
    }

    render() {
        if (!this.state.albums) return 'Loading...'
        return <AlbumsList albums={this.state.albums} />
    }
}

export default connect(null, { helloWorld })(AlbumsListContainer)
