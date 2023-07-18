import { useState, useEffect } from "react";
import { HttpClient } from "./core/services/httpClient";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required('Custom error message!'),
  })
  .required();

function App() {
  const [data, setData] = useState({});
  const [keyword, setKeyword] = useState("");
  const [errorServer, setErrorServer] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect( ()  => {
    HttpClient.get(`pokemon/${keyword}`).then((res) => setData(res)).catch((err) => {
      setErrorServer(err.message)
    })
  }, [keyword]);

  const onSubmit = (data) => {
    setErrorServer('')
    setKeyword(data.name);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 shadow mx-auto max-w-lg m-8 bg-slate-50">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              {...register("name")}
              name="name"
              className={`input ${errors.name ? "is-danger" : ""}`}
              type="text"
              placeholder="pikachu, bulbasaur"
              onChange={() => setErrorServer('')}
            />
          </div>
          {errors.name && (
            <p className="help is-danger">{errors.name.message}</p>
          )}
          {errorServer && (
            <p className="help is-danger">{errorServer}</p>
          )}
        </div>
        <div className="field">
          <button className="button is-primary" type="submit">
            Submit
          </button>
        </div>
      </form>

      {Boolean(data?.id) && (
        <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">2d ago</span>
            <span className="text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </span>
          </div>
          <div className="mt-6 w-fit mx-auto">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
              className="rounded-full w-28 "
              alt={data.name}
            />
          </div>

          <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">
              {data.name}
            </h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5">Active</p>

          <div className="h-1 w-full bg-black mt-8 rounded-full">
            <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
          </div>
          <div className="mt-3 text-white text-sm">
            <span className="text-gray-400 font-semibold">Storage:</span>
            <span>40%</span>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
