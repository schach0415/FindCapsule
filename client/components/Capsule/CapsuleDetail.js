'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCapsule } from '../../store'
// import { ContentList } from '../'

/**
 * COMPONENT
 */
class CapsuleDetail extends React.Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchCapsule()
    }

    render(){
        const capsule = this.props && this.props.capsule
        return (
            <div>
                <div>
                    <div>
                        <h1>{capsule.name}</h1>
                        <Link to={`/capsules/${capsule.id}/capsule-edit`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <Link to={`/capsules/${capsule.id}/content-create`}>
                                <button>Put Content</button>
                            </Link>
                            <img src={capsule.imageUrl}/>
                            {/* <ContentList /> */}
                        </div>
                        <div>
                            <div>
                                <h3>Location</h3>
                                <button>Clear All</button>
                            </div>
                            <span>Map has to be here</span>
                            <div>
                                <form onSubmit={this.onSubmit} >
                                    <button>Ramdom</button>
                                    <input />
                                </form>
                            </div>
                        </div>
                    </div>
                    <p>Activate Date : {capsule.activateDate}</p>
                    <h4>{capsule.description}</h4>
                </div>
            </div>
        )
    }

    onSubmit(evt){
        evt.proventDefault()
        // const { }
    }
}

/**
 * CONTAINER
 */
const mapState = ({ capsule }) => {
    return {
        capsule
    }
}

const mapDispatch = (dispatch, ownProps) => {
    const paramId = ownProps.match.params.CapsuleId
    return {
        fetchCapsule: () => dispatch(fetchCapsule(paramId))
    }
}

export default connect(mapState, mapDispatch)(CapsuleDetail)
