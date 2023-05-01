import React from "react";
import { useState } from "react";

function Register() {
    const [userdata, setuserdata] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
    })
    const reg = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+).*$/);
    const regpass = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    const [error, seterror] = useState({
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        confirmpassword: null
    })

    const change = (e) => {
        if (e.target.name === 'first') {
            setuserdata({
                ...userdata,
                firstname: e.target.value
            });
            seterror({
                ...error,
                firstname:
                    e.target.value.length === 0
                        ? 'this value is reqired'
                        : e.target.value.length < 3
                            ? 'this value is not valid'
                            : null
            });
        }
        else if (e.target.name === 'last') {
            setuserdata({
                ...userdata,
                lastname: e.target.value
            });
            seterror({
                ...error,
                lastname:
                    e.target.value.length === 0
                        ? 'this value is reqired'
                        : e.target.value.length < 3
                            ? 'this value is not valid'
                            : null
            });
        }
        else if (e.target.name === 'email') {
            setuserdata({
                ...userdata,
                email: e.target.value
            });
            seterror({
                ...error,
                email:
                    e.target.value.length === 0
                        ? 'this value is reqired'
                        : reg.test(e.target.value) ? ''
                            : 'invalid'
                        
            });
        }
        else if (e.target.name === 'pass') {
            setuserdata({
                ...userdata,
                password: e.target.value
            });
            seterror({
                ...error,
                password:
                    e.target.value.length === 0
                        ? 'this value is reqired'
                        : regpass.test(e.target.value) ? ''
                            : 'invalid'
                        
            });
        }
        else if (e.target.name === 'confirm') {
            setuserdata({
                ...userdata,
                confirmpassword: e.target.value
            });
            seterror({
                ...error,
                confirmpassword:
                    e.target.value.length === 0
                        ? 'this value is reqired'
                        : e.target.value == userdata.password ? ''
                            : 'invalid'
                        
            });
        }
}

return (
    <>

        <form style={{margin:'50px'}}>
            <div class="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" name='first' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={userdata.firstname}
                    onChange={(e) => change(e)} />
                <p className="text-danger">{error.firstname}</p>
            </div>
            <div class="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" name='last'
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={userdata.lastname}
                    onChange={(e) => change(e)} />
                <p className="text-danger">{error.lastname}</p>
            </div>
            <div class="mb-3">
                <label className="form-label">Email</label>
                <input type="email" value={userdata.email}
                    onChange={(e) => change(e)} name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <p className="text-danger">{error.email}</p>
            </div>
            <div class="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name='pass' value={userdata.password}  onChange={(e) => change(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <p className="text-danger">{error.password}</p>
            </div>
            <div class="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" name='confirm' value={userdata.confirmpassword}  onChange={(e) => change(e)} class="form-control" id="exampleInputEmail1"  />
                <p className="text-danger">{error.confirmpassword}</p>
            </div>
            <button type="submit" class="btn btn-primary">Create Email</button>
            <br />
        </form>

    </>
)
}
export default Register;