import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HttpClient } from "@/core/services/httpClient";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TabsRegister } from "@/components";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone is required"),
  facebookLink: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Invalid format url"
    )
    .required("Please enter facebook link"),
  instagramLink: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Invalid format url"
    ),
});

export const PageRegister = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/lucky-number");
    // @TODO: call api => success => next step
  };

  return (
    <div className="p-register py-8">
      <div className="container sm">
        <div className="lg:border-b lg:border-t lg:border-gray-200">
          <TabsRegister step={1} />
        </div>
      </div>

      <div className="container xxs">
        <div className="register-inner">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="order-confirm-form space-y-6 card-shadow mt-16"
          >
            <div className="field">
              <label className="label">
                Name <abbr title="required">*</abbr>
              </label>
              <input
                {...register("name")}
                name="name"
                type="text"
                className="input"
              />
              {errors.name && (
                <p className="help is-danger">{errors.name.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="field">
                <label className="label">
                  Email <abbr title="required">*</abbr>
                </label>
                <input
                  {...register("email")}
                  name="email"
                  type="text"
                  className="input"
                />
                {errors.email && (
                  <p className="help is-danger">{errors.email.message}</p>
                )}
              </div>
              <div className="field">
                <label className="label">
                  Phone Number <abbr title="required">*</abbr>
                </label>
                <input
                  {...register("phone")}
                  name="phone"
                  type="number"
                  className="input"
                />
                {errors.phone && (
                  <p className="help is-danger">{errors.phone.message}</p>
                )}
              </div>
            </div>
            <div className="field">
              <label className="label">
                Facebook Link <abbr title="required">*</abbr>
              </label>
              <input
                {...register("facebookLink")}
                name="facebookLink"
                type="text"
                className="input"
              />
              {errors.facebookLink && (
                <p className="help is-danger">{errors.facebookLink.message}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Instagram Link</label>
              <input
                {...register("instagramLink")}
                name="instagramLink"
                type="text"
                className="input"
              />
            </div>
            <div className="field flex justify-center">
              <button type="submit" className="btn-main lg min-w-[160px] mt-6">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
