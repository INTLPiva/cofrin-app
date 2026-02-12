import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme";

interface Props extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading && <ActivityIndicator size="small" color={colors.white} />}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
