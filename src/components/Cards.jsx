import React from 'react';
import logo from '../logo.png'


class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            loadFilms: false,
            loadPeople: false,
            movieInfo: [],
            peopleInfo: []
        }
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(obj => {

                this.setState({ movieInfo: [...obj] })
                
            })
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(obj => {
                this.setState({ peopleInfo: [...obj]})
            })    
    }
    handleClickDisplayMovie() {
        this.setState({
            loadFilms: true,
            loadPeople: false
        })
    }
    handleClickDisplayPeople() {
        this.setState({
            loadFilms: false,
            loadPeople: true
        })
    }
    handleClickClearFilms() {
        this.setState({
            loadFilms: false,
            loadPeople: false
        })
    }

    render() {

        let renderMovieInfo = (
            this.state.movieInfo.map((x) => {
                    return (
                        <div key={x.id} className="card border-info mb-3" style={{ minWidth: '35rem' }}>
                            <div className="card-header">Film Title: {x.title}
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Directed by {x.director}</h4>
                                <p className="card-text">{x.description}</p>
                            </div>
                        </div>
                    )
                })
        );

        let renderPeopleInfo = (
            
                this.state.peopleInfo.map((person) => {

                    return (
                        <div key={person.id} className="card border-primary mb-3" style={{ minWidth: '20rem' }} >
                            <div className="card-header">{person.id}</div>
                            <div className="card-body">
                                <h4 className="card-title">{person.name}</h4>
                                <p className="card-text" >{person.age}, {person.gender}
                                    <button style={{ marginLeft: '25px' }} className="btn btn-primary" onClick={() => window.open(person.url)}>Open Info</button></p>
                            </div>
                        </div>
                    )
                })
        );

   

            return (
                <div style={{margin: '25px'}}>
                <div style={{textAlign: 'center', marginBottom: '35px'}}>
                    <img src={logo} alt=""/>
                </div>
                    <div style={{ textAlign: 'center' }}>
                        <button style={{marginRight: '10px'}} className="btn btn-primary mb-4" onClick={() => this.handleClickDisplayMovie()}>Load Films</button>
                        <button className="btn btn-primary mb-4" onClick={() => this.handleClickDisplayPeople()}>Load People</button>
                        <button style={{ marginLeft: '10px' }} className="btn btn-primary mb-4" onClick={() => this.handleClickClearFilms()}>Clear</button>
                    </div>
                    {this.state.loadFilms ? renderMovieInfo : ""   }
                    {this.state.loadPeople ? renderPeopleInfo : ""}
                
                   

                </div>
            )
        }







    }


export default Cards;