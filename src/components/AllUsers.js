import UserProfile from "./UserProfile";
const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

const AllUsers = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column jutify-content-center align-items-center ">
          {userDetailsList.map((eachItem) => (
            <UserProfile key={eachItem.uniqueNo} userDetails={eachItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
