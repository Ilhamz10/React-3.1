import React from "react";
import ReactDOM from "react-dom";
import './Wine.css'

class Wine extends React.Component {
    render() {
        const { title, description, rating, isInStock } = this.props
        let message = 'Not In Stock'
        if(isInStock){
            message = ''
        }
        return (
            <section>
                <div className="card">
                    <h1>{message}</h1>
                    <h2 className="name">{title}</h2>
                    <p className="description">{description}</p>
                    <p className="rating">{rating}</p>
                </div>
            </section>
        )
    }
}

export default Wine 