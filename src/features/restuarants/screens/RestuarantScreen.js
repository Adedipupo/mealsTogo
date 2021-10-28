import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestuarantInfoCard } from "../components/RestuarantInfoCard";


export const RestuarantScreen = () => {
    return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <View style={styles.search}>
      <Searchbar
        placeholder="e.g San Siro"
      />   
    </View>
    <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
      <RestuarantInfoCard />
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    search: {
       padding: 16
    }
  });