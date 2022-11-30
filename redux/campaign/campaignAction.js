import request from "../../utils/requestMethods";

import {
  SAVE_CATEGORY,
  SAVE_AMOUNT,
  SAVE_MEDIA,
  SAVE_DETAILS,
  SAVE_BENEFICIARY,
  SAVE_CHARITY,
  CREATE_CAMPAIGN,
  CAMPAIGN_SUCCESS,
  CAMPAIGN_FAILURE
} from "./campaignTypes";

const saveCategory = (category) => {
  return {
    type: SAVE_CATEGORY,
    payload: category,
  };
};

const saveAmount = (amount) => {
  return {
    type: SAVE_AMOUNT,
    payload: amount,
  };
};

const saveMedia = (media) => {
  return {
    type: SAVE_MEDIA,
    payload: media,
  };
};

const saveDetails = (details) => {
  return {
    type: SAVE_DETAILS,
    payload: details,
  };
};

const saveBeneficiary = (beneficiary) => {
  return {
    type: SAVE_BENEFICIARY,
    payload: beneficiary,
  };
};

const saveCharity = (charity) => {
  return {
    type: SAVE_CHARITY,
    payload: charity,
  };
};

const createCampaign = async (dispatch, campaignData) => {
  try {
    let result = await request.post("/campaign/create", campaignData);
    result = result.json();
    result.status = "success";
    dispatch({ type: CREATE_CAMPAIGN, payload: result });
    dispatch({ type: CAMPAIGN_SUCCESS });

    return result;
  } catch (error) {
    let message = {};
    message.title = error.message;
    message.status = "error";

    dispatch({ type: CAMPAIGN_FAILURE, payload: message });

    return message;
  }
};

export {
  saveCategory,
  saveAmount,
  saveMedia,
  saveDetails,
  saveBeneficiary,
  saveCharity,
  createCampaign,
};
