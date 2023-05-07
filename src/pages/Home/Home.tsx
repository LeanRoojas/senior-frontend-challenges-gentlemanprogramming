import { People } from "@/data";
import { addPeople } from "@/redux/states";
import React, { useEffect } from "react";
import { PeopleTable } from ".";
import { useDispatch } from "react-redux";

export type HomeProps = {
  id: string;
};

const Home: React.FC<HomeProps> = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return (
    <PeopleTable/>
  );
};

export default Home;
