import React, {useState, useEffect} from 'react'
import axios from "axios";
import Image from '../components/image'


const Images = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
// Make a request for a user with a given ID
        axios.get('https://boiling-refuge-66454.herokuapp.com/images')
            .then(function (response) {
                // handle success
                setIsLoaded(true);
                setItems(response.data)
            })
            .catch(function (error) {
                // handle error
                setIsLoaded(true);
                setError(error);
            })
            .then(function () {
                // always executed
            });
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={'container'}>
                <div className="row">
                    {items && (
                        items.map((item, key) =>
                            <Image id={item.id} url={item.url} key={key}/>
                        )
                    )}
                </div>
            </div>
        )
    }
};

export default Images