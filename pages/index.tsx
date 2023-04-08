import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/UI/Header";
import Modal from "../components/UI/Modal";
import RegisterModal from "../components/UI/RegisterModal";
import ToasterProvider from "../providers/ToasterProvider";

const Home: NextPage = () => {
  return (
    <div>
      <ToasterProvider/>
      <RegisterModal />
      <Header />
    </div>
  );
};

export default Home;
