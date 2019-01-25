import { ADD_ALBUM } from '../actions/AddAlbum'
import { SET_ALBUMS } from '../actions/setAlbums'


export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_ALBUM:
            return [...state, action.payload]
        case SET_ALBUMS:
            return [...action.payload]
        default:
            return state
    }
}