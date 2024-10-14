import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import AdminDachBoard from "./Admin/AdminDashBoard";
import PagePokemon from "./Pokemons/PagePokemon";
import Page from "./SocialPosts/Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Page-Pokemon",
    element: <PagePokemon />,
  },
  {
    path: "/Admin-DashBoard",
    element: <AdminDachBoard />,
  },
  
  {
    path: "/SocilPosts",
    element: <Page />,
  },

]);
