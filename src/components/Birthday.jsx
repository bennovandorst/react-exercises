import '../css/Birthday.css'

const Birthday = ({name, age ,image}) => {
    return ( 
        <>
            <div className="profile">  
                <img src={image} alt="" className="pfp"/>
                <span>{name}</span>
                <div className="age">
                <span>{age} years</span>
                </div>
            </div>
        </>
     );
}
 
export default Birthday;