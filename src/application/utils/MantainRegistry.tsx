"use client";

import { MantineProvider } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import emotionCache from "./emotion-cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";

const MantainRegistry: React.FC<PropsWithChildren> = ({ children }) => {
  useServerInsertedHTML(() => (
    <style
      data-emotion={`${emotionCache.key} ${Object.keys(
        emotionCache.inserted
      ).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(emotionCache.inserted).join(" "),
      }}
    />
  ));
  return (
    <CacheProvider value={emotionCache}>
      <MantineProvider emotionCache={emotionCache}>{children}</MantineProvider>
    </CacheProvider>
  );
};

export default MantainRegistry;
