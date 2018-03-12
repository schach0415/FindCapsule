'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCapsule } from '../../store'
import { ContentList } from '../'

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
                    <div className="center" >
                        <h1>{capsule.name}</h1>
                        <Link to={`/capsules/${capsule.id}/capsule-edit`}>
                            <button>Edit</button>
                        </Link>
                        <Link to={`/events/${capsule.eventId}`}>
                            <button>Back to Event</button>
                        </Link>
                    </div>
                    <div className="line-up" >
                        <div className="for-one" >
                            <div>
                                <Link to={`/capsules/${capsule.id}/content-create`}>
                                    <img className="single-img" src={capsule.imageUrl}/>
                                </Link>
                            </div>
                            <div>
                                <ContentList
                                    contents={capsule.contents}
                                    capsuleId={capsule.id}
                                />
                            </div>
                        </div>
                        <div className="for-one" >
                            <div className="center">
                                <h3>Location</h3>
                                <button>Clear All</button>
                            </div>
                            <span>
                                Real Map has to be here
                                <img className="fake-img2 toRight" src="http://1.bp.blogspot.com/_44RI0nPmmYg/S1Kj1WdvXiI/AAAAAAAAAWY/xf8JlG1lWQg/s320/wallstreet+map.png" />
                            </span>
                            <div>
                                <form onSubmit={this.onSubmit} >
                                    <button>Ramdom</button>
                                    <input />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="center" >
                        <h3>Activate Date : {capsule.activateDate}</h3>
                    </div>
                    <div className="center" >
                        <h4>Description : {capsule.description}</h4>
                    </div>
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
    const paramId = ownProps.match.params.capsuleId
    return {
        fetchCapsule: () => dispatch(fetchCapsule(paramId))
    }
}

export default connect(mapState, mapDispatch)(CapsuleDetail)
