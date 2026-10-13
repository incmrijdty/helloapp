import React from 'react';
import PropTypes from 'prop-types';

function Power(props) {
    const x = Number(props.x);
    const y = Number(props.y);

    if (props.x === '' || props.y === '' || !Number.isFinite(x) || !Number.isFinite(y)) {
        return <p>Please enter two valid real numbers.</p>;
    }

    const result = Math.pow(x, y);

    if (!Number.isFinite(result)) {
        return <p>The result is not a finite real number.</p>;
    }

    return (
        <p>
            Result: {x}^{y} = {result}
        </p>
    );
}

Power.propTypes = {
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Power;