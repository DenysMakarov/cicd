import React, {useEffect} from 'react';
import {useGetUsersQuery} from "../store/api/app.api";
import {IUser} from "../models/models";

const UsersPage = () => {
    const {isLoading, data} = useGetUsersQuery()

    useEffect(() => {
        console.log(data)
    }, [data])

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            {
                data && data.map((user: IUser) => (
                    <div key={user.id}>
                        {user.name}
                    </div>
                ))
            }
        </div>
    );

    return (
        <div>
            
        </div>
    );
};

export default UsersPage;
