"use client";

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import React, { PropsWithChildren, useState } from "react";
import emotionCache from "./emotion-cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { useLocalStorage } from "@mantine/hooks";

const MantainRegistry: React.FC<PropsWithChildren> = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  // const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

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
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          emotionCache={emotionCache}
          theme={{
            colorScheme,
            globalStyles: (theme) => ({
              body: {
                color:
                  theme.colorScheme === "dark"
                    ? `${theme.colors.dark[0]} !important`
                    : theme.black,
              },
            }),
          }}
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  );
};

export default MantainRegistry;
