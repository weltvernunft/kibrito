import React, { createContext, useContext } from "react";
import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus("http://app.kibrito.com:8055").with(rest());

export const DirectusContext = createContext(directus);
export const useDirectus = () => useContext(DirectusContext);
