
const Welcome=(props)=>{
    const {name} = props;

    return(
    <div>
        <h1 className="welcome">Hello {name} Welcome!</h1>
    </div>)
};


export default Welcome;
