import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


const EditPost = (props) => {
    const { posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle } = props;

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.title);
        }
    }, [post, setEditBody, setEditTitle])
    return (
        <main className='NewPost'>
            <h1>Edit post</h1>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title</label>
                        <input type="text"
                            id='postTitle'
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post</label>
                        <textarea id="postBody"
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <Link to="/">Visit Our HomePage</Link>
                </>
            }
        </main>
    )
}

export default EditPost
