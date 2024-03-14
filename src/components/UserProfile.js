const UserProfile = (props) => {
  const { userDetails, deleteFun } = props;
  const { uniqueNo,imageUrl, name, role } = userDetails;

  const deleteItem=()=>{
    deleteFun(uniqueNo)
  }

  return (
    <div className="card p-3 m-3 d-flex flex-column bg-success align-items-center">
      <h1>{name}</h1>
      <p>{role}</p>
      <img src={imageUrl} className="w-25" alt="ImageUrl" />
      <button className="btn btn-primary m-3" onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default UserProfile;
