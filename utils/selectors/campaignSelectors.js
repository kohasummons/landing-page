import { createSelector } from "reselect";

const campaignCategory = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.category
);

const campaignBeneficiaryName = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.beneficiary.name
);

const campaignBeneficiaryEmail = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.beneficiary.email
);

const campaignBeneficiaryPhone = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.beneficiary.phone
);

const campaignAmount = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.amount
);

const campaignMedia = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.media
); 

const campaignTitle = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.details.title
);

const campaignDescription = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.details.description
);

const campaignStart = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.details.startDate
);

const campaignEnd = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.details.endDate
);

const campaignCharity = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.charity
);

export {
  campaignCategory,
  campaignAmount,
  campaignMedia,
  campaignTitle,
  campaignDescription,
  campaignStart,
  campaignEnd,
  campaignBeneficiaryName,
  campaignBeneficiaryEmail,
  campaignBeneficiaryPhone,
  campaignCharity,
};
