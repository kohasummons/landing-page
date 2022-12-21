import { createSelector } from "reselect";

const campaignCategory = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.category
);

const campaignBeneficiary = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.beneficiary
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

const campaignDetails = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.details
)

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
  (campaign) => campaign.details.start_date
);

const campaignEnd = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.details.end_date
);

const campaignCharity = createSelector(
  (state) => state.campaign,
  (campaign) => campaign.charity
);

export {
  campaignCategory,
  campaignAmount,
  campaignMedia,
  campaignDetails,
  campaignTitle,
  campaignDescription,
  campaignStart,
  campaignEnd,
  campaignBeneficiary,
  campaignBeneficiaryName,
  campaignBeneficiaryEmail,
  campaignBeneficiaryPhone,
  campaignCharity,
};
