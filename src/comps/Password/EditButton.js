import React from "react"
const EditButton = (parms) => {
    const EDIT_URL = "/editpassword/"+parms.id
    const act = () => {
        window.location.href = EDIT_URL
    }
    return(
        <>
        <button onClick={act}>Edit</button>
        </>
    )
}

export default EditButton
