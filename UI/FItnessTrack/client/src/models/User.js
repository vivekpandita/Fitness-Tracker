const UserSchema = 
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      img: {
        type: String,
        default: null,
      },
      password: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
      },
    };
  
  export default ("User",UserSchema);