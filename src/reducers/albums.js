import { ADD_ALBUM } from '../actions/AddAlbum'

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_ALBUM:
            const albuminfo = action.payload
            return [...state, albuminfo]
        default:
            return state
    }
}