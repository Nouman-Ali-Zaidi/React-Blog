import React from 'react'

const NewPost = (props) => {
    const { handlePostSubmit, postBody, setPostBody, postTitle, setPostTitle } = props;
    return (
        <main className='NewPost'>
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handlePostSubmit}>
                <label htmlFor="postTitle">Title</label>
                <input type="text"
                    id='postTitle'
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post</label>
                <textarea id="postBody"
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}

export default NewPost
