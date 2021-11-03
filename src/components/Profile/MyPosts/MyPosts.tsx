import { PostsDataType } from '../Profile';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
    postsData: Array<PostsDataType>
}

function MyPosts(props: MyPostsType) {

    let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;