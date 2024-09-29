import Toast from "react-native-root-toast";
import * as Clipboard from "expo-clipboard";

export const formatSlug = (slug: string | null) => {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const inverseFormatSlug = (title: string | null) => {
  if (!title) return "";
  return title
    .split(" ")
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1).toLowerCase())
    .join("-");
};

export const copySlug = async (slug: string | null) => {
  if (!slug) return;

  await Clipboard.setStringAsync(formatSlug(slug)); // orange-happy-monkey -> Orange Happy Monkey

  Toast.show("", {
    duration: Toast.durations.LONG,
    position: Toast.positions.CENTER,
    shadow: true,
  });
};
