import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/AddAlbum'
import { setAlbums } from '../actions/setAlbums'

const sleep = time => new Promise(
    resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

class AlbumsListContainer extends React.Component {
    // state = {}

    componentDidMount() {
        request('https://jsonplaceholder.typicode.com/albums')
        // .then(response => {
        //     response.body.map(al => this.props.addAlbum(al.id, al.title))
        //     })
        .then(response => this.props.setAlbums(response.body))
        // sleep(2000)
        //     .then(message => this.props.setAlbums([
        //         {
        //             id: 1,
        //             title: message
        //         },
        //         {
        //             id: 2,
        //             title: 'This is the second album'
        //         },
        //         {
        //             id: 3,
        //             title: 'The last album'
        //         }
        //     ]))
    }

    // this.props.addAlbum(101, 'Enjoying the sunshine')
    // this.props.addAlbum(102, 'Why does it always rain on me?')

    render() {
        // console.log(this.props) - test
        if (!this.props.albums) return 'Loading...'
        return <AlbumsList albums={this.props.albums} />
    }
}


const mapStateToProps = (state) => {
    // console.log(state.albums) - test
    return {
        albums: state.albums
    }
}


export default connect(mapStateToProps, { setAlbums })(AlbumsListContainer)