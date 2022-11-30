import {
  SAVE_CATEGORY,
  SAVE_AMOUNT,
  SAVE_MEDIA,
  SAVE_DETAILS,
  SAVE_BENEFICIARY,
  SAVE_CHARITY,
  CREATE_CAMPAIGN,
  CAMPAIGN_SUCCESS,
  CAMPAIGN_FAILURE,
} from "./campaignTypes";

const initialState = {
  category: null,
  beneficiary: {},
  charity: null,
  target_amount: "",
  media: [],
  details: {},
  errors: null,
  success: false,
};

const campaignReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case SAVE_AMOUNT:
      return {
        ...state,
        target_amount: payload,
      };
    case SAVE_MEDIA:
      return {
        ...state,
        media: payload,
      };
    case SAVE_DETAILS:
      return {
        ...state,
        details: payload,
      };
    case SAVE_BENEFICIARY:
      return {
        ...state,
        beneficiary: payload,
      };
    case SAVE_CHARITY:
      return {
        ...state,
        charity: payload,
      };
    case CREATE_CAMPAIGN:
      return {
        ...state,
        details: payload.result,
      };
    case CAMPAIGN_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case CAMPAIGN_FAILURE:
      return {
        ...state,
        error: payload.message,
      };

    default:
      return state;
  }
};

export default campaignReducer;
