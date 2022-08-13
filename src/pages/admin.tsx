import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/NavBar";
import { useSession, signIn, signOut } from "next-auth/react";


const AdminPage: NextPage = () => {
    const { data: session } = useSession();
    return (
        <>
        <Navbar />

        <h1>Admin Page</h1>
        <div></div>
        </>
    )
};

AdminPage.auth = {
    role: 'admin',
    redirect: '/'
}

export default AdminPage;
