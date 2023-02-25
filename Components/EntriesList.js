import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    calories: 200,
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    calories: 700,
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    calories: 100,
    title: "Third Item",
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    calories: 600,
    title: "Third Item",
  },
  {
    id: "58294a0f-3da1-471f-bd96-145571e29d72",
    calories: 800,
    title: "Third Item",
  },
  {
    id: "38294a0f-3da1-471f-bd96-145571e29d72",
    calories: 100,
    title: "Third Item",
  },
  {
    id: "58394a0f-3da1-471f-bd96-145571e29d72",
    calories: 400,
    title: "Third Item",
  },
  {
    id: "58294a0f-3da20-471f-bd96-145571e29d72",
    calories: 1000,
    title: "Third Item",
  },
];
export default function EntriesList({ navigation }) {
  let itemInfo;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          if (item.calories > 500) itemInfo = <Text>⚠️</Text>;
          else itemInfo = "";

          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate("EditEntry", {
                  name: "EditEntry",
                  id: item.id,
                })
              }
            >
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.flexError}>
                {itemInfo}
                <Text style={styles.categoryBox}>{item.calories}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    height: 500,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    // fontSize: 32,
  },
  categoryBox: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  flexError: {
    flexDirection: "row",
    alignItems: "center",
  },
});
