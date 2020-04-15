import React, {Component} from 'react';
import {Formik, Field, Form} from 'formik';
import Pancasila from './pancasila.jpg'
// AxiosProvider, Get, Post, Put, withAxios } from 'react-axios';
import axios from 'axios';


class LoginForm extends Component {
        
    render() {
        return (
            <div className="wrapper">
                <h1>ID Heroes</h1>
                <Formik
                    initialValues={{
                    name: '',
                    born: '',
                    die: '',
                    description: '',
                    establishment: '',
                    imgUrl: ''
                }}
                    validate={values => {
                    let errors = {};
                    if (values.name === "") {
                        errors.name = "Name is required";
                    }
                    if (values.born === "") {
                        errors.born = "Born is requird";
                    }
                    if (values.die === "") {
                        errors.die = "Die is requird";
                    }
                    if (values.description === "") {
                        errors.description = "Description is requird";
                    }
                    if (values.establishment === "") {
                        errors.establishment = "Establishment is requird";
                    }
                    if (values.imgUrl === "") {
                        errors.imgUrl = "ImgUrl is requird";
                    }
                    return errors;
                }}
                    onSubmit
                    ={(values,{setSubmitting}) => {
                        axios.post('http://localhost:8000/heroes', {
            values
        })
                    alert("Form is Validated!");
                    setSubmitting(false);
                }}>
                    {({touched, errors, isSubmitting}) => (
                        <Form>
                        <div className="container">
                            <div className="row justify-content-md-center">
                        <div class="col-md-4 ">
                            <div class="card  style={{width: '18px'}}">
                                <div class="card-body">
                                    <img src={Pancasila} alt="logo" style={{width: '100px', height: '100px'}}/><p/>
                                <Field placeholder="name" type="name" name="name" className={`${errors.name && touched.name}`}/><p/>
                                <Field
                                    placeholder="born"
                                    type="number"
                                    name="born"
                                    className={`${errors.born && touched.born}`}/><p/>
                                <Field
                                    placeholder="die(Year)"
                                    type="number"
                                    name="die"
                                    className={`${errors.die && touched.die}`}/><p/>
                                <Field
                                    placeholder="description"
                                    type="name"
                                    name="description"
                                    className={`${errors.description && touched.description}`}/><p/>
                                <Field
                                    placeholder="establishment"
                                    type="name"
                                    name="establishment"
                                    className={`${errors.establishment && touched.establishment}`}/><p/>
                                <Field
                                    placeholder="IMG url"
                                    type="name"
                                    name="imgUrl"
                                    className={`${errors.imgUrl && touched.imgUrl}`}/><p/>
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                                {isSubmitting}
                            </div>
                        </div>
                    </div> 
                    </div> 
                    </div>
                    </Form >
                    )}
                </Formik>
                </div>
        )
    }
}
export default LoginForm;