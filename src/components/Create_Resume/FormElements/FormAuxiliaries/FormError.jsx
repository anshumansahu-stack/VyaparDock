import React from 'react'

const FormError = (props) => {
    // Read all the errors from the context of react hook form
    // From the context i mean the ultimate source of truth where the errors object that tracks validation failures.
    const { errors } = props // look for an errors object passed in props.

    // Parsing through index strings that contain dots in between them, such that i have stored in Professionalexperience.
    // for every such parse formed, if there is an object, find its key and check the errors in it.

    // If theres no error this component will return null.
    if (!errors) return null

    /*
    If name is "experiences.0.jobtitle", split('.') creates ["experiences", "0", "jobtitle"]
    ..reduce() starts at the errors root object.First step: looks for errors["experiences"].
    Second step: looks inside that for index [0].Third step: looks inside that for ["jobtitle"].
    The obj?.[key] (optional chaining) ensures that if step 1 or 2 returns nothing(If fthere is no object to check for errors in the first place), 
    it stops instantly instead of throwing a JavaScript crash error.
    */
    const error = props.name.split('.').reduce((obj, key) => obj?.[key], errors)
    // Else just display the error message from the live react component state, which was populated whan one of my type validations failed..
    if (!error) return null

    return (
        <span className="mt-1 block text-xs italic text-red-400 ">
            {error.message}
        </span>
    )
}

export default FormError
