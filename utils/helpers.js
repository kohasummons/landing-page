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

const notifier = (value) =>
  notification.error({
    message: value,
    duration: 2,
  });


export { notificationError, notificationSuccess, notifier };
