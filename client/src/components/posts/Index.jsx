import {React, useEffect, useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import {useSelector, useDispatch} from 'react-redux'
import {reset, posts} from '../../features/posts/postSlice'
import Content from "./Content";
import Button from "../../Design/Button";
import CreatePostModal from "./CreatePostModal";





const Index = () => {

  const dispatch = useDispatch()
  const [postId, setPostId] = useState(); 
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    dispatch(posts())
  },[]);
  
  const post = useSelector((state) => state.posts)

  
  return (
    <>
    {/* Sidebar */}
    <Sidebar posts={post.posts} setPostId={setPostId} postId={postId} />
    {console.log("ididididi", postId)}
    <div className="relative h-screen p-2 md:ml-80 bg-blueGray-100">
      
      {/* Create Post Button */}
      <div>
        <Button title="Create post" onClick={setShowModal}  />
      </div>

      {/* Content of the post */}
      {post.posts.map((item, key) => (
        item.id === postId   && <Content title={item.title} body={item.body}  /> 
      ))}

      {/* Modal */}
      {showModal ? (
        <>
        <CreatePostModal setShowModal={setShowModal} />
        </>
      ) : null}

    </div>
  </>
  )
}

export default Index