import React from 'react';


class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            loadFilms: false,
            loadPeople: false,
            info: []
        }
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(obj => {

                this.setState({ info: [...obj] })
                console.log(this.state.info);
            })

    }
    handleClickDisplayMovie() {
        this.setState({
            loadFilms: true,
            loadPeople: false
        })
    }
    handleClickClearFilms() {
        this.setState({
            loadFilms: false,
            loadPeople: false
        })
    }

    render() {

        if (this.state.loadFilms === true) {
            return (
                <div>
                    <div style={{ margin: '25px' }}>
                        <button className="btn btn-primary mb-4" onClick={() => this.handleClickClearFilms()}>Clear Films</button>
                    </div>


                    {this.state.info.map((x) => {
                        return (
                            <div key={x.id} className="card border-info mb-3" style={{ maxWidth: '50rem' }}>
                                <div className="card-header">{x.title}
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Directed by {x.director}</h4>
                                    <p className="card-text">{x.description}</p>
                                </div>
                                </div>
                        )
                    })}
                </div>

            )
        } else {

            return (
                <div style={{margin: '25px'}}>
                    <div>
                        <button className="btn btn-primary mb-4" onClick={() => this.handleClickDisplayMovie()}>Load Films</button>
                    </div>

                </div>
            )
        }







    }
}

export default Cards;