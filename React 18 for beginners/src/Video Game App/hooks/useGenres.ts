import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGames = () => {
  return useData<Genre>("./genres");
};

export default useGames;
