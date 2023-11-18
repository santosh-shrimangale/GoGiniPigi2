import { Form, Formik } from "formik";
import { BackButton, CommonButton, ImageElement } from "../../../UiElement";
import { Input as TextInput } from "../../../Antd";
import { Auth } from "../../../../apiEndPoints";

function StepTwo({
  onSubmit,
  handleNextForm,
  t,
  formData,
  storageKey,
  userId,
  categoryList,
}) {
  const initialValues = {
    sub_category: formData?.sub_category || [],
    user_id: userId,
    profile_stage: 2,
  };
  // const [subCategoryLength, setSubCategoryLength] = useState(false);
  // const [category, setCategory] = useState({});

  // useEffect(() => {
  //   let tempState = category;
  //   categoryList.map((item) => {
  //     tempState[`${item.name}`] = [];
  //   });
  //   setCategory({ ...tempState });
  // }, []);

  let array = [
    {
      icon: "/hair-icon.svg",
      alt: "hair-img",
    },
    {
      icon: "/beauty-icon.svg",
      alt: "beauty-img",
    },
    {
      icon: "/aesthetics-icon.svg",
      alt: "aesthetics-img",
    },
    {
      icon: "/wellness-icon.svg",
      alt: "wellness-img",
    },
  ];

  // if (category.Hair.length === 3) {
  //   setSubCategoryLength(true);
  // }
  // category.Beauty = 0;

  // For Disable check box
  // let checkBoxLength = {
  //   Hair: 0,
  //   Beauty: 0,
  //   Aesthetics: 0,
  //   Wellness: 0,
  // };
  // const handleCheckBox = ({ target }) => {
  //   checkBoxLength[target.alt] = 1;
  //   console.log(checkBoxLength, "checkBoxLength");
  // };
  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values) => {
        onSubmit(
          { ...values, apiEndPoint: Auth.providerProfileStepTwo },
          storageKey
        );
        handleNextForm("stepThree", "next");
      }}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <fieldset>
              <div className="authPage_services">
                <div className="authPage_services_items">
                  {categoryList.map((categoryData, index) => {
                    return (
                      <>
                        <div className="authPage_services_head">
                          <h2 className="d-flex align-items-center mb-0">
                            <ImageElement
                              source={array[index].icon}
                              className="svg"
                              alt={array[index].alt}
                            />
                            {categoryData.name}
                          </h2>
                        </div>
                        <div className="row">
                          {categoryData.get_sub_categories.map(
                            (subCategory) => {
                              return (
                                <div className="col-6 col-sm-3">
                                  <div className="form-group">
                                    <div className="form-check mb-0">
                                      <TextInput
                                        className="form-check-input"
                                        name="sub_category"
                                        // disabled={subCategoryLength}
                                        type="checkbox"
                                        value={subCategory?.id}
                                        validation={false}
                                        checked={props.values.sub_category.includes(
                                          subCategory?.id.toString()
                                        )}
                                        // alt={categoryData.name}
                                        // onChange={(e) => {
                                        //   props.handleChange(e);
                                        //   handleCheckBox(e);
                                        // }}
                                        // disabled={false}
                                      />
                                      <label
                                        className="form-check-label mb-0"
                                        htmlFor="face"
                                      >
                                        {subCategory?.name}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </fieldset>
            <div className="authPage_stepbtn d-flex justify-content-between align-items-center">
              <BackButton
                path=""
                linkAction={() => handleNextForm("stepOne", "stepTwo")}
              >
                <em className="icon-arrow-back" /> {t("text.common.back")}
              </BackButton>
              <CommonButton
                extraClassName="btn-lg btn-shadow ripple-effect-dark"
                variant="primary"
                type="submit"
              >
                {t("text.common.next")}
              </CommonButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default StepTwo;
