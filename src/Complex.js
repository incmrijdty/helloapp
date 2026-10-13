import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Complex(props) {
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    function parseComplex(value) {
        const pattern = /^([+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+))\s*([+-])\s*[ij]\s*((?:\d+(?:[.,]\d*)?|[.,]\d+))$/i;
        const match = value.trim().match(pattern);

        if (!match) {
            return null;
        }

        const a = Number(match[1].replace(',', '.'));
        const b = Number(match[3].replace(',', '.')) * (match[2] === '-' ? -1 : 1);

        if (!Number.isFinite(a) || !Number.isFinite(b)) {
            return null;
        }

        return { a, b };
    }

    function calculateModulus() {
        setError('');
        setResult('');

        if (!props.value.trim()) {
            setError('Please enter a complex number.');
            return;
        }

        const number = parseComplex(props.value);

        if (!number) {
            setError('Invalid format. Use a format such as 3+j4 or 3+i4.');
            return;
        }

        const modulus = Math.hypot(number.a, number.b);
        setResult(`|z| = ${modulus}`);
    }

    function calculateReciprocal() {
        setError('');
        setResult('');

        if (!props.value.trim()) {
            setError('Please enter a complex number.');
            return;
        }

        const number = parseComplex(props.value);

        if (!number) {
            setError('Invalid format. Use a format such as 3+j4 or 3+i4.');
            return;
        }

        const { a, b } = number;
        const denominator = a * a + b * b;

        if (denominator === 0) {
            setError('Zero has no reciprocal.');
            return;
        }

        const real = a / denominator;
        const imaginary = -b / denominator;
        const sign = imaginary < 0 ? '-' : '+';

        setResult(
            `1/z = ${real} ${sign} ${Math.abs(imaginary)}i`
        );
    }

    return (
        <div>
            <h2>Complex Number Calculator</h2>

            <button onClick={calculateModulus}>
                Calculate modulus
            </button>

            <button onClick={calculateReciprocal}>
                Calculate reciprocal
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result && <p>{result}</p>}
        </div>
    );
}

Complex.propTypes = {
    value: PropTypes.string.isRequired
};

export default Complex;