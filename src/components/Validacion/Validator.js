import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const required = value =>{
    if(!value){
        return(
            <div className="invalid-feedback d-block">
                This field is required
            </div>
        );
    }
};

const email = value =>{
    if(!isEmail(value)){
        return(
            <div className="invalid-feedback d-block">
                This is not a valid email.
            </div>
        );
    }
};
render = () =>{
    return(
        <div>
            <form>
                onSubmit={handleLogin}
                ref={form}
                <input
                   type="text"
                   className="form-control"
                   validations={[required, email]}
                />
                <CheckButton
                    style={{ display: "none" }}
                    ref={checkBtn}
                />     
            </form>

        </div>    
    );
}