

import Head from "next/head";

import Nav from "../components/Nav";

import SectionHome from "../components/section-home";

import SectionAbout from "../components/section-about";

import SectionPortofolio from "../components/sestion-portofolio";

import SectionClient from "../components/section-client";

import SectionBlog from "../components/section-blog";

import SectionContact from "../components/section-contact";

import SectionFooter from "../components/section-footer";




const Profile = () => {
  return (
    <>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Nav></Nav>

      <SectionHome></SectionHome>

      <SectionAbout></SectionAbout>
      
      <SectionPortofolio></SectionPortofolio>

      <SectionClient></SectionClient>
      
      <SectionBlog></SectionBlog>

      <SectionContact></SectionContact>

      <SectionFooter></SectionFooter>

    </>
  )
}


export default Profile;