    import React from 'react'

    export default function Alert(props) {
        const captalise=(word)=>{
           let f = word[0];
           let rem = word.slice(1, word.length);
           return f.toUpperCase()+rem.toLowerCase();
        }
    return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role = "alert">
    <strong> {captalise(props.alert.type) } </strong>  {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"> */}
{/* </button> */}
</div>
    )
    }
