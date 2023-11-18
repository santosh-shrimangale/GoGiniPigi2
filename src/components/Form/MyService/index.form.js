import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { ProviderServices } from "../../../services";
import { Input as TextInput } from "../../Antd";
import { ImageElement } from "../../UiElement";
import { logger } from "../../../utils";

function MyServiceForm({ onSubmit }) {
  const [categories, setCategories] = useState([]);
  const initialValues = {
    sub_category: "",
  };
  const getCategories = async () => {
    try {
      const res = await ProviderServices.getCategoriesService();
      setCategories(res.data);
    } catch (error) {
      logger(error);
    }
  };
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

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => {
        return (
          <Form>
            <>
              <div className="profilePage_services_items">
                {categories.map((categoriesdata, index) => {
                  return (
                    <>
                      <div className="profilePage_services_head">
                        <h2 className="d-flex align-items-center mb-0">
                          <ImageElement
                            source={array[index].icon}
                            className="svg"
                            alt={array[index].alt}
                          />{" "}
                          {categoriesdata.name}
                        </h2>
                      </div>
                      <div className="row">
                        {categoriesdata.get_sub_categories.map(
                          (subCategory) => {
                            return (
                              <div className="col-6 col-sm-3">
                                <div className="form-group">
                                  <div className="form-check mb-0">
                                    <TextInput
                                      className="form-check-input"
                                      type="checkbox"
                                      name="sub_category"
                                      value="cut"
                                      id="cut"
                                      checked
                                    />
                                    <label
                                      className="form-check-label mb-0"
                                      htmlFor="cut"
                                    >
                                      {subCategory.name}
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
            </>
          </Form>
        );
      }}
    </Formik>
  );
}
export default MyServiceForm;
