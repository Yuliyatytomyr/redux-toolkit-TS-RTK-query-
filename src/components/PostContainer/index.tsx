import React, { useEffect, useState } from 'react';
import PostItem from '../PostItem';
import { postAPI } from '../../store/services/PostService';
import {IPosts} from '../../store/types/IPosts';

const PostContainer = () => {
    const [ limit, setLimit ] = useState(100);
    const { data: posts, isLoading, error, refetch } = postAPI.useFetchAllPostsQuery(
        limit,
        // send new request every 2s
        // {
        //     pollingInterval: 2000
        // }
    );

    const [createPost, {isLoading: isCreatePostLoading}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(prevState => prevState + 10)
    //     }, 2000)
    // }, []);

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPosts);
    };

    const handleRemove = (post: IPosts) => {
        deletePost(post)
    };

    const handleUpdate = (post: IPosts) => {
        updatePost(post);
    };

    return (
        <div>
            <div className="post__list">
                <button onClick={() => refetch()}>Refetch</button>
                <button onClick={() => handleCreate()}>Add new post </button>
                {
                    isLoading
                        ? 'Loading...'
                        : error
                        ? 'error'
                        : posts && posts.map(post =>
                        <PostItem
                            key={post.id}
                            post={post}
                            remove={handleRemove}
                            edit={handleUpdate}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default PostContainer;