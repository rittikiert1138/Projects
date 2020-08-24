import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alertAction';
import BackendLayout from '../../components/layouts/BackendLayout';
import { addProduct } from '../../redux/actions/productAction';
// import Alert from '../../components/layouts/alert';
import DummyImage from '../../assets/images/dummy.png';
import axios from 'axios';

const CreateRoom = ({ addProduct, history }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [formData, setFormData] = useState({
    file: '',
  });

  const [image, setImage] = useState({
    file: '',
    imagePreviewUrl: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (data) => {
    const formResult = new FormData();
    formResult.append('image', data.file[0]);
    formResult.append('roomname', data.roomname);
    formResult.append('roomaddress', data.roomaddress);
    formResult.append('roomdetail', data.roomdetail);

    const res = await axios.post(
      'http://localhost:5000/api/room/store',
      formResult
    );

    console.log(res.data);
  };

  const handleFile = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage({ imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const { pdname, pdprice } = formData;

  let { imagePreviewUrl } = image;

  return (
    <BackendLayout>
      {/* <Alert /> */}
      <div className='shadow-md bg-white'>
        <div className='bg-teal-400 h-16 pt-3 pl-4'>
          <h3 className='text-lg text-white mt-1'>Create Product</h3>
        </div>
        <div className='p-4'>
          <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-start-1 col-end-9'>
                <div className='mb-3'>
                  <label>Room Name</label>
                  <input
                    type='text'
                    className='border-black p-2 border block w-full mt-1 focus:outline-none'
                    ref={register}
                    name='roomname'
                    value={pdname}
                    onChange={onChange}
                  />
                </div>
                <div className='mb-3'>
                  <label>Address</label>
                  <input
                    type='text'
                    className='border-black p-2 border block w-full mt-1 focus:outline-none'
                    ref={register}
                    name='roomaddress'
                    value={pdprice}
                    onChange={onChange}
                  />
                </div>
                <div className='mb-3'>
                  <label>Detail</label>
                  <textarea
                    className='border-black border w-full mt-1 h-24 focus:outline-none p-2'
                    ref={register}
                    name='roomdetail'
                  ></textarea>
                </div>
              </div>
              <div className='col-start-9 col-end-13'>
                <label>Image</label>
                {imagePreviewUrl == '' ? (
                  <img src={DummyImage} className='w-full mt-1' />
                ) : (
                  <img src={imagePreviewUrl} className='w-full mt-1' />
                )}
                <input
                  type='file'
                  name='file'
                  className='mt-4'
                  ref={register({ required: true })}
                  onChange={(e) => handleFile(e)}
                />
                {/* <input ref={register} type="file" name="image" className="w-full mt-2" /> */}
              </div>
            </div>
            <div className='w-full mt-4'>
              <hr className='w-full' />
            </div>
            <div className='w-full mt-4 text-center'>
              <button className='w-48 h-10 text-white bg-teal-500 mx-2 '>
                Save
              </button>
              <Link to='/backend/room'>
                <button className='w-48 h-10 text-white bg-yellow-500 mx-2 '>
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </BackendLayout>
  );
};

CreateRoom.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, { setAlert, addProduct })(CreateRoom);

// import React from 'react'
// import axios from 'axios';

// class FileUpload extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             selectedFile: '',
//         }

//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event) {
//         this.setState({
//             selectedFile: event.target.files[0],
//         })
//     }

//     async submit() {
// const data = new FormData()
// data.append('file', this.state.selectedFile)
//         console.log(data)
//         // let url = "http://localhost:5000/api/room/store";

//         // axios.post(url, data, { // receive two parameter endpoint url ,form data
//         // })
//         //     .then(res => { // then print response status
//         //         console.log(res);
//         //     })

//     }

//     render() {
//         return (
//             <div>
//                 <div className="row">
//                     <div className="col-md-6 offset-md-3">
//                         <br /><br />

//                         <h3 className="text-white">React File Upload - Nicesnippets.com</h3>
//                         <br />
//                         <div className="form-row">
//                             <div className="form-group col-md-6">
//                                 <label className="text-white">Select File :</label>
//                                 <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
//                             </div>
//                         </div>

//                         <div className="form-row">
//                             <div className="col-md-6">
//                                 <button type="submit" className="btn btn-dark" onClick={() => this.submit()}>Save</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default FileUpload;
