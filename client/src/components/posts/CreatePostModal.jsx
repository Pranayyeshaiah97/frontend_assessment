import {React, useState, useEffect} from 'react'
import {createPost , reset} from '../../features/posts/postSlice'
import { useSelector, useDispatch } from "react-redux";
import {toast} from 'react-toastify'

function CreatePostModal({setShowModal}) {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: "",
        desc: "",
      });

    //destructuring post state
    const { isError, isSuccess, message} = useSelector((state) => state.posts)


    useEffect(() => {
        if(isError){
          toast.error(message) // alert message to diplay error
        } 

        if(isSuccess && message){
            toast.success(message) // alert message to diplay when post is created
          }
    
        dispatch(reset())
      }, [isError, message, dispatch]);

    
    const {title, desc} = formData;

    const onChangeHandler = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    // on form submit
    const onSubmit = (e) => {
        e.preventDefault()
        const postData = {
            title, 
            desc
          }
        dispatch(createPost(postData))
        setShowModal(false) // close modal after post api is called
    }
 
  return (
    <>
            <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            {console.log("formData", formData)}
            <div className="relative w-3/6 mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">
                    Add post
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={onSubmit}>
                    {/*body*/}
                    <div className="relative flex-auto p-6">
                        <div className="relative w-full mb-3">
                        <label
                            className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                            htmlFor="grid-password"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                            placeholder="Enter title"
                            name="title"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        </div>
                        <div className="relative w-full mb-3">
                        <label
                            className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                            htmlFor="grid-password"
                        >
                            Description
                        </label>
                        <textarea
                            type="text"
                            className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                            placeholder="Description"
                            name="desc"
                            rows="5"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                    <button
                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                    <button
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                        type="submit"
                    >
                        Post
                    </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  )
}

export default CreatePostModal