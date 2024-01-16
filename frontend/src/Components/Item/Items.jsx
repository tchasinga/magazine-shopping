import PropTypes from 'prop-types';
import '../../index.css';
import { Link } from 'react-router-dom';

export default function Items(props) {
  return (
    <div className=''>
     
                <div className="flex flex-col bg-slate-200 justify-center items-center">
                    <div className="flex justify-center items-center flex-col">
                       
                    
                       <div>
                          <Link to={`/product/${props.id}`}>
                            <img src={props.image} alt="" className='object-fill'/>
                            </Link>
                        </div>
                        

                        <div className="p-3">

                        <div className='text-slate-950 text-sm font-medium'>
                            <p>{props.name}</p>
                        
                        </div>

                       <div className="flex gap-2 ">
                       <div className='text-green-700 font-bold'>
                            <p>${props.new_price}</p>
                        </div>

                        <div className='line-through text-red-700 font-bold'>
                            <p>{props.old_price} $</p>
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
    id: PropTypes.number.isRequired,
};
