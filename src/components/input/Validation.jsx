import * as Yup from 'yup';

    // Here ErrorMessage Validation is done by using Yup Library

 const validationSchema = Yup.object().shape({
    // validation message for Group Name
  groupName: Yup.string().min(5, "Minimum 5 characters are required")
    .max(15, "Should not more than 15 characters")
    .required("Required...."),
     // validation message for Group Description
  groupDescription: Yup.string()
  .min( 50,"Minimum 50 characters are required")
  .max(160, "should not be more than 160 characters")
  .required("Required...."),

  grpImage:Yup.mixed(),

  // validation message for termName and termDescriptions
  term: Yup.array().of(
    Yup.object().shape({
      termName: Yup.string()
      .min(5,"Minimum 5 characters are required")
        .max(20, "should not be more than 20 characters")
        .required("Required...."),
        
  // validation message for termDescriptions     
        termDescription: Yup.string()
        .min(50,"Minimum 50 characters are required")
        .max(300, "Must be less than 300 characters!")
        .required("Required...."),
        termImage:Yup.mixed()
    })
  ),
});



export default validationSchema;
    
 