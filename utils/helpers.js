import { notification } from "antd";

const notificationError = (description, duration) => {
  duration = 5;
  notification.error({
    message: "Oops! Something went wrong",
    description,
    duration,
  });
};

const notificationSuccess = (description, duration) => {
  duration = 5;
  notification.success({
    message: "Successful",
    description,
    duration,
  });
};


export { notificationError, notificationSuccess };
