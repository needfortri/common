import { Component } from "react";
import { Transition } from "@headlessui/react";

interface SelectProps {}

// From https://tailwindui.com/components/application-ui/forms/comboboxes
class MyCustomTransition extends Component<SelectProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return <Transition />;
  }
}

export default MyCustomTransition;
