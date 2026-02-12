import { ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme";

export function Loading() {
  return (
    <ActivityIndicator
      color={colors.blue[500]}
      size="large"
      style={styles.container}
    />
  );
}
