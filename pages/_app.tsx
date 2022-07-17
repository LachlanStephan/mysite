import type { AppProps } from 'next/app'
import { useEffect } from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from 'next'
import "../styles/globals.css";
import { SetMode, CheckLocal } from "../utils/darkmode";
import { SetLang } from "../utils/setLang";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   useEffect(() => {
    SetMode(CheckLocal());
    SetLang();
  }, [])
 // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

