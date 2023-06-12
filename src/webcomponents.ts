import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

import ExampleComponent from './components/ExampleComponent/ExampleComponent'

customElements.define(
  "rwc-example",
  // @ts-ignore
  reactToWebComponent(ExampleComponent, React, ReactDOMClient, {})
);
