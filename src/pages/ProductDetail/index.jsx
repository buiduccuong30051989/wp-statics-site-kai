import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HttpClient } from "@/core/services/httpClient";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams } from "react-router-dom";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const FILE_SIZE = 5242880; // 5mb

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone is required"),
  numberOfItems: yup
    .number()
    .min(5, "Total must be at least 5 items")
    .required("This field is required"),
  link: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Invalid format url"
    ),
  file: yup
    .mixed()
    .test("file", "You need to provide a file", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    })
    .test("fileSize", "File too large", (value) => {
      return value[0] && value[0].size <= FILE_SIZE;
    })
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
});

export const PageProductDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(5);
  const [price, setPrice] = useState(0);
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    console.log(numberOfItems);
    HttpClient.get(
      `calculate-price?product=${params?.productId}&numberOfItems=${numberOfItems}`
    )
      .then((res) => {
        setPrice(res?.price);
        openModal();
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [numberOfItems]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.keys(data).map((k) => {
      if (typeof data[k] === "object") {
        formData.append(k, data[k][0]);
      } else {
        formData.append(k, data[k]);
      }
    });
    formData.append("paymentMethod", "momo-vnpay");
    formData.append("product", params?.productId);

    HttpClient.post("order", { body: formData })
      .then((res) => {
        setNumberOfItems(data.numberOfItems);
      })
      .catch((err) => {
        // setErrorServer(err.message);
        // setNumberOfItems(data.numberOfItems);
        // console.log(err);
      });

    // DEBUG ONLY
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    // @TODO: call api => success => open modal payment
  };

  return (
    <div className="p-product-detail py-8">
      <div className="container sm">
        <div className="order-confirm flex gap-x-24 justify-between items-center">
          <div className="confirm-p p-6 w-full">
            <div className="confirm-p-cover">
              <img src="/img/p-cover.png" />
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="order-confirm-form space-y-6 w-full"
          >
            <div className="field">
              <label className="label">Name</label>
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
                <label className="label">Email</label>
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
                <label className="label">Phone Number</label>
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
              <label className="label">Number of items</label>
              <input
                {...register("numberOfItems")}
                name="numberOfItems"
                type="number"
                className="input"
              />
              {errors.numberOfItems && (
                <p className="help is-danger">{errors.numberOfItems.message}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Facebook Link</label>
              <input
                {...register("link")}
                name="link"
                type="text"
                className="input"
              />
              {errors.link && (
                <p className="help is-danger">{errors.link.message}</p>
              )}
            </div>
            <div className="field">
              <input
                className="input pt-[3px]"
                accept={SUPPORTED_FORMATS}
                type="file"
                name="file"
                {...register("file")}
              />
              {errors.file && (
                <p className="help is-danger">{errors.file.message}</p>
              )}
            </div>
            <div className="field flex justify-center">
              <button type="submit" className="btn-main lg min-w-[160px] mt-6">
                Payment
              </button>
            </div>
          </form>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Scan Qr for Payment
                  </Dialog.Title>
                  <Dialog.Description className="text-center">
                    Please choose one of platform below to complete your order!
                  </Dialog.Description>

                  <div className="grid grid-cols-2 gap-x-8 mt-8">
                    <div className="box-payment text-center">
                      <p className="text-xs text-[#82869E]">
                        Số tiền cần thanh toán
                      </p>
                      <h4 className="text-black font-bold text-4xl mt-2 mb-6">
                        {price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}{" "}
                        đ
                      </h4>
                      <div className="flex items-center justify-center mb-4">
                        <img src="/img/vnpay-qr.png" />
                      </div>
                      <div className="flex items-center justify-center gap-x-8 text-xs">
                        <p className="text-[#82869E]">
                          MID:
                          <span className="text-black">4226546736742</span>
                        </p>
                        <p className="text-[#82869E]">
                          TID:
                          <span className="text-black">4226546736742</span>
                        </p>
                      </div>
                    </div>

                    <div className="box-payment text-center">
                      <p className="text-xs text-[#82869E]">
                        Số tiền cần thanh toán
                      </p>
                      <h4 className="text-black font-bold text-4xl mt-2 mb-6">
                        {price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}{" "}
                        đ
                      </h4>
                      <div className="flex items-center justify-center mb-4">
                        <img src="/img/momo-qr.png" />
                      </div>
                      <div className="flex items-center justify-center gap-x-8 text-xs">
                        <p className="text-[#82869E]">
                          MID:
                          <span className="text-black">4226546736742</span>
                        </p>
                        <p className="text-[#82869E]">
                          TID:
                          <span className="text-black">4226546736742</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      className="btn-main lg"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
