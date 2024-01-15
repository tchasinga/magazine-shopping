import PropTypes from 'prop-types';
import '../../index.css';

export default function Items(props) {
  return (
    <div className=''>
     
                <div className="mygridreponsive">
                    <div className="">
                        <div>
                            <img src={props.image} alt="" />
                        </div>

                        <div>
                            <p>{props.name}</p>
                        </div>

                        <div>
                            <p>{props.new_price}</p>
                        </div>

                        <div>
                            <p>{props.old_price}</p>
                        </div>
                    </div>   
                </div>
    </div>
  )
}


Items.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    new_price: PropTypes.string.isRequired,
    old_price: PropTypes.string.isRequired,
};
