import React, { FC } from 'react';
import { IPosts } from '../../store/types/IPosts';

interface PostItemProps {
    post: IPosts;
    remove: (post: IPosts) => void;
    edit: (post: IPosts) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, edit}) => {

    const handleEdit = () => {
        const title = prompt();

        if (title) {
            edit({
                ...post,
                title
            })
        }
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        remove(post);
    };

    return (
        <div className="post" onClick={handleEdit}>
            {post.id}. {post.title}
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default PostItem;