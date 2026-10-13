import React from 'react';
import PropTypes from 'prop-types';

/*************************************************
This is the user-defined component 
It will be used in the main application
**************************************************/

function Message(props) {
    return (
        /* Just an HTML content */
        <div>
            {props.message}
        </div>
    );
}

Message.defaultProps = {
    message: "Hello to my first App!"
};

Message.propTypes = {
    message: PropTypes.string.isRequired
};

export default Message;