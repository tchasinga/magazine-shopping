import PropTypes from 'prop-types';

export default function Breadcrum(props) {
    const { product } = props;
    console.log(product);
    return (
        <div>
            {product ? (
                <div className='flex gap-2 items-center text-sm text-slate-950'>
                    <div>
                        <a href='/' className='hover:underline'>Home</a>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div>
                        <a href='/product' className='hover:underline'>Product</a>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div>
                        <a href='/product' className='hover:underline'>{product.name}</a>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

Breadcrum.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        // Add other properties if there are more in the actual structure
    }).isRequired,
};
