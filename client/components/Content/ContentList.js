'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ContentItem } from '../'

/**
 * COMPONENT
 */
class ContentList extends React.Component {
    constructor(props){
        super(props)
        this.renderWithContent = this.renderWithContent.bind(this)
    }

    render(){
        const contents = this.props.contents
        return (
            <div>
                {
                    !contents ?
                    null : this.renderWithContent()
                }
            </div>
        )
    }

    renderWithContent(){
        const contents = this.props.contents
        return (
            <div>
                <div>
                    {
                        contents
                            .map(content => (
                                <ContentItem
                                    key={content.id}
                                    content={content}
                                />
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

export default connect(mapState)(ContentList)
