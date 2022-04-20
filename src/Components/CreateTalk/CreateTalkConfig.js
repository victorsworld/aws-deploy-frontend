const formArray = [
    {
      input: {
        type: 'title',
        name: 'title',
        id: 'input-title',
        label: 'Title',
        style: {
          width: '250px',
          marginTop: '15px'
        },
        validators: ['required'],
        errorMessages: ['this field is required']
      }
    },
    {
      input: {
        type: 'multiline',
        name: 'talk',
        id: 'input-multiline',
        label: 'Create Your Talk',
        multiline: true,
        required: true,
        rows: 5,
        style: {
          width: '250px',
          marginTop: '15px'
        },
        validators: ['required'],
        errorMessages: ['this field is required']
      }
    }
  ];
  
  export default formArray;