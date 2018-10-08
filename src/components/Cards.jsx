import React from 'react';


class Cards extends React.Component {
    constructor(){
        super();
        this.state = {
             info: []
        }
    }
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(obj => {
            
            this.setState({info: [...obj]})
            console.log(this.state.info);
        })
    
    }

    render() {
        return (
            <div>
                {this.state.info.map((x) => {
                    return (
                    <div key={x.id} className="card border-info mb-3" style={{maxWidth: '35rem'}}>
                        <div className="card-header">{x.title}</div>
                        <div className="card-body">
                            <h4 className="card-title">Directed by {x.director}</h4>
                            <p className="card-text">{x.description}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
        )

}
}

export default Cards;