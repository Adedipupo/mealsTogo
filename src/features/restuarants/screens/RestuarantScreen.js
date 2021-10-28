import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components";
import { RestuarantInfoCard } from "../components/RestuarantInfoCard";

const SafeArea = styled(SafeAreaView)`
   flex: 1;
   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestuarantInfoCardContainer = styled(View)`
   flex: 1; 
   padding: ${props => props.theme.space[3]};
`;

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const RestuarantScreen = () => {
    return (
    <SafeArea>
    <SearchContainer>
      <Searchbar
        placeholder="e.g San Siro"
      />   
    </SearchContainer>
    <RestuarantInfoCardContainer>
      <RestuarantInfoCard />
    </RestuarantInfoCardContainer>
  </SafeArea>
  )
}

const styles = StyleSheet.create({
    search: {
       
    }
  });