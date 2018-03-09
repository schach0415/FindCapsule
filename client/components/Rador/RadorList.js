'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
class RadorList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const radors = this.props.radors
        return (
            <div>
                {
                    !radors ?
                    this.renderWithoutRador() : this.renderWithoutRador()
                }
            </div>
        )
    }

    renderWithoutRador(){
        return (
            <div>
                <h2>Radors</h2>
                <Link to="/rador-create">
                    <button>Add Rador</button>
                </Link>
            </div>
        )
    }

    renderWithRador(){
        return (
            <div>
                <div>
                    <h2>Radors</h2>
                    <Link to="/rador-create">
                        <button>Add Rador</button>
                    </Link>
                </div>
                <div>
                    {
                        Radors
                            .reduce((accu, curr) =>
                                accu.slice(-1)[0].name !== curr.name,
                                []
                            )
                            .map(rador => (
                                <div key={rador.id}>
                                    <div>
                                        <img src={rador.imageUrl}/>
                                        <h4>{rador.name}</h4>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(RadorList)
