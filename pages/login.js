import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../layout/layout";
import styles from "../styles/Form.module.css";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";

const Login = () => {
  const [show, setShow] = useState(false);

  // Google login handler
  const handleGoogleSignin = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  // Github login handler
  const handleGithubSignin = async () => {
    signIn("github", { callbackUrl: "http://localhost:3000/" });
  };

  // formik
  const onSubmit = async (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <Layout>
      <Head>
        <title>Auth-app-login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <form
          className="flex flex-col gap-5"
          action="submit"
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="email"
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type={show ? "text" : "password"}
              name="password"
              placeholder="password"
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4 hover:text-[#6366f1] cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className="input-button">
            <button type="submit" className={`${styles.button}`}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              className={`${styles.button_custom} flex items-center`}
              onClick={handleGoogleSignin}
            >
              <FcGoogle />
              <span>Sign In with Google</span>
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              className={`${styles.button_custom} flex items-center`}
              onClick={handleGithubSignin}
            >
              <GoMarkGithub />
              Sign In with Github
            </button>
          </div>
        </form>
        <div className="text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link href="/register">
            <span className="text-blue-800 underline">Register</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
