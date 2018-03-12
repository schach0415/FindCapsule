'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addContent } from '../../store'

/**
 * COMPONENT
 */
class ContentCreate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            note: '',
            item: '',
            capsuleId: this.props.capsuleId,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71LBzkFvu4L.png',
            contentType: 'sound'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.imgUrlSetup = this.imgUrlSetup.bind(this)
    }

    imgUrlSetup(type){
        const imgUrl = {
            sound: 'https://images-na.ssl-images-amazon.com/images/I/71LBzkFvu4L.png',
            video: 'http://icons.iconarchive.com/icons/thiago-silva/palm/256/Videos-icon.png',
            image: 'https://lh4.ggpht.com/IUGyMkcN05UQkDnLfsYvvGN_vWqldsNeQ2YWztQoIOzgXINt6u1uYq8IEHT_HkMN2w',
            letter: 'https://guiraudaudrey-podologue.fr/wp-content/uploads/2016/10/parcheminplume3_zps2120dfdf.png',
            coupon: 'https://www.sheerid.com/wp-content/uploads/2013/11/coupon-envelope.png',
            bitcoin: 'http://pngriver.com/wp-content/uploads/2017/12/download-Bitcoin-symbol-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-bitcoin-006.png',
            website: 'http://www.3datx.com/wp-content/uploads/2014/10/service-icon.png',
            ticket: 'http://www.bruno-cammareri.com/wp-content/uploads/2016/02/ticket-icon.png',
            findCapsule: 'https://pbs.twimg.com/profile_images/378800000729324992/a4279e519e5ae9f2998339f1c1fb06f1_400x400.png'
        }
        const imageUrl = imgUrl[type]
        this.setState({ imageUrl })
    }

    render(){
        const contentType = [
            'sound',
            'video',
            'image',
            'letter',
            'coupon',
            'bitcoin',
            'website',
            'ticket',
            'findCapsule'
        ]
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="center" >
                        <h3>
                            Content Title : 
                            <input
                                onChange={evt =>
                                    this.setState({ title: evt.target.value })
                                }
                                name="title"
                                required
                                placeholder="Content Title"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <img className="single-img" src={this.state.imageUrl} />
                    </div>
                    <div className="center" >
                        <h3>
                            Content Type : 
                            <select onChange={evt => {
                                    this.setState({ contentType: evt.target.value })
                                    this.imgUrlSetup(evt.target.value)
                                }}
                            >
                                {
                                    contentType.map(type => (
                                        <option key={type}>{type}</option>
                                    ))
                                }
                            </select>
                        </h3>
                    </div>
                    <div className="center" >
                        <h3>
                            Content Item : 
                            <input
                                onChange={evt =>
                                    this.setState({ item: evt.target.value })
                                }
                                name="item"
                                required
                                placeholder="URL address for now"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <h3>
                            Content Note : 
                            <textarea
                                onChange={evt =>
                                    this.setState({ note: evt.target.value })
                                }
                                name="note"
                                required
                                placeholder="Give detail about this Content"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <button>Add Content</button>
                    </div>
                </form>
            </div>
        )
    }

    handleSubmit(evt){
        evt.preventDefault()
        const { addContent } = this.props
        addContent(this.state)
    }
}

/**
 * CONTAINER
 */
const mapState = (state, ownProps) => {
    const capsuleId = !ownProps.match.params.capsuleId ? null : Number(ownProps.match.params.capsuleId)
    return { capsuleId }
}

const mapDispatch = (dispatch) => ({
    addContent: (content) =>
        dispatch(addContent(content)
    )
})

export default connect(mapState, mapDispatch)(ContentCreate)
