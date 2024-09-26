import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import backgroundImage from '../assest/background.png';
import registerIcons from '../assest/signin.gif';
import imageTobase64 from '../helpers/imageTobase64'

const Register = () => {
  const [data, setData] = useState({
    email: '',
    phone: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    profilePic: '',
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConFirmPassword] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', data);
    // Add form submission logic here
  };

  const handleUploadPic = async(e) => {
    const file = e.target.files[0]
    const imagePic = await imageTobase64(file)

    setData((preve) => {
      return{
        ...preve,
        profilePic: imagePic
      }
    })
    
  }
  const handleBack = () => {
    navigate('/');
  };

  console.log('data login', data);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative bg-white p-8 rounded-lg m-5 shadow-lg w-96 z-10">
        {/* Back Icon */}
        <FaArrowLeft
          className="absolute top-4 left-4 text-xl text-gray-500 cursor-pointer hover:text-black"
          onClick={handleBack}
        />

        <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
          <div>
            <img src={data.profilePic ||registerIcons} alt="register Icons" className="w-full h-full mix-blend-multiply" />
          </div>
          <form>
            <label>
              <div className='text-xs bg-opacity-80 bg-slate-200 pb-3 cursor-pointer text-center absolute bottom-0 w-full'>
                Tải ảnh
              </div>
              <input type='file' className='hidden' onChange={handleUploadPic} />
            </label>
          </form>

        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">Đăng ký</h2>
        <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-2">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email" 
              value={data.email} 
              onChange={handleOnChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Họ & tên</label>
            <input
              type="text" 
              name="fullName" 
              value={data.fullName} 
              onChange={handleOnChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
            <input
              type="tel" 
              name="phone" 
              value={data.phone} 
              onChange={handleOnChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <div className="flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password" 
                value={data.password} 
                onChange={handleOnChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm pr-10"
                required
              />
              <div
                className="absolute right-3 text-xl cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
            <div className="flex items-center">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword" 
                value={data.confirmPassword} 
                onChange={handleOnChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm pr-10"
                required
              />
              <div
                className="absolute right-3 text-xl cursor-pointer"
                onClick={() => setShowConFirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-600 mb-4"
          >
            Đăng ký
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-700">
            Bạn đã có tài khoản?{' '}
            <a href="/login" className="text-orange-500 hover:underline">
              Đăng nhập ngay!
            </a>
          </p>
        </div>
      </div>

      {/* Optional dark gradient background overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default Register;
