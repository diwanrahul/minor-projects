/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */




export default function User({user}){

    const {avatar_url, following, followers, public_repos, name, login, created_at} = user;

    const createdDate = new Date(created_at);
    return(
        <div>
            <div>
                <img src={avatar_url} alt="User" className="avatar"/>
            </div>
            <div>
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>User Joined on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-in', {
                    month:"short"
                })} ${createdDate.getFullYear()}`}</p>
            </div>
        </div>
    )
}