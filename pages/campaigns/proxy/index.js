import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styles from "../../../styles/Campaigns.module.css";
import { useForm, useShallowEqualSelector } from "../../../utils/hooks";
import {
  campaignBeneficiary,
  campaignBeneficiaryName,
  campaignBeneficiaryEmail,
  campaignBeneficiaryPhone,
} from "../../../utils/selectors/campaignSelectors";
import { saveBeneficiary } from "../../../redux/campaign/campaignAction";
import { beneficiaryValidator } from "../../../utils/formValidation";

const Beneficiary = () => {
  const initialValues = {
    name: useShallowEqualSelector(campaignBeneficiaryName),
    email: useShallowEqualSelector(campaignBeneficiaryEmail),
    phone: useShallowEqualSelector(campaignBeneficiaryPhone),
  };

  const dispatch = useDispatch();
  const router = useRouter();

  let details = useShallowEqualSelector(campaignBeneficiary);

  const callback = () => {
    details = { ...values };
    dispatch(saveBeneficiary(details));
    router.push("proxy/target-amount");
  };

  const { values, error, handleChange, handleSubmit } = useForm(
    callback,
    initialValues,
    beneficiaryValidator
  );

  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1>Campaign.</h1>
          <div>
            <Image src="/campaignheader.png" alt="" width={150} height={150} />
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <h2>Tell donors who you&apos;re campaigning for</h2>
            <div className={styles.box}>
              <div className={styles.headingSection}>
                <div className={styles.arrowLeft}>
                  <Image
                    src="/arrow-left.png"
                    alt="arrow"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>Step 3 - Beneficiary</h3>
                <small>Add beneficiary details for the campaign</small>
                <div className={styles.arrowRight}>
                  <Image
                    src="/arrow-right.png"
                    alt="arrow"
                    width={50}
                    height={50}
                  />
                </div>
              </div>

              <div className={styles.selections}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Beneficiary&apos;s Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter beneficiary name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Beneficiary&apos;s Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter beneficiary email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">
                      Beneficiary&apos;s Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter beneficiary phone number"
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <button className={styles.btn}>Next</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Beneficiary;
