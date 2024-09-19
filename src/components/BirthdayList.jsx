import { useEffect, useState } from 'react';
import '../css/Birthday.css'
import Birthday from './Birthday';
import data from '../data'

const BirthdayList = () => {
    const [birthdays, setBirthday] = useState(data)

    useEffect(() => {
        
    }, []);

    return ( 
        <>
            <div className="birthdayContainer">
                <h1>5 Birthdays Today</h1>
                {birthdays.map((birthday) => (
                    <Birthday 
                    name={birthday.name}
                    age={birthday.age}
                    image={birthday.image}
                    key={birthday.id}
                    />
                ))}
                <button className="button" onClick={() => setBirthday()}>Clear all</button>
            </div>
        </>
     );
}
 
export default BirthdayList;