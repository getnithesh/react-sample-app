import React from 'react'

const UserTable = (props) => {
    return (
        <div>
            <table>
                <UserHeader />
                {
                    props.userData.map(user => {
                        return < UserData user={user} />
                    })
                }
            </table>
        </div>
    )
}

const UserHeader = () => {
    return (<tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Role Name</th>
        <th>Active</th>
    </tr>)
}

const UserData = (props) => {
    return (<tr>
        <td>{props.user.firstName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.role}</td>
        <td><input type="checkbox" checked={props.user.isActive} /></td>
    </tr>)
}

export default UserTable;