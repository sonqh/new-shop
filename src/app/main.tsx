import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store.ts";
import enUS from "antd/lib/locale/en_US";
import { ConfigProvider } from "antd";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider
        locale={enUS}
        theme={{
          token: {},
          components: {
            Slider: {
              colorPrimary: "#DA458F",
              trackHoverBg: "#DA458F",
              algorithm: true,
              handleLineWidthHover: 5,
              handleColor: "#DA458F",
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>,
);
