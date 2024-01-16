
import PropTypes from 'prop-types';

export default function Breadcrum(props) {
        const {product} = props;
        console.log(product);
    return (
        <div>
             <h2>Welcom</h2>   {product.category}
        </div>
    )
}

Breadcrum.propTypes = {
    product: PropTypes.object.isRequired
     
};
