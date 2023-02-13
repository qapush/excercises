import React from "react";

export default class Genres extends React.Component {
    render(){

        if(!this.props.genres){
            return 'select a movie to see it\'s genres...'
        }

        const genres = this.props.genres.map( genre => {
            console.log(genre);
            return <li key={genre.id} style={{backgroundColor: genre.color, display: 'block', margin: '0.2rem', padding: '3px'}}>{genre.name}</li>
        })

        return <ul style={{ display: 'flex', listStyle: 'none' }}>{genres}</ul>
    }
}