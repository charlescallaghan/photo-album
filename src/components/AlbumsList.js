import * as React from 'react'

export default function AlbumsList(props) {
    return (<div>
        <h1>All Albums</h1>
        <h2>There are {props.albums.length} albums below:</h2>
        <ul>
            {props.albums.map(album =>
                <li key={album.id}>
                    {album.title}
                </li>
            )}
        </ul>

    </div>)
}