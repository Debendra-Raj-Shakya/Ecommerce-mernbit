import { ErrorMessage } from "formik";
import React, { FC } from "react";
type props = {
  name: string;
};

const FormErrorMessageBox: FC<React.PropsWithChildren<props>> = ({ name }) => {
  return (
    <div className="block">
      {/* @ts-ignore */}
      <ErrorMessage
        name={name}
        render={(msg) => (
          <label className="label">
            <span className="label-text-alt text-error">{msg}</span>
          </label>
        )}
      ></ErrorMessage>
    </div>
  );
};

export default FormErrorMessageBox;