import React from "react";
import ConditionalOutputIfElse from "./conditional-output-if-else";
import ConditionOutputInline from "./condition-output-inline";

const ConditionalOutput = () => {
    return(
        <>
          <ConditionalOutputIfElse/>
          <ConditionOutputInline/>
        </>
    );
};
export default ConditionalOutput;