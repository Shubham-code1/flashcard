import {useRef,useState} from 'react'
import avatar from '../../images/avatar.png'
import { LuEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FiUpload } from "react-icons/fi";
import { AiFillFolderAdd } from "react-icons/ai";
import validationSchema from "./Validation";
import {Formik,Form,ErrorMessage,FieldArray,Field} from 'formik';
import { useDispatch } from "react-redux";
import localStorageSlice from "../../stateManagement/slice/LocalStorageSlice";

const {addFormValue} = localStorageSlice.actions; //importing actions from slice
const initialValues = {
    groupId:Math.random(),
    groupName:'',
    groupDescription:'',
    grpImage:'',
    term:[   
    //   {
    //     termName:'',
    //     termDescription:'',
    //     termImage:''
    //   }
    ],           // Here array is kept empty to make initial value empty, as per click event on add terms button values will be added following the ascending indexes.
}


function FormInput(){

    const grpImageUpload = useRef(null);
    const termImageUpload = useRef(null);
    const [groupImage, setGroupImage] = useState();

const dispatch = useDispatch();

    return (<>
    <div className="create-page">
      <Formik 
        initialValues={initialValues}   //initial value has been passed as props in Formik 

        //onSubmit is recieveing value and submitProps as an argument here which let us handle the submission events of form.
        onSubmit={(values,onSubmitProps)=>{
            
            dispatch(addFormValue(values));
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            setGroupImage('');   
            window.location.reload();
            alert("Card has been created succesfully")
        }}
        //Schema is used here for validation of Form. (here Yup library used )
        validationSchema={validationSchema}
        >
{
        (formikProps)=>{
          const {setFieldValue} = formikProps;

          return(<>
            <Form>
    {/* group input starts from here */}
        <div className="grp-input">
            <div className="grpinput-left">
                <div className="label">
                        <label htmlFor="groupName">Group Name :- <span className="error"> <ErrorMessage name="groupName"/></span></label>
                    </div>
                    <div> 
                            <Field type="text" 
                                    name="groupName"
                                    id="groupName"
                                    placeholder="Enter Group Name"
                                />
                    </div>
                    <div className="label">
                        <label htmlFor="groupDescription">Group Description :- 
                        <span className="error"> <ErrorMessage name="groupDescription"/></span></label>
                    </div>

                    <Field name="groupDescription">
                    {
                    (props)=>{
                        const {field} = props;

                          return(<>
                                <div className="grp-textarea">
                                    <textarea name="groupDescription" placeholder="Enter Group Descrption"  
                                    {...field}></textarea>
                                </div>
                        </>)
                    }
                }
              </Field> 
            </div>
                {/* image uploading through new FileReader constructor */}
            <div className="grpinput-right">
                            <input
                            type="file"
                            name="grpImage"  
                            ref={grpImageUpload}
                            accept="image/*"
                            hidden
                            onChange={(e) => {
                              const file = e.target.files[0];
                              const reader = new FileReader();
                              reader.readAsDataURL(file);
                              reader.onload = () => {
                                setFieldValue("grpImage", reader.result);
                                setGroupImage(reader.result);
                             };
                           }}
                         />


                    <div className="grp-Image">
                    { groupImage ? <img  src={groupImage} alt="N/A" width="100%" height="100%"/> :  <img src={avatar}  alt="NA" width="100%" height="100%"/>}
                    </div>

                    <div className="grp-photo-button">
                        <button
                                type="button"
                                title="Click to Upload Photo (optional)"
                                onClick={() => {
                                grpImageUpload.current.click();
                                }}>
                                   <FiUpload/> Upload Image
                                    </button>
                    </div>
                </div>
            </div>

    {/* group input end here */}

{/* Term input starts from here */}

            <div className="term-input">
           <FieldArray name='term'>
            {
                (fieldArrayProps)=>{
                    const {form} = fieldArrayProps;
                        const {values} = form;
                        const term = values.term;

                        return(<>
                        {
                            term.map((item,index)=>{
                                    return(<div key={index}>
                                        <div className="each-term-input">
                    <div className="count">{index + 1}.</div>

                    <div className="term-name">

                        <div className="label">
                        <label htmlFor={`term.${index}.termName`}>Term Name:-</label>
                        </div>

                        <div> 
                        <Field className="term-name-ip" name={`term.${index}.termName`} 
                                              placeholder="Enter Term name..."
                                              id={`term.${index}.termName`}
                                              type="text"
                                              />  
                        </div>

                        <div className="error">
                        <ErrorMessage name={`term.${index}.termName`}/>
                        </div>

                    </div>


                    <div className="term-desc">
                        <div className="label">
                        <label htmlFor={`term.${index}.termDescription`}>Term Description:-</label>
                        </div>

        <Field name={`term.${index}.termDescription`}>
                    {
                        (fieldProps)=>{
                                const {field} = fieldProps;
                        return(<>
                        <div className="term-textarea">
                        <textarea id={`term.${index}.termDescription`}
                                                          placeholder="Enter Term Description..."
                                                          {...field}/>
                        </div>

                        <ErrorMessage name={`term.${index}.termDescription`}>
                        {(errMsg)=>{
                        return  <div className="error">{errMsg}</div>
                                                  }
                                                      }
                        </ErrorMessage>
                            </>)
                         }
                    }
        </Field>
                        
                </div>
                    <div className="term-image">
                    <input
                        type="file"
                         name="termImage"  
                        ref={termImageUpload}
                        accept="image/*"
                        hidden
                        onChange={(e) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onload = () => {
                        setFieldValue(`term.${index}.termImage`, reader.result);
            };
          }}
        />

        {term[index].termImage ? <img src={term[index].termImage} alt="NA" /> : 
        <img src={avatar}  alt="NA"/>}
     
                
{/* term image upload button */}
                        <button
         className="btn-term-image"
          type="button"
          title="Click to Upload Photo (optional)"
          onClick={() => {
            termImageUpload.current.click();
          }}
        >Upload Image</button>
                    </div>


                    <div className="term-ops">
                      
                      {/* term edit button will let cursor focus on term name */}

                        <button type="button" title="click to edit" onClick={()=>{
                                        document.getElementById(`term.${index}.termName`).focus()
                                             }}> <LuEdit/> </button>

                        {/* term delete button will let delete the term during creation*/}
                        <button type="button"
                                        title="Click to delete term"
                                        onClick ={()=>{console.log(fieldArrayProps.remove(index)) }}
                                        >  <MdDelete/></button>

                      
                    </div>
                </div>
                                    </div>)
                            })
                        }
                            <div className="addterm">

                                {/* button to add more terms */}
                            <button type="button"
                                    title="Click to Add Terms"
                                        onClick ={()=>{console.log(fieldArrayProps.push('')) }}
                                            > <AiFillFolderAdd/> Add Terms</button>
                            </div>
                        </>)
                }
            }

           </FieldArray>
                
            </div>

{/* term input ends here */}


{/* create & Reset of Form Startstarts */}
            <div className="submission">
                <div className="btn">
                    {/* <button type="submit"><span></span>Create</button> */}

                    <button type="submit"
            title ="click to create card" 
            disabled={
            !formikProps.isValid ||  // if any validation error will exist(i.e isValid is false) Create button will be disabled automatically. 
            formikProps.isSubmitting // if isSubmitting value is true create button will be disabled to avoid multiple click by user to make single submission.
            }
            
            className={!formikProps.isValid ||  formikProps.isSubmitting ? "disable-color" : null}

           >Create</button>

                <button type="reset"
            title="Click to Reset form"
            onClick={()=>{
              setGroupImage('');   
            }}
            ><GrPowerReset/>Reset</button>


                </div>
            </div>
{/* create & Reset ends */}
</Form>
</>)
        }}
        </Formik>
    </div>
    </>)
}

export default FormInput;

