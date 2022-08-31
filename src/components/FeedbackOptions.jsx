
import PropTypes from "prop-types"
import { Component } from "react"

export default class FeedbackOptions extends Component{


    render() {
        const {options, onLeaveFeedback} = this.props
        return (

            <div>
                <button onClick={onLeaveFeedback}>{options.GOOD}</button>
                <button onClick={onLeaveFeedback}>{options.NEUTERAL}</button>
                <button onClick={onLeaveFeedback}>{options.BAD}</button>
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func
}