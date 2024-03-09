const UserProfile = (props) => {
  const { userDetails } = props;
  const { imageUrl, name, role } = userDetails;

  return (
    <div className="card p-3 m-3 d-flex flex-column bg-success align-items-center">
      <h1>{name}</h1>
      <p>{role}</p>
      <img src={imageUrl} className="w-25" alt="ImageUrl" />
      <button className="btn btn-primary m-3">Delete</button>
    </div>
  );
};

export default UserProfile;
