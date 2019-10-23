import React from 'react';
// import axiosWithAuth from '../axiosWithAuth';
import { Formik } from 'formik';
import getUserRecipes from '../../store/actions/index';

const UpdateForm = props => {

    // const childID = localStorage.getItem('id')

    console.log(props); 
    const title = null;
    const ingredients = null;
    const instructions = null;
    // const description = ;
 

    // componentDidMount = () => {
    //     fetchPost(this.props.params.postId)
    //         .then((data) => {
    //             this.setState(state => {
    //                 state.blogPost = data;
    //                 return state;
    //             });
    //         })
    //         .catch((err) => {
    //             console.error('err', err);
    //         });
    // }

    // const fetchPost = (id) => {
    //     return fetch('https://brewplans-production.herokuapp.com/userrecipes/' + childId, {
    //         method: 'GET',
    //         mode: 'CORS'
    //     })
    //     .then(res => res.json())
    //     .catch(err => err);}

    return ( 
    //     <>
    //         <div className="time-wrapper">
    //             <div className="title-field">{title}</div>
    //             <div className="ingred-field">{ingredients}</div>
    //             <div className="instr-field">{instructions}</div>
    //             <div className="desc-field">{description}</div>
    //             {/* <div className="desc-field" onClick={deleteEntry}>
    //             {Math.floor(hrsSlept)}<br/>Hrs
    // </div> */}
    //         </div>
    //     </>
    

    <Formik
      initialValues={{
        title: updateRecipe.title,
        ingredients: updateRecipe.ingredients,
        instructions: updateRecipe.instructions
      }}
    >
      {props => (
        <View style={theme.formView}>
          <View style={theme.formInputsContainer}>
            <TextInput
              style={theme.formInput}
              onChangeText={value => handleChange('title', value)}
              onBlur={props.handleBlur('title')}
              value={updateRecipe.title}
              placeholder= 'Please enter title'
              label='title'
              mode='outlined'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={value => handleChange('ingredients', value)}
              onBlur={props.handleBlur('ingredients')}
              value={updateRecipe.ingredients}
              placeholder='Please enter ingredients'
              label='ingredients'
              mode='outlined'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={value => handleChange('instructions', value)}
              onBlur={props.handleBlur('instructions')}
              value={updateRecipe.instructions}
              placeholder='Please enter instructions'
              label='instructions'
              mode='outlined'
            />
          </View>
          <SubmitButton onPress={() => submitUpdate()} title='Submit' />
          <View style={theme.formSocialsContainer}>
            <Text
              style={{ marginBottom: 8, fontSize: 18, fontStyle: 'italic' }}
            >
              12345
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

const mapStateToProps = state => {
  return {
    updateRecipe: {
      title: state.user.updateRecipe.title,
      ingredients: state.user.updateRecipe.ingredients,
      instructions: state.user.updateRecipe.instructions
    }
  };

}
 
export default connect(
    mapStateToProps,
    {
      handleChange
    }
  )(withTheme(updateForm));
  