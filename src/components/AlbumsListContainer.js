import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/AddAlbum'


class AlbumsListContainer extends React.Component {
    state = {}

    componentDidMount() {
        request('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
            response.body.map(al => this.props.addAlbum(al.id, al.title))
            })
        this.props.addAlbum(101, 'Enjoying sun')
        }
    
    render() {
        if (!this.props.albums) return 'Loading...'
        return <AlbumsList albums={this.props.albums} />
    }
}


const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}


export default connect(mapStateToProps, { addAlbum })(AlbumsListContainer)
