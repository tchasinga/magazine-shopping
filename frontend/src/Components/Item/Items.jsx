import PropTypes from 'prop-types';
import '../../index.css';

export default function Items(props) {
  return (
    <div className=''>
     
                <div className="mygridreponsive bg-slate-400 ">
                    <div className="">
                        <div>
                            <img src={props.image} alt="" />
                        </div>

                        <div className="p-3">

                        <div>
                            <p>{props.name}</p>
                        </div>

                       <div className="flex gap-2">
                       <div>
                            <p>{props.new_price}</p>
                        </div>

                        <div className='line-through'>
                            <p>{props.old_price}</p>
                        </div>
                       </div>

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
