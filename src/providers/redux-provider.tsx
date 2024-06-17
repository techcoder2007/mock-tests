'use client';

import { ReactNode } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "@/redux/store";

export function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
ReduxProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
