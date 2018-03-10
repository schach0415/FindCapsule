'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
class ContentItem extends React.Component {
    render(){
        const content = this.props.content
        return (
            <div>
                <Link to={`/contents/${content.id}`}>
                    <img src={content.imageUrl} />
                </Link>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(ContentItem)
