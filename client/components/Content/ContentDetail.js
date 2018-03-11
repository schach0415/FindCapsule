'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchContent } from '../../store'

/**
 * COMPONENT
 */
class ContentDetail extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchContent()
    }

    render(){
        const content = this.props && this.props.content
        return (
            <div>
                <div>
                    <div>
                        <h1>{content.title}</h1>
                        <Link to={`/contents/${content.id}/content-edit`}>
                            <button>Edit</button>
                        </Link>
                        <Link to={`/capsules/${content.capsuleId}`}>
                            <button>Back to Capsule</button>
                        </Link>
                    </div>
                    <img src={content.imageUrl}/>
                    <img src={content.item} />
                    <h3>Type : {content.contentType}</h3>
                    <h4>Note : {content.note}</h4>
                </div>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = ({ content }) => ({ content })

const mapDispatch = (dispatch, ownProps) => {
    const paramId = ownProps.match.params.contentId
    return {
        fetchContent: () => dispatch(fetchContent(paramId))
    }
}

export default connect(mapState, mapDispatch)(ContentDetail)
