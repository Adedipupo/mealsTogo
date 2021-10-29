import React from "react";
import { StatusBar, StyleSheet, Text,FlatList, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components";
import { RestuarantInfoCard } from "../components/RestuarantInfoCard";

const SafeArea = styled(SafeAreaView)`
   flex: 1;
   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
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
  
    <FlatList 
      data={[{name:1},{name:2},{name:3}]}
      renderItem={() => <RestuarantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />

  </SafeArea>
  )
}

const styles = StyleSheet.create({
    search: {
       
    }
  });