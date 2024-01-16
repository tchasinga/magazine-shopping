import PropTypes from 'prop-types';



export default function Displaydetails(props) {
    const { product } = props;
  return (
    <div className='productdisplay'>
    </div>
  )
}


Displaydetails.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        // Add other properties if there are more in the actual structure
    }).isRequired,
};