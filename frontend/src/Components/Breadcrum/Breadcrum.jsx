
import PropTypes from 'prop-types';

export default function Breadcrum(props) {
    const {product} = props;
    console.log(product);
    return (
        <div>
        </div>
    )
}

Breadcrum.propTypes = {
    product: PropTypes.object.isRequired,
};