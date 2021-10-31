import React,{useState,useContext} from "react";
import styled from "styled-components";
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import { LocationContext } from "../services/location/location.context";



const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;


export const Search = () => {
    const {keyword} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
  return (
    <SearchContainer>
    <Searchbar
      placeholder="Search for a location"
      value={searchKeyword }
    />   
  </SearchContainer>
  )
}