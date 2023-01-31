function Profile({onLogout, token}) {


    return(
        <>
            <h1>Profile</h1>
            <p>{token}</p>
            <button onClick={onLogout}>logout</button>
        </>
    )
};

export default Profile;
