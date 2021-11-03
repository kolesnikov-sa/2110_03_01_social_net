import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}

type ProfileType = {
    state: {
        postsData: Array<PostsDataType>
    }
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData}/>
        </div>
    );
}

export default Profile;