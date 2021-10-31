import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

    let postsData = [
        {id: 1, message: 'Post 1', likesCount: 0},
        {id: 2, message: 'Post 2', likesCount: 10},
        {id: 3, message: 'Post 3', likesCount: 20},
        {id: 4, message: 'Post 4', likesCount: 30}
    ]

    let postsElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

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