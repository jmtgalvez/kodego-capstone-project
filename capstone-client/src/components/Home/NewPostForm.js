import { useRef, useContext } from 'react';
import * as Api from '../api/post';
import { UserContext } from '../UserContext';

function NewPostForm({ loadPosts }) {
  const contentRef = useRef();

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = ev => {
    ev.preventDefault();
    const postData = {
      user_id: user.user_id,
      content: contentRef.current.value,
    }

    Api.addPost(postData)
      .then( result => {
        loadPosts();
      })
  }

  return (
    <div className='row p-2'>
      <div className='p-1 rounded-circle col-2'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </div>

      <div className='col-10'>
        <form onSubmit={handleSubmit}>
          <input className='form-control' type='text' name='content' id='content' placeholder='Share something?' ref={contentRef} />
          <hr />
          <button type='submit' className='btn btn-primary ms-auto'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default NewPostForm