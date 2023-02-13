
import React from 'react';

export default class List extends React.Component {
    render(){

        let movies;

        if(this.props.movies){
            movies = this.props.movies.map( movie => {

                return (
                    <li 
                        key={movie.id}
                        onClick={() => this.props.onClick(movie.properties.Genre.multi_select)}
                    >{movie.properties.Title.title[0].plain_text}</li>
                )
             })
        }

        
        return (

           
            <ul>
                { movies }
            </ul>
           
          
        )
    }
}