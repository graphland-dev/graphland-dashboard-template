import { createEmotionCache } from "@mantine/core";

const emotionCache = createEmotionCache({
  key: "graphland-dev",
  prepend: false,
});
emotionCache.compat = true;

export default emotionCache;
