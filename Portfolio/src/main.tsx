import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          //#BF94E4
          colorBgBase: "#F5F5F5",
          colorTextBase: "#fff",
          fontFamily: "Courier New",
          fontSize: 15,
          colorPrimary: "#fff",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
