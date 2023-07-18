import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HttpClient } from "@/core/services/httpClient";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data)
    // @TODO: call api => success => next step
  };

  return (
    <div className="p-register py-8">
      <div className="container xxs">
        <div className="register-inner">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="order-confirm-form space-y-6 w-full"
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

// <div class="container">
//   <div class="lg:border-b lg:border-t lg:border-gray-200">
//     <nav class="mx-auto max-w-7xl" aria-label="Progress">
//       <ol
//         role="list"
//         class="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-gray-200"
//       >
//         <li class="relative overflow-hidden lg:flex-1">
//           <div class="overflow-hidden border border-gray-200 rounded-t-md border-b-0 lg:border-0">
//             {/* <!-- Completed Step --> */}
//             <a href="#" aria-current="step">
//               <span
//                 class="absolute left-0 top-0 h-full w-1 bg-main-color lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
//                 aria-hidden="true"
//               ></span>
//               <span class="flex items-start px-6 py-5 text-sm font-medium">
//                 <span class="flex-shrink-0">
//                   <span class="flex h-10 w-10 items-center border-main-color justify-center rounded-full border-2">
//                     <span class="text-main-color">01</span>
//                   </span>
//                 </span>
//                 <span class="ml-4 mt-0.5 flex min-w-0 flex-col">
//                   <span class="text-sm font-medium text-main-color">
//                     Step 01
//                   </span>
//                   <span class="text-sm font-medium text-gray-500">
//                     Confirm Information
//                   </span>
//                 </span>
//               </span>
//             </a>
//           </div>
//         </li>
//         <li class="relative overflow-hidden lg:flex-1">
//           <div class="overflow-hidden border border-gray-200 lg:border-0">
//             {/* <!-- Current Step --> */}
//             <a href="#" class="group">
//               <span
//                 class="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
//                 aria-hidden="true"
//               ></span>
//               <span class="flex items-start px-6 py-5 text-sm font-medium lg:pl-9">
//                 <span class="flex-shrink-0">
//                   <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
//                     <span class="text-gray-500">02</span>
//                   </span>
//                 </span>
//                 <span class="ml-4 mt-0.5 flex min-w-0 flex-col">
//                   <span class="text-sm font-medium text-gray-500">Step 02</span>
//                   <span class="text-sm font-medium text-gray-500">Payment</span>
//                 </span>
//               </span>
//             </a>
//             {/* <!-- Separator --> */}
//             <div
//               class="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
//               aria-hidden="true"
//             >
//               <svg
//                 class="h-full w-full text-gray-300"
//                 viewBox="0 0 12 82"
//                 fill="none"
//                 preserveAspectRatio="none"
//               >
//                 <path
//                   d="M0.5 0V31L10.5 41L0.5 51V82"
//                   stroke="currentcolor"
//                   vector-effect="non-scaling-stroke"
//                 />
//               </svg>
//             </div>
//           </div>
//         </li>
//         <li class="relative overflow-hidden lg:flex-1">
//           <div class="overflow-hidden border border-gray-200 rounded-b-md border-t-0 lg:border-0">
//             {/* <!-- Upcoming Step --> */}
//             <a href="#" class="group">
//               <span
//                 class="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
//                 aria-hidden="true"
//               ></span>
//               <span class="flex items-start px-6 py-5 text-sm font-medium lg:pl-9">
//                 <span class="flex-shrink-0">
//                   <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
//                     <span class="text-gray-500">03</span>
//                   </span>
//                 </span>
//                 <span class="ml-4 mt-0.5 flex min-w-0 flex-col">
//                   <span class="text-sm font-medium text-gray-500">Step 03</span>
//                   <span class="text-sm font-medium text-gray-500">Finish</span>
//                 </span>
//               </span>
//             </a>
//             {/* <!-- Separator --> */}
//             <div
//               class="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
//               aria-hidden="true"
//             >
//               <svg
//                 class="h-full w-full text-gray-300"
//                 viewBox="0 0 12 82"
//                 fill="none"
//                 preserveAspectRatio="none"
//               >
//                 <path
//                   d="M0.5 0V31L10.5 41L0.5 51V82"
//                   stroke="currentcolor"
//                   vector-effect="non-scaling-stroke"
//                 />
//               </svg>
//             </div>
//           </div>
//         </li>
//       </ol>
//     </nav>
//   </div>
// </div>;
