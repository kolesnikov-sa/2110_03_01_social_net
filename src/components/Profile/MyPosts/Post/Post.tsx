import s from './Post.module.css';

function Post(props: any) {
    console.log(props.message);

    return (
        <div>
            <img className={s.avatar} src="https://pickaface.net/gallery/avatar/unr_sample_170130_2257_9qgawp.png"
                 alt="avatar"/>
            <div>{props.message}</div>
            <div>{props.likesCount} likes</div>
        </div>
    );
}

export default Post;