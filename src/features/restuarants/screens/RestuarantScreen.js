import React, { useContext } from "react";
import { StatusBar, FlatList, View, SafeAreaView } from 'react-native';
import styled from "styled-components";
import { RestaurantsContext } from "../../../services/restaurant/restuarant.context";
import { RestuarantInfoCard } from "../components/RestuarantInfoCard";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from "../../../components/search.component";

const SafeArea = styled(SafeAreaView)`
   flex: 1;
   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestuarantScreen = () => {
  const { isLoading, error, restuarants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />

      <FlatList
        data={restuarants}
        renderItem={({ item }) => {
          return (
            <RestuarantInfoCard restuarant={item} />
          )
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />

    </SafeArea>
  )
}
