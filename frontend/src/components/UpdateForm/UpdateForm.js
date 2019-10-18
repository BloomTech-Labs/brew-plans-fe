import React from 'react';
import axiosWithAuth from '../axiosWithAuth';


const UpdateForm = (props) => {

    const childID = localStorage.getItem('id')

    console.log(props); 
    // const title = ;
    // const ingredients = ;
    // const instructions = ;
    // const description = ;
 

    componentDidMount = () => {
        fetchPost(this.props.params.postId)
            .then((data) => {
                this.setState(state => {
                    state.blogPost = data;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    }

    const fetchPost = (id) => {
        return fetch('https://brewplans-production.herokuapp.com/userrecipes/' + childId, {
            method: 'GET',
            mode: 'CORS'
        })
        .then(res => res.json())
        .catch(err => err);}

    return ( 
        <>
            <div className="time-wrapper">
                <div className="title-field">{title}</div>
                <div className="ingred-field">{ingredients}</div>
                <div className="instr-field">{instructions}</div>
                <div className="desc-field">{description}</div>
                {/* <div className="desc-field" onClick={deleteEntry}>
                {Math.floor(hrsSlept)}<br/>Hrs
    </div> */}
            </div>
        </>
    );
}
 
export default UpdateForm;