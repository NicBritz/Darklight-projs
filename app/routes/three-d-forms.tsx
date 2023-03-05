import type { ActionArgs } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react/dist/routeModules";
import { useState } from "react";
import styles from "../styles/three-d-forms.css";

export async function action({ request }: ActionArgs) {
  let formData = await request.formData();
  let form = formData.get("frm");
  console.log(form, formData);
  return form;
}

export const meta: MetaFunction = () => {
  return {
    title: "3D Forms",
    description: "A set of 3d sign up and login forms",
  };
};

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function ThreeDForms() {
  const [signup, setSignup] = useState(false);
  return (
    <div
      id="tdf-container"
      className="w-full h-screen bg-tdf-background bg-cover bg-no-repeat bg-center"
    >
      <div id="forms-wrapper" className={signup ? "change" : ""}>
        {/* sign in form */}
        <form
          method="post"
          action="/three-d-forms"
          className=" w-[50rem] h-[35rem] bg-cyan-600/50 flex flex-col justify-around items-center shadow-tdf-form absolute rounded"
        >
          <Link
            to="#"
            className="absolute top-8 left-8 font-semibold uppercase tracking-wide bg-white py-2 pr-4 pl-12 rounded-tdf-signup hover:bg-cyan-600 hover:text-white border-white border-2"
            onClick={() => setSignup(true)}
          >
            Sign Up
          </Link>
          <h2 className="text-4xl uppercase text-white tracking-wide">
            Sign In
          </h2>
          <div className="flex flex-col space-y-4">
            <input
              name="email"
              className="w-[25rem] h-12 py-2 px-4 bg-transparent border-white border-2 rounded-full text-white tracking-wide outline-none placeholder:text-white placeholder:font-light"
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              className="w-[25rem] h-12 py-2 px-4 bg-transparent border-white border-2 rounded-full text-white tracking-wide outline-none placeholder:text-white placeholder:font-light"
              type="password"
              placeholder="Password"
            />
            <input
              name="frm"
              className="bg-white hover:bg-cyan-600 hover:text-white text-cyan-600 cursor-pointer font-black uppercase w-[25rem] h-12 py-2 px-4  border-white border-2 rounded-full tracking-wide outline-none"
              type="submit"
              value="Sign In"
            />
          </div>
        </form>
        {/* sign up form */}
        <Form
          id="signup-form"
          className=" w-[50rem] h-[35rem] bg-cyan-600/50 flex flex-col justify-around items-center shadow-tdf-form absolute rounded"
        >
          <Link
            to="#"
            className="absolute top-8 right-8 font-semibold uppercase tracking-wide bg-white py-2 pr-12 pl-4 rounded-tdf-signin hover:bg-cyan-600 hover:text-white border-white border-2"
            onClick={() => setSignup(false)}
          >
            Sign In
          </Link>
          <h2 className="text-4xl uppercase text-white tracking-wide">
            Sign Up
          </h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-[25rem] h-12 py-2 px-4 bg-transparent border-white border-2 rounded-full text-white tracking-wide outline-none placeholder:text-white placeholder:font-light"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[25rem] h-12 py-2 px-4 bg-transparent border-white border-2 rounded-full text-white tracking-wide outline-none placeholder:text-white placeholder:font-light"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[25rem] h-12 py-2 px-4 bg-transparent border-white border-2 rounded-full text-white tracking-wide outline-none placeholder:text-white placeholder:font-light"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-[25rem] h-12 py-2 px-4 bg-transparent border-white border-2 rounded-full text-white tracking-wide outline-none placeholder:text-white placeholder:font-light"
            />
            <input
              name="frm"
              type="submit"
              value="Sign Up"
              className="bg-white hover:bg-cyan-600 hover:text-white text-cyan-600 cursor-pointer font-black uppercase w-[25rem] h-12 py-2 px-4  border-white border-2 rounded-full tracking-wide outline-none"
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
