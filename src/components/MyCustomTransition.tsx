import { Component } from "react";
import { Transition } from "@headlessui/react";

interface MyCustomTransitionProps {}

// From https://tailwindui.com/components/application-ui/forms/comboboxes
class MyCustomTransition extends Component<MyCustomTransitionProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return <Transition />;
  }
}

export default MyCustomTransition;
