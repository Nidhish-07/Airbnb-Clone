import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/UI/Header";
import Modal from "../components/UI/Modal";

const Home: NextPage = () => {
  return (
    <div>
      <Modal isOpen actionLabel="Submit"/>
      <Header />
    </div>
  );
};

export default Home;
