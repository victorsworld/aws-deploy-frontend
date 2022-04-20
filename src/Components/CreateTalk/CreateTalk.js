import React, { Component } from 'react'
import ButtonClass from '../../Factory/Button/ButtonClass'
import formArray from './CreateTalkConfig';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Input from '../../Factory/Input/InputClass';
import Spinner from '../../Factory/Spinner/Spinner';
import { connect } from 'react-redux';
import { createTalk } from '../../redux/actions/talkAction';

class CreateTalk extends Component {

  state = {
    formData: {
      title: '',
      talk: '',
      image: ''
    },
    submitted: false,
    uploadPictureToggle: false
  }
  
  uploadWidget = () => {

    window.cloudinary.openUploadWidget({ cloud_name: 'dy6xduf53', upload_preset: 'gxaofwpa', tags:['hamster']},
    (error, result)  => {
        if (error) {
          console.log(error)
        } else {
          
          if (result.event === 'success') {
            console.log(result.info.secure_url)
            const { formData } = this.state;
            formData['image'] = result.info.secure_url
            this.setState({
              ...this.state, 
              formData, 

            })
          }

        }
    });
  }

  successfullyCreatedTalk = () => {
    this.setState({
      submitted: false,
      formData: {
        email: '',
        password: ''
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true
    }, () => {

      let newUserObj = Object.assign({}, this.state.formData);
    
      newUserObj.id = this.props.authUser.user.id

  
      this.props.createTalk(newUserObj)
                .then(() => {
                  this.successfullyCreatedTalk();
                  this.props.history.push('/')
                })
                .catch(error => {
                  console.log(error);
                  this.setState({
                    submitted: false
                  })
                })

    });



  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  render() {

    const {submitted} = this.state;

    let form = (
      formArray.map((field, index) => {
          
        return (
          <div key={field.input.label}>
              <Input 
                {...field}
                {...this.state.formData}
                handleInputChange={this.handleChange}
              />
              <br />
          </div>
        )
      })
    ) 

    return (
      <div className='App'>

     <ValidatorForm className='Form' onSubmit={this.handleSubmit}>
            {
                submitted ? <Spinner /> : form
            }
            <br />
            <div style={{height: '25px',margin: '25px 20px'}}></div>


         

            <div style={{height: '25px',margin: '20px 20px'}}></div>
            <ButtonClass 
              color="primary"
              variant="contained"
              type="submit"
              disabled={submitted}
              > 
              {
                  (submitted && 'Your form is submitted!')
                  || (!submitted && 'Submit')
              }
            </ButtonClass>
            
          </ValidatorForm>

          <ButtonClass 
              onClick={this.uploadWidget}
              color="primary"
              variant="outlined"
              type="submit"
              style={{top: '-110px'}}
              >
                Add Image
           </ButtonClass>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default connect(mapStateToProps, { createTalk })(CreateTalk)