import Spinner from 'react-bootstrap/Spinner';

const Loader=()=>{
  return (
  <div className='d-flex justify-content-center'>
  <Spinner className="text-primary" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
  );
}

export default Loader;