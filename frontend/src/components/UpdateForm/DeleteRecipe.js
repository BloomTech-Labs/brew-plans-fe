import React from 'react';
// import axiosWithAuth from '../axiosWithAuth';
// import { Formik } from 'formik';
// import getUserRecipes from '../../store/actions/index';

    const DeleteRecipe = (id="") => {
        let trueUrl = `https://brewplans-production.herokuapp.com/userrecipes/${id}`;
        return fetch(trueUrl, {
            method: 'delete'
        })
        .then(res => res.json());
    };

export default DeleteRecipe;