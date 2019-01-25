import * as React from 'react'

export default function AlbumsList(props) {
    return (<div>
        <h1>All Albums</h1>
        <ul>
            {props.albums.map(album =>
                <li key={album.id}>
                    {album.title}
                </li>
            )}
        </ul>

    </div>)
}